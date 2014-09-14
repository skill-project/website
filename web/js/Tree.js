var Tree = function() {
    this.rootNode;
    this.nodes = [];
    this.busy = false;
    this.selectedNode;
    this.editedNode;
    this.rootNodeReady = $.Callbacks("unique");
    this.readyForNextLevel = $.Callbacks("unique");

    var that = this;

    this.getNodeById = function(id) {
    	
    }

    this.rootNodeReady.add(function () {
     //that.rootNode.select().expand();
     that.rootNode.select();
     that.readyForNextLevel.fire();
    });

    this.readyForNextLevel.add(function () {
        console.log(tree.rootNode);
        console.log(tree.selectedNode);
        if (!tree.rootNode.open)
        {
            console.log(jsonTest.data[tree.selectedNode.depth - 1]);
            var children = jsonTest.data[tree.selectedNode.depth - 1].children;
        }else {
            if (tree.selectedNode.depth == jsonTest.data.length) {
                tree.nodes[jsonTest.data[tree.selectedNode.depth - 1].selectedSkill].select();
                tree.selectedNode.setVisualState("glow-nochildren");

                return;
            }
            else var children = jsonTest.data[tree.selectedNode.depth].children;

            tree.nodes[jsonTest.data[tree.selectedNode.depth].id].select();
        }

        tree.selectedNode.totalChildren = children.length;

        if (tree.selectedNode.totalChildren > 0) {
            tree.selectedNode.open = true;
            tree.selectedNode.setVisualState("glow-children");

            //Iterate through children to add them
            //isLast parameter is needed to release the tree lock after adding the last node
            var i = 0;
            var isLast = false;

            children.forEach(function(child) {
              if (++i == children.length) isLast = true;
              new Node(child, tree.selectedNode, i, children.length, isLast);
            });
        }
    // that.selectedNode.children[Object.keys(that.selectedNode.children)[0]].select().expand();
    });
    
}

//54148a1c5ea7b2f95467220