var Tree = function() {
    this.rootNode;
    this.nodes = [];
    this.busy = false;
    this.selectedNode;
    this.editedNode;
    this.targetNode;
    this.rootNodeReady = $.Callbacks("unique");
    this.readyForNextLevel = $.Callbacks("unique");
    this.autoLoad = false;
    this.autoLoadCurrentDepth;
    this.targetMode = false;

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
            else {
                tree.nodes[jsonAutoLoad.data[tree.autoLoadCurrentDepth].uuid].select();
            }

            //Same logic as in Node:labelGroup.on("click")
            tree.selectedNode.totalChildren = children.length;            
            tree.selectedNode.open = true;
            tree.selectedNode.setVisualState("glow-children");

            var i = 0;
            var isLast = false;

            children.forEach(function(child) {
              if (++i == children.length) isLast = true;
              new Node(child, {
                      parent: tree.selectedNode,
                      rank: i,
                      count: children.length,
                      isLast: isLast
                  });
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

Tree.prototype.enterTargetMode = function() {
    tree.targetMode = true;

    for (var nodeIndex in tree.nodes) {
        var node = tree.nodes[nodeIndex];
        if (!node.isEdited && tree.editedNode.parent != node) node.setVisualState(node.visualState);
        // node.backImage.setImage($("img#node-normal-t")[0]);
    }
    stage.draw();
}

Tree.prototype.exitTargetMode = function() {
    tree.targetMode = false;

    for (var nodeIndex in tree.nodes) {
        var node = tree.nodes[nodeIndex];
        node.setVisualState(node.visualState);
    }
    stage.draw();
}

Tree.prototype.executeMoveCopy = function() {
    //Cases refer to Dario's notes
    
    //Case 1
    var openSibling = tree.targetNode.getSiblingMatch("isInPath", true);
    if (typeof openSibling != "undefined") {
        openSibling.contract({noAnim:true}).deSelect();
    }

    tree.editedNode.deleteFromDB();
    
    //Case 2
    if (tree.targetNode.isInPath == true && tree.targetNode.depth < tree.editedNode.depth) {
        tree.targetNode.contract({noAnim:true}).deSelect();
    }

    //selectedNode = previous parent of the moved node.
    //In Case 5 tree.selectedNode is undefined, so no need to deselect it
    if (typeof tree.selectedNode != "undefined") tree.selectedNode.deSelect();

    tree.exitTargetMode();
    tree.editedNode.finishEdit();
    tree.targetNode.select().expand();
}