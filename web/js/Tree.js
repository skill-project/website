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
            ga("send", "event", "gotoSkill");
            $("#kinetic, #backdrop").css("visibility", "visible").fadeIn({duration: 500});
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

            camera.checkCameraPosition(tree.selectedNode);

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
            camera.checkCameraPosition(tree.selectedNode);
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
    if (typeof tree.targetNode != "undefined") tree.targetNode.unsetTarget();
    tree.targetMode = false;

    for (var nodeIndex in tree.nodes) {
        var node = tree.nodes[nodeIndex];
        node.setVisualState(node.visualState);
    }
    stage.draw();
}

Tree.prototype.executeMoveCopy = function() {
    //Cases refer to Dario's notes

    //used later to set the right visualState on parent (ie. if the last child is to be deleted, the parent should not have a notch)
    tree.editedNode.parent.childrenMarkedForDeleteCount++;

    //Case 1
    var openSibling = tree.targetNode.getSiblingMatch("isInPath", true);
    if (typeof openSibling != "undefined") {
        openSibling.contract({noAnim:true}).deSelect();
    }

    //Case 2
    if (tree.targetNode.isInPath == true && tree.targetNode.depth < tree.editedNode.depth) {
        tree.targetNode.contract({noAnim:true}).deSelect();
    }

    //This data will be used to create a new child, identical to the one we are about to remove
    var nodeData = {
        uuid: tree.editedNode.id,
        name: tree.editedNode.name,
        slug: tree.editedNode.slug,
        depth: tree.targetNode.depth + 1
    }

    var targetNode = tree.targetNode;
    tree.exitTargetMode();

    //Remove editedNode from previous location
    tree.editedNode.deleteFromDB();

    //createNewChild will add the child if targetNode is already open, or simply expand it if it's closed
    targetNode.createNewChild(nodeData);
}

Tree.prototype.sanityCheck = function() {

    var groupsFailed = [];

    ////////////////////
    //selectedNode tests
    var groupName = "selectedNode";
    var snErrors = [];
    var sn = tree.selectedNode;

    if (sn.isSelected !== true) snErrors.push("isSelected is false, should be true");
    if (sn.open !== true) snErrors.push("open is false, should be true");
    if (sn.isInPath !== true) snErrors.push("isInPath is false, should be true");

    var checkPassed = tree.sanityCheckErrors(groupName, snErrors);
    if (checkPassed === false) groupsFailed.push(groupName);
    // End of selectedNode tests
    ////////////////////////////


    //////////////////////////////
    //selectedNode siblings tests
    var groupName = "sn siblings";
    var sibErrors = [];

    if (sn.parent !== null) {
        if (sn.parent.getChildren().length !== sn.getSiblings().length + 1) sibErrors.push("selectedNode's parent children count doesn't match selectedNode's siblings count (+1)");
    }

    sn.getSiblings().forEach(function(sibling) {
        if (sibling.open === true) sibErrors.push("sibling of selectedNode (" + sibling.name + ") is open, it shouldn't be");
        if (sibling.isSelected === true) sibErrors.push("sibling of selectedNode (" + sibling.name + ") isSelected, it shouldn't be");
        if (sibling.isInPath === true) sibErrors.push("sibling of selectedNode (" + sibling.name + ") isInPath, it shouldn't be");
        if (sibling.freeSlots.length > 0) sibErrors.push("sibling of selectedNode (" + sibling.name + ") shouldn't have freeSlots because it's closed");
    });

    var checkPassed = tree.sanityCheckErrors(groupName, sibErrors);
    if (checkPassed === false) groupsFailed.push(groupName);
    //End of selectedNode siblings tests
    ////////////////////////////////////

    /////////////////
    //editedNode tests
    var groupName = "editedNode tests"
    var enErrors = [];

    if (typeof tree.editedNode !== "undefined") {
        if (tree.editedNode.parent.getChildren().length === 0) enErrors.push("editedNode's parent (" + tree.editedNode.parent.name + ") has no children");
    }

    if ($("#panel").css("display") === "block" && typeof tree.editedNode === "undefined") enErrors.push("panel is open but there is no editedNode");

    var checkPassed = tree.sanityCheckErrors(groupName, enErrors);
    if (checkPassed === false) groupsFailed.push(groupName);
    //editedNode tests
    //////////////////

    
    if (groupsFailed.length === 0) {
        console.log("Sanity check passed");
        return true;
    }else {
        console.error("Sanity check failed");
        return false;
    }
}

Tree.prototype.sanityCheckErrors = function(groupName, errors) {
    var checkPassed = true;

    if (errors.length > 0) {
        console.log("Errors on " + groupName);
        checkPassed = false;

        for (var errorIndex in errors) {
          console.log(errors[errorIndex]);
        }
    }

    return checkPassed;
}