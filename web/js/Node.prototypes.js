//Query the API for the children and show them
Node.prototype.expand = function(params) {
  var that = this;

  if (params != null) {
    var onComplete = params.onComplete;
    var animate = typeof params.animate !== "undefined" ? params.animate : true;
  }
  var url = baseUrl + "api/getNodeChildren/" + this.id + "/";

  loader.show();

  $.ajax({
    url: url,
  }).done(function(json) {
    that.totalChildren = json.data.length;

    if (that.totalChildren > 0) {
      that.open = true;
      that.setVisualState("glow-children");

      //Check camera position and reposition if needed
      camera.checkCameraPosition(that, json.data.length);

      //Iterate through children to add them
      //isLast parameter is needed to release the tree lock after adding the last node
      var i = 0;
      var isLast = false;

      fpsCounter.start();

      json.data.forEach(function(child) {
        if (++i == json.data.length) isLast = true;
        new Node(child, {
          parent: that,
          rank: i,
          count: json.data.length,
          isLast: isLast,
          onComplete: onComplete ? onComplete : null,
          animate: animate
        })
      });

    }else {
      //No children, releasing tree lock now
      tree.busy = false;
      that.setVisualState("glow-nochildren");
      camera.checkCameraPosition(that);
    }
  }).always(function(json) {
    loader.hide();
  }).fail(function(json) {
    tree.busy = false;
  });
}

//Selection of the node
Node.prototype.select = function(params) {
  if (this.isSelected) return this;

  if (params != null && params.finishEdit != false) var finishEdit = true;

  //deSelect previously selectedNode (only if it's not the current node itSelf)
  if (tree.selectedNode && tree.selectedNode.id != this.id) tree.selectedNode.deSelect(); 

  //Exiting edit mode for previous editedNode this is not the current node itself
  if (tree.editedNode && this.id != tree.editedNode.id && finishEdit == true) {
    tree.editedNode.finishEdit();
  }

  
  this.isSelected = true;
  tree.selectedNode = this;
  this.isInPath = true;

  return this;
}

Node.prototype.setChildrenSiblings = function() {
  for (var childIndex in this.children) {
    var child = this.children[childIndex];

    for (var siblingIndex in child.parent.children) {
        var sibling = child.parent.children[siblingIndex];
        if (sibling != child) child.siblings[sibling.id] = sibling;
    }
  }
}

//Get all visible children, recursively (stored in global array)
Node.prototype.getChildrenRecursive = function() {
  for (var child in this.children) {
    recursiveChildren.push(this.children[child]);
    this.children[child].getChildrenRecursive();
  }
}

//Hiding and destroying the children
Node.prototype.contract = function(params) {
  //For callback functions
  var that = this;

  //Setting parameters and default values
  if (typeof params != "undefined") {
    if (params.releaseTreeLock == null) var releaseTreeLock = true;

    if (params.onComplete != null) var onComplete = params.onComplete;
    else var onComplete = null;

    if (params.noAnim != null) var noAnim = params.noAnim;
    else var noAnim = false;
  }else {
    var onComplete = null;
    var releaseTreeLock = true;
    var noAnim = false;
  }

  //Node moves to top in order to cover edges contracting
  this.shapes.moveToTop();

  //Make deep children disappear without animation
  var openChild = this.getChildrenMatch("open", true);
  if (this.open == true && typeof openChild != "undefined") {
    for (var childIndex in openChild.children) {
        var child = openChild.children[childIndex];
        child.delete();
    }
    stage.draw();
  }

  //Take care of direct children
  var countPositioned = 0;
  var totalChildren = Object.keys(this.children).length;

  //If no children, not much to do
  if (totalChildren == 0) {
    if (releaseTreeLock == true) tree.busy = false;
    this.open = false;
    this.setVisualState("normal");
    if (onComplete != null) onComplete();

  //If one or more children, we animate all of them to the center, delete all but one and animate the last one
  }else {
    if (this.parent != null) this.parent.select();

    fpsCounter.start();

    for (var childIndex in this.children) {
      var child = this.children[childIndex];

      if (child.cached) child.clearCache();


      //Animation to the center of the children nodes
      var tween1 = new Kinetic.Tween({
        node: child.shapes,
        x: this.shapes.x() + this.sizes.midXOffset,
        y: this.shapes.y() + this.sizes.midYOffset - child.sizes.labelHeight / 2,
        duration: 0.15,
        onFinish: function() {
          if (countPositioned++ < totalChildren - 1) {
            //For all children except the last one, mark for later deletion
            this.skpNode.positionedForDeletion = true;
          }else {
            //Last child, delete all children marked for deletion
            that.deleteChildrenMatch("positionedForDeletion", true);

            //Make it available to onFinish callback
            var lastChild = this.skpNode;

            //Animation of the last child
            var tween2 = new Kinetic.Tween({
              node: lastChild.shapes,
              x: that.shapes.x() + 70,
              y: that.shapes.y() + that.sizes.midYOffset - child.sizes.labelHeight / 2 ,
              //scaleX: 0,
              duration: 0.15,
               onFinish: function() {
                fpsCounter.end();
                //Last child deletion and tree cleanup
                lastChild.delete();
                that.open = false;
                that.freeSlots = [];
                that.setVisualState("auto");
                if (releaseTreeLock == true) tree.busy = false;
                if (onComplete != null) onComplete();
              }
            });
            //With or without animation
            if (noAnim == false) tween2.play();
            else tween2.finish();
          }
        }
      });
      //Make objects available to onFinish callback
      tween1.skpNode = child;
      
      //With or without animation
      if (noAnim == false && Object.keys(this.children).length > 1) tween1.play();
      else tween1.finish();
    }
  }
  return this;
}

Node.prototype.deSelect = function() {
  if (!this.isSelected) return this;

  this.isSelected = false;
  delete tree.selectedNode;

  return this;
}

//Loads the panel
Node.prototype.startEdit = function() {
  if (this.isEdited) return;

  this.panel = new Panel(this, {
    onComplete: function() {
      tree.busy = false;
      camera.checkIfPanelBlocksEditedNode();
    }
  });

  this.setVisualState("normal-edit");

  this.isEdited = true;
  tree.editedNode = this; 
}

//Closes the panel
Node.prototype.finishEdit = function(onComplete, force) {
  if (tree.targetMode == true) return;
  if (!this.isEdited) return;
  if (this.panel.locked === true) return;

  if (this.panel) {
    this.panel.close({
      onComplete: function () {
        delete this.panel;
        actionsCount = 0;
        if (onComplete) {
          onComplete.call();      //Animation is being chained with new panel slide in, so tree is still busy
        }else {
          tree.busy = false;
        }
      }
    });
  }else tree.busy = false;

  this.isEdited = false;
  delete tree.editedNode;

  if (this.open == true) {
    this.setVisualState("glow-children");
  } else this.setVisualState("normal");
}

Node.prototype.getSiblings = function() {
  var siblings = [];
  for (var siblingIndex in this.siblings) {
      var sibling = this.siblings[siblingIndex];
      siblings.push(sibling);
  }
  return siblings;
}

Node.prototype.getSiblingMatch = function(propertyName, propertyValue) {
  for (var siblingIndex in this.siblings) {
      var sibling = this.siblings[siblingIndex];
      if (sibling[propertyName] == propertyValue) return sibling;
  }
}

Node.prototype.getChildren = function() {
  var children = [];
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      children.push(child);
  }
  return children;
}

Node.prototype.getChildrenMatch = function(propertyName, propertyValue) {
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      if (child[propertyName] == propertyValue) return child;
  }
}

Node.prototype.deleteChildrenMatch = function(propertyName, propertyValue) {
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      if (child[propertyName] == propertyValue) child.delete();
  }
}

//Set visual state of the node
Node.prototype.setVisualState = function (state, draw, ignoreGlow) {
  if (this == tree.rootNode) return;
  if (typeof draw == "undefined") draw = true;
  if (typeof ignoreGlow == "undefined") ignoreGlow = false;


  var targetModeSuffix = (tree.targetMode == true) ? "-t" : "";
  // var targetModeOver = (this.targetModeOver == true) ? "-on" : "";

  var imageSuffix = targetModeSuffix;// + targetModeOver;

  switch (state) {
    case "auto":
      if (this.isSelected && this.isEdited) {
        this.setVisualState("glow-edit");
      } else if (!this.isSelected && this.isEdited) {
        this.setVisualState("normal-edit");
        if (!ignoreGlow) this.setGlow(0);
      } else if (!this.isSelected && !this.isEdited && !this.open) {
        this.setVisualState("normal");
        if (!ignoreGlow) this.setGlow(0);
      } else if (this.isSelected && !this.isEdited && !this.open) {
        this.setVisualState("glow-nochildren");
        if (!ignoreGlow) this.setGlow(1);
      } else if (this.isSelected && !this.isEdited && this.open) {
        this.setVisualState("glow-children");
        if (!ignoreGlow) this.setGlow(1);
      }else {
        console.warn("Impossible to automatically determine state for this node : " + this.name);
        console.warn(this);
      }
      break;
    case "normal":

      this.knGlow.setImage($("img#glow-nonotch")[0]);

      if ((this.invisibleChildrenCount - this.childrenMarkedForDeleteCount) > 0) var imageRes = $("img#node-normal-children" + imageSuffix)[0];
      else var imageRes = $("img#node-normal" + imageSuffix)[0];

      this.backImage.setImage(imageRes);
      if (this.edge != null) this.edge.selected = false;
      this.text.setFill("#333333");
      if (!ignoreGlow) this.setGlow(0);
      break;
    case "glow-children":
      if (!this.isEdited) {
        this.backImage.setImage($("img#node-glow-children" + imageSuffix)[0]);
        this.knGlow.setImage($("img#glow-children")[0]);
        this.text.setFill("#333333");
      }
      if (this.edge != null) this.edge.selected = true;
      if (!ignoreGlow) this.setGlow(1);
      break;
    case "glow-nochildren":
      if (!this.isEdited) {
        this.backImage.setImage($("img#node-glow-nochildren" + imageSuffix)[0]);
        this.knGlow.setImage($("img#glow-nochildren")[0]);
        this.text.setFill("#333333");
      }
      if (this.edge != null) this.edge.selected = true;
      if (!ignoreGlow) this.setGlow(1);
      break;
    case "normal-edit":
      if (this.isEdited === true && tree.targetMode === true) imageSuffix = "";

      if ((this.invisibleChildrenCount - this.childrenMarkedForDeleteCount) > 0) var imageRes = $("img#node-edit-children" + imageSuffix)[0];
      else var imageRes = $("img#node-edit" + imageSuffix)[0];

      this.backImage.setImage(imageRes);
      this.text.setFill("#fff");
      break;
    case "glow-edit":
      if (this.totalChildren > 0) this.backImage.setImage($("img#node-glow-children" + imageSuffix)[0]);
      else this.backImage.setImage($("img#node-glow-nochildren" + imageSuffix)[0]);
      this.text.setFill("#333333");
      break;
  }

  if (draw) nodesLayer.draw();

  this.visualState = state;
}

//Make it glow...
Node.prototype.setGlow = function (state) {
  if (this.glow == state) return;

  var opacity = (state == 1) ? 1 : 0;

  if (state == 0) this.isInPath = false;

  var tween = new Kinetic.Tween({
    node: this.knGlow, 
    duration: 0.5,
    opacity: opacity
  });

  tween.play();

  this.glow = state;
}

//Returns the bouding box of the node (glow excluded)
Node.prototype.getBoundingBox = function(childrenCount) {
  if (typeof childrenCount == "undefined") {
    return {
      x1: this.shapes.x(),
      y1: this.shapes.y(),
      x2: this.shapes.x() + this.sizes.totalWidth,
      y2: this.shapes.y() + this.sizes.totalHeight
    }
  }else {
    //Hack : values shouldn't be hard codedp
    //If node really has no children, prepare a dummy one to calculate the boudingBox
    if (Object.keys(this.children).length == 0) {
      var modelChild = {
        sizes: {
          totalHeight: 56,
          totalWidth: 237,
          verticalGap: 20
        }
      };
    }else {
      var modelChild = this.children[Object.keys(this.children)[0]];
    }

    return {
      x1: this.shapes.x(),
      y1: this.shapes.y() + (this.sizes.labelHeight / 2) - (childrenCount * (modelChild.sizes.totalHeight + modelChild.sizes.verticalGap) - modelChild.sizes.verticalGap) / 2,
      x2: this.shapes.x() + this.sizes.totalWidth + this.sizes.horizontalGap + modelChild.sizes.totalWidth,
      y2: this.shapes.y() + (this.sizes.labelHeight / 2) + (childrenCount * (modelChild.sizes.totalHeight + modelChild.sizes.verticalGap) - modelChild.sizes.verticalGap) / 2
    }
  }
}

//Caches the node
Node.prototype.cache = function() {
  if (this.cached) console.warn("Node is already cached, we shouldn't be here");
  //Caching in only really carried out on nodes which are ready (static, finished appearing)
  if (this.nodeReady) {
    this.shapes.cache({
      x: -25,
      y: -25,
      width: this.shapes.width() + 50,
      height: this.shapes.height() + 50/*,
      drawBorder:true*/
    });

    //Glow is not negatively offseted anymore so we have to reposition the node
    this.shapes.x(this.shapes.x() - 25);
    this.shapes.y(this.shapes.y() - 25);

    // this.shapes.offsetX(-25).offsetY(-25);

    //Stop listening for events on cached nodes (they are not visible anyway)
    this.labelGroup.listening(false);
    this.editButton.listening(false);
    if (typeof this.edge != "undefined") this.edge.shape.listening(false);

    // Tough or impossible to cache custom drawn Shapes (drawFunc)
    // var nodeBoundingBox = this.edge.getBoundingBox();
    // this.edge.shape.cache({
    //   x: nodeBoundingBox.x1,
    //   y: nodeBoundingBox.x1,
    //   width: nodeBoundingBox.x2 - nodeBoundingBox.x1,
    //   height: nodeBoundingBox.y2 - nodeBoundingBox.y1 
    // });
    this.cached = true;
  }
}

//Clears the cache on the node (when it becomes visible again)
Node.prototype.clearCache = function () {
  this.shapes.clearCache();
  this.shapes.x(this.shapes.x() + 25);
  this.shapes.y(this.shapes.y() + 25);

  this.cached = false;

  this.labelGroup.listening(true);
  this.editButton.listening(true);
}

Node.prototype.delete = function() {
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      child.delete();
  }

  if (this.isEdited) this.finishEdit();
  if (this.isSelected) this.deSelect();
  if (this.isTarget) this.unsetTarget();

  this.edge.shape.destroy();
  this.shapes.destroy();

  this.parent.totalChildren--;
  delete this.parent.children[this.id];
  delete tree.nodes[this.id];
  delete this;
}

Node.prototype.inSamePathAs = function(node) {
  if (typeof node == "undefined" || node === null) console.warn("Node.inSamePathAs : requires a Node object");
  if (typeof this.depth != "number" || typeof node.depth != "number") console.warn("Node.inSamePathAs : depth is not set");

  if (this == node) return true;
  if (!this.isSelected || !node.isSelected) return false;
  if (this.isSiblingWith(node)) return false;

  //Which one is deeper ?
  if (this.depth > node.depth) {
      var deeperNode = this;
      var shallowerNode = node;
  }else if (this.depth < node.depth) {
      var deeperNode = node;
      var shallowerNode = this;
  }else {
    console.warn("Node.inSamePathAs : something is wrong with nodes depth, we should never enter this block.");
  }
  
  if (typeof deeperNode.ancestors[shallowerNode.id] != "undefined") return true;
  else return false;
}

Node.prototype.isSiblingWith = function(node) {
  if (typeof node == "undefined") console.warn("Node.isSiblingWith : requires a Node object");
  if (typeof this.siblings != "object") console.warn("Node.isSiblingWith : siblings don't seem to be set");
  if (typeof this.siblings[this.id] != "undefined") console.warn("Node.isSiblingWith : node is listed as sibling of itself");

  if (typeof this.siblings[node.id] != "undefined") return true;
  else return false;
}

Node.prototype.calculateAncestors = function() {
  var ancestors = [];
  var depth = this.depth;
  var parent = this.parent;
  while (depth > 0) {
    ancestors[parent.id] = parent;
    depth = parent.depth;
    var parent = parent.parent;
  }
  return ancestors;
}

//Called after creating a new skill (as a child) on the panel
//nodeData : data about the new node as returned by the server after saving it in the database
Node.prototype.createNewChild = function (nodeData) {
  var openSibling = this.getSiblingMatch("isInPath", true);
  if (typeof openSibling != "undefined") {
      openSibling.contract();
      tree.selectedNode.deSelect();
  }

  if (this.open) {
      var newSkill = new Node(nodeData, 
          {
              parent: this,
              rank: 1,
              count: 1,
              isLast: true,
              onComplete: selectExpandNewNode
          });
  } else {
      this.select().expand({ onComplete: selectExpandNewNode });
  }

  //Local function to make code more compact
  var selectExpandNewNode = function () {
      var selectedSibling = tree.nodes[nodeData.uuid].getSiblingMatch("isSelected", true);
      if (typeof selectedSibling != "undefined") selectedSibling.contract().deSelect();

      tree.nodes[nodeData.uuid].select();
      tree.nodes[nodeData.uuid].expand();
  }
}

//Called after creating a new skill (as a parent) on the panel
//nodeData : data about the new node as returned by the server after saving it in the database
//this = editedNode
Node.prototype.createNewParent = function (nodeData) {
  //Contract subchildren if present : we only want one extra level after editedNode
  var openChild = this.getChildrenMatch("open", true);
  if (typeof openChild != "undefined") {
      openChild.contract({noAnim: true});
  }

  //Used to reselect editedNode after newSkill creation
  if (this.isSelected) var selectEditedNode = true;
  else selectEditedNode = false;

  var openSibling = this.getSiblingMatch("isInPath", true);
  if (typeof openSibling != "undefined") {
      openSibling.contract({noAnim:true}).deSelect();
  }

  moveGroup = new Kinetic.Group();
  if (Object.keys(this.children).length > 0) {
      

      for (var childIndex in this.children) {
          var child = this.children[childIndex];
          moveGroup.add(child.shapes, child.edge.shape);
      }
  }

  moveGroup.add(this.shapes);

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

  //Delete entry of editedNode in editedNode's parent children list
  delete this.parent.children[this.id];

  //Here comes the new node !
  var newSkill = new Node(nodeData, 
  {
      parent: this.parent,         //Set its parent to be editedNode's parent
      takePlaceOf: this,           //Used for positioning
      rank: 1,
      count: 1,
      isLast: true
  });

  //*****************************
  //Operations on editedNode/this
  //*****************************

  //Change starting point of editedNode's edge : now it starts from the newSkill
  this.edge.nodeFrom = newSkill;

  //editedNode now has no more siblings
  this.siblings = [];

  //Set X position where the newSkill must appear (it will appear without animation so midX is not really useful)
  this.appearDestX += 240 + 80;
  this.midX += 240 + 80;

  //New parent of editedNode is now newSkill
  this.parent = newSkill;

  //Traverse the tree to recalculate the ancestors list
  this.ancestors = this.calculateAncestors();
  
  //Increase depth of editedNode and its children
  this.depth++;
  for (var childIndex in this.children) {
      this.children[childIndex].depth++;
  }

  //**********************
  //Operations on newSkill
  //**********************

  //Make new Skill the new selectedNode and make it glow
  //TODO : Condition doesn't seem appropriate
  if (tree.selectedNode && tree.selectedNode.id != this.id) newSkill.select({finishEdit: false});
  newSkill.setVisualState("glow-children");

  //Add editedNode (this) to newSkill's children list
  newSkill.children[this.id] = this;

  //newSkill always only has one child
  newSkill.totalChildren = 1;

  //newSkill is always in an open state
  newSkill.open = true;

  //close eventually open/selected sibling
  var openSibling = newSkill.getSiblingMatch("open", true);
  if (openSibling) {
      openSibling.deSelect();
      openSibling.contract();
  }

  //Reselect previously selected editedNode
  if (selectEditedNode) this.select();
  else newSkill.select();

  //animate new parent
  tweenMoveGroup.play();     
}

Node.prototype.setName = function (newName, twoLines, textObject) {
  this.name = newName;
  
  if (typeof twoLines == "undefined") {
    //Writing the text of the skill
    //First attempt
    var text = new Kinetic.Text({
      text: this.name,
      fontSize: 14,
      fontFamily: 'Avenir-Book',
      fill: '#333333',
      align: 'center',
      x: 67
    });

    //Does it fit on a single line?
    var textWidth = text.getWidth();
    if (textWidth <= 160) {
      //It fits, position it accordingly
      text.width(160).setY(22);

      //If node is being created
      if (typeof this.text == "undefined") this.text = text;
      
      //If node is being renamed
      else {
        this.text.setY(22);
        this.text.text(newName);
        stage.draw();
      }
    }else {
      //It doesn't fit on a single line, make it a two-lines text
      this.setName(newName, true, text);
    }
  }else if (twoLines == true) {
    if (typeof this.text == "undefined") this.text = textObject;

    this.text
      .y(12)
      .width(160).height(56 - 12)
      .lineHeight(1.3);

    this.text.text(newName);
    stage.draw();
  }
}

Node.prototype.deleteFromDB = function() {
  if (this.isSelected) {
    this.deSelect();
    this.parent.select();
  }

  if (this.parent.open === true) {
    //Add the current node Y position to parent's free slots array
    //This will be used if a new node is added before the parent is contracted, 
    //so it has a "missing tooth" that will be fille with the new node
    this.parent.freeSlots.push(this.shapes.y());
    this.parent.freeSlots.sort();
  }

  if (this.isEdited) this.finishEdit();

  this.parent.invisibleChildrenCount--;

  //If deleted node is last of parent's children, remove notch from parent (glow-nochildren)
  if (Object.keys(this.parent.children).length - 1 === 0) {
  	this.parent.setVisualState("glow-nochildren");
  }

  this.delete();
  stage.draw();
}

Node.prototype.setTarget = function() {
  if (this.isTarget) return;
  if (this.isEdited) return;
  if (this == tree.editedNode.parent) return;
  if (tree.targetNode) tree.targetNode.unsetTarget();

  this.isTarget = true;

  if ((this.invisibleChildrenCount - this.childrenMarkedForDeleteCount) > 0) this.setVisualState("glow-children");
  else this.setVisualState("glow-nochildren");

  tree.targetNode = this;

  tree.editedNode.panel.$activeSubpanel.find("#move-step3").css("display", "block");
  tree.editedNode.panel.$activeSubpanel.find("#destinationUuid").val(this.id);
  tree.editedNode.panel.$activeSubpanel.find("#destination-skill-name").empty().append(this.name);
}

Node.prototype.unsetTarget = function() {
  if (!this.isTarget) return;
  if (this.isEdited) return;

  this.isTarget = false;
  // node.targetModeOver = false;
  // node.setVisualState(node.visualState, true, true);

  // if (!this.isInPath) this.setGlow(0);
  if (!this.isInPath) this.setVisualState("normal");

  delete tree.targetNode;

  tree.editedNode.panel.$activeSubpanel.find("#move-step3").css("display", "none");
  tree.editedNode.panel.$activeSubpanel.find("#destinationUuid").empty();
  tree.editedNode.panel.$activeSubpanel.find("#destination-skill-name").empty();
}

Node.prototype.isNodeOnScreen = function() {
  var securityZone = camera.getSecurityZone(0);
  return camera.isBoxOnScreen(this.getBoundingBox(), securityZone, true);
}

// Node.prototype.editMouseOver = function(node, type) {
//   // debugger;
//   // console.log("ici");
//   if (type == "mouseover") {
//     document.body.style.cursor = 'pointer';
//     if (tree.targetMode == true) {
//       node.targetModeOver = true;
//       node.setVisualState(node.visualState, true, true);
//     }
//   }else {
//     document.body.style.cursor = 'default'; 
//     if (tree.targetMode == true && node.isTarget == false) {
//       node.targetModeOver = false;
//       node.setVisualState(node.visualState, true, true);
//     }
//   }
// }

Node.prototype.setSizes = function() {
  var sizes;

  if (this == tree.rootNode) {
    sizes = {
      sunRadius:82,
      labelWidth: 288,
      labelHeight: 288,
      editButtonWidth: 0,
      editButtonHeight: 0,
      glowOffsetX: 0,
      glowOffsetY: 0,
      glowWidth: 288,
      glowHeight: 108,
      verticalGap: 20,
      horizontalGap: 80,
      appearDestYOffset: -28,
      appearStartXOffset: -60,
      appearStartYOffset: -20
    }

    //Used by children when positioning relatively to their parent (= this node)
    sizes.startXOffset = sizes.labelWidth / 2 - sizes.sunRadius * 0.75;
    sizes.startYOffset = sizes.labelHeight / 2;

    sizes.midXOffset = sizes.labelWidth / 2 + sizes.sunRadius + sizes.horizontalGap;
    sizes.midYOffset = sizes.labelHeight / 2;

    sizes.edgeStartXOffset = sizes.labelWidth / 2 + sizes.sunRadius;
    sizes.edgeStartYOffset = sizes.labelHeight / 2;

    sizes.totalWidth = sizes.labelWidth;
    sizes.totalHeight = sizes.labelHeight;
  }else {
    sizes = {
      labelWidth: 179,
      labelHeight: 56,
      editButtonWidth: 58,
      editButtonHeight: 56,
      glowOffsetX: -25,
      glowOffsetY: -25,
      glowWidth: 288,
      glowHeight: 108,
      verticalGap: 20,
      horizontalGap: 80,
      appearDestYOffset: 0,
      appearStartXOffset: 0,
      appearStartYOffset: 0
    }

    sizes.totalWidth = sizes.labelWidth + sizes.editButtonWidth;
    sizes.totalHeight = sizes.labelHeight;

    sizes.startXOffset = sizes.labelWidth * 0.25;
    sizes.startYOffset = sizes.labelHeight / 2;

    sizes.midXOffset = sizes.totalWidth + sizes.horizontalGap;
    sizes.midYOffset = sizes.labelHeight / 2;

    sizes.edgeStartXOffset = sizes.totalWidth + 4;
    sizes.edgeStartYOffset = sizes.labelHeight / 2;
    // sizes.horizontalGap = sizes.totalWidth + 80;

    sizes.slotHeight = sizes.labelHeight + sizes.verticalGap;
  }

  this.sizes = sizes;
}

Node.prototype.getPositionRelativeToScreen = function() {
  var screenBoundingBox = camera.getSecurityZone(0);
  return {
    x: (this.shapes.x() - screenBoundingBox.minX) * camera.scale,
    y: (this.shapes.y() - screenBoundingBox.minY) * camera.scale
  }
}

Node.prototype.isBlockedByPanel = function() {
  if (camera.panelOffset > 0) {
    var positionRelativeToScreen = this.getPositionRelativeToScreen();

    var endOfNode = positionRelativeToScreen.x + (this.sizes.totalWidth * camera.scale);
    var startOfPanel = stage.width() - camera.panelOffset;
    if (endOfNode > startOfPanel) return (endOfNode - startOfPanel);
    else return false;
  }else return false;
}