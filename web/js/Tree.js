var Tree = function() {
    this.rootNode;
    this.nodes = [];
    this.busy = false;
    this.selectedNode;
    this.editedNode;
    this.rootNodeReady = $.Callbacks("unique");
    this.readyForNextLevel = $.Callbacks("unique");
    this.autoLoad = false;
    this.autoLoadCurrentDepth;

    //Action is set by PHP based on URL, sort of controller/route for JS
    //this.autoload : the tree will expand itself up to the requested node
    if (typeof action != "undefined" && action == "goto") this.autoLoad = true;

    //Tree callback, fired when the rootNode is fully initialized
    this.rootNodeReady.add(function () {
        //Starting autoload
        if (tree.autoLoad == true) {
            tree.autoLoadCurrentDepth = 0;
            tree.readyForNextLevel.fire();
        }
    });

    //Tree callback, fired when the last node has finished appearing
    //Currently, this callback function is only used for autoloading, so it stops if autoload is false
    this.readyForNextLevel.add(function () {
        if (!tree.autoLoad) return;

        if (tree.autoLoadCurrentDepth != jsonAutoLoad.data.length) {
            var children = jsonAutoLoad.data[tree.autoLoadCurrentDepth].children;
            if (tree.autoLoadCurrentDepth == 0) tree.rootNode.select();
            else tree.nodes[jsonAutoLoad.data[tree.autoLoadCurrentDepth].uuid].select();

            //Same logic as in Node:labelGroup.on("click")
            tree.selectedNode.totalChildren = children.length;            
            tree.selectedNode.open = true;
            tree.selectedNode.setVisualState("glow-children");

            var i = 0;
            var isLast = false;

            children.forEach(function(child) {
              if (++i == children.length) isLast = true;
              new Node(child, tree.selectedNode, i, children.length, isLast);
            });

            //Increment autoLoadCurrentDepth to be ready to handle next depth in json when the last node has finished appearing
            tree.autoLoadCurrentDepth++;
        }
        else {  //We have reached the end of the json, no more depths, select the final Skill and make it glow!
            tree.nodes[jsonAutoLoad.data[tree.autoLoadCurrentDepth - 1].selectedSkill].select();
            tree.selectedNode.setVisualState("glow-nochildren");
            tree.autoLoad = false;
        }
    });
}

//Called after creating a new skill on the panel
//nodeData : data about the new node as returned by the server after saving it in the database
//type : child or parent
//tree.editedNode is the node we are adding the new one to
//editedNode = Black Node = Parent node of the newly added node
Tree.prototype.addNewNode = function(nodeData, type) {
    //Local function to make code more compact
    var selectExpandNewNode = function () {
        tree.nodes[nodeData.uuid].select();
        tree.nodes[nodeData.uuid].expand();
    }
    
    if (type == "child") {
        //editedNode is closed, 2 options :
        // 1. it wasn't selected (doesn't glow) 
        // 2. it didn't have any children prior to adding the new one
        if (tree.editedNode.open == false) {
            //Option 1
            if (tree.editedNode.isSelected == false) {
                //Ok, 2 sub-options : 
                // 1a. : it's editedNode's parent that is selected (glowing)
                // 1b. : it's some other node (outside glowing path) that is selected
                if (tree.editedNode.parent.isSelected == true) {
                    //Option 1a
                    tree.editedNode.select();
                    tree.editedNode.expand({ onComplete: selectExpandNewNode });
                }else if (tree.editedNode.parent.isSelected == false) {
                    //Option 1b
                    //Looking for the sibling of editedNode which is open and contract it before expanding editedNode
                    tree.editedNode.getSiblingMatch("open", true).contract();
                    tree.editedNode.expand({ onComplete: selectExpandNewNode });
                }
            }
            //Option 2
            else if (tree.editedNode.isSelected == true) {
                tree.editedNode.select();
                tree.editedNode.expand({ onComplete: selectExpandNewNode });
            }
        }else {
            //editedNode is open and so already has children visible
            var newSkill = new Node(nodeData, 
                {
                    parent: tree.editedNode,
                    rank: tree.editedNode.totalChildren,
                    count: 1,
                    isLast: true,
                    onComplete: selectExpandNewNode
                });
        }
    }else if(type == "parent") {
        //Contract subchildren if present : we only want one extra level after editedNode
        var openChild = tree.editedNode.getChildrenMatch("open", true);
        if (typeof openChild != "undefined") {
            openChild.contract({noAnim: true});
        }

        if (tree.selectedNode.id != tree.editedNode.id && tree.selectedNode.depth >= tree.editedNode.depth) {
            var selectedNode = tree.selectedNode;
            selectedNode.deSelect();
            selectedNode.contract({noAnim: true});
        }

        moveGroup = new Kinetic.Group();
        if (Object.keys(tree.editedNode.children).length > 0) {
            

            for (var childIndex in tree.editedNode.children) {
                var child = tree.editedNode.children[childIndex];
                moveGroup.add(child.shapes, child.edge.shape);
            }
        }

        moveGroup.add(tree.editedNode.shapes);

        nodesLayer.add(moveGroup);

        var tweenMoveGroup = new Kinetic.Tween({
            node: moveGroup,
            x: moveGroup.x() + 240 + 80,
            y: moveGroup.y(),
            duration: 0.30,
            onFinish: function() {
                while(moveGroup.children.length > 0) {
                    var shape = moveGroup.children[0];
                    if (shape.nodeType != "Shape") shape.move({x: 240 + 80, y: 0});
                    shape.moveTo(nodesLayer);
                }
                moveGroup.destroy();
            }
        });


        //nodeData : id, name, depth
        var newSkill = new Node(nodeData, 
        {
            parent: tree.editedNode.parent,
            takePlaceOf: tree.editedNode,
            rank: 1,
            count: 1,
            isLast: true
        });

        tree.editedNode.edge.nodeFrom = newSkill;
        tree.editedNode.parent = newSkill;
        tree.editedNode.depth++;
        for (var childIndex in tree.editedNode.children) {
            tree.editedNode.children[childIndex].depth++;
        }



        if (tree.selectedNode.id != tree.editedNode.id) newSkill.select({finishEdit: false});

        newSkill.setVisualState("glow-children");

        newSkill.children[tree.editedNode.id] = tree.editedNode;
        newSkill.totalChildren = 1;
        newSkill.open = true;

        newSkill.parent.totalChildren = 1;
        newSkill.parent.children = [];
        newSkill.parent.children[newSkill.id] = newSkill;

        tweenMoveGroup.play();           
    }
}

Tree.prototype.countCachedNodes = function() {
    var nodesCached = 0;
    var nodesNotCached = 0;
    for (var nodeId in tree.nodes) {
        var node = tree.nodes[nodeId];
        if (node.cached) nodesCached++;
        else  nodesNotCached++;
    }

    console.log("Nodes cached : " + nodesCached);
    console.log("Nodes not cached : " + nodesNotCached);
}