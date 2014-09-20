var Node = function(nodeData, params) {
  //Initializing node properties
  this.id = nodeData.uuid;
  this.params = params;
  this.parent = params.parent ? params.parent : null;
  this.name;
  this.depth = nodeData.depth ? nodeData.depth : 0;
  this.onComplete = params.onComplete;
  this.rank = params.rank;
  this.count = params.count;
  this.isLast = params.isLast;
  this.takePlaceOf = params.takePlaceOf ? params.takePlaceOf : null;
  this.visualState = "normal";
  this.glow = 0;
  // this.targetModeOver = false;
  this.shapes;
  this.children = [];
  this.ancestors = [];
  this.siblings = [];
  this.open = false;
  this.isSelected = false;
  this.isEdited = false;
  this.isTarget = false;
  this.isInPath;
  this.knGlow;
  this.backImage;
  this.totalChildren;
  this.appearDestX;
  this.appearDestY;
  this.panel;
  this.cached = false;
  this.nodeReady = false;
  this.text;

  // Needed for nested functions
  var that = this;
  
  //For root node : add current node to rootNode object of Tree, (for tree traversal)
  if (this.parent == null) tree.rootNode = this;

  //Add current node to flat list of nodes in Tree object (for quick node retrieval)
  tree.nodes[this.id] = this;

  //For all nodes, except root node
  if (this.parent != null) {
      this.parent.children[this.id] = this;        //Add current node to list of parent's children
      // this.parent.totalChildren = Object.keys(this.parent.children).length;

      for (var ancestorIndex in Object.keys(this.parent.ancestors))
      {
        var ancestorId = Object.keys(this.parent.ancestors)[ancestorIndex];
        this.ancestors[ancestorId] = tree.nodes[ancestorId];
      }
      this.ancestors[this.parent.id] = this.parent;
   }

  var targetModePrefix = (tree.targetMode == true) ? "-t" : "";
  var backImage = new Kinetic.Image({
    x:0,
    y:0,
    width:236,
    height:56,
    image: $("img#node-normal" + targetModePrefix)[0]
  });
  this.backImage = backImage;

  //Creating the label
  var editButton = new Kinetic.Rect({
    x: 0,
    y: 0,
    width: 58,
    height: 56
  });

  //Creating the label
  var label = new Kinetic.Rect({
    x: 58,
    y: 0,
    width: 179,
    height: 56,
    fill: 'white',
    opacity: 0
  });

  this.setName(nodeData.name);

  //Creating a group that will listen for events
  var labelGroup = new Kinetic.Group({
    height:56,
    width:182
  });
  labelGroup.add(label, this.text);

  //Creating the glow, off by default (opacity: 0)
  var glow = new Kinetic.Image({
    x: -25,
    y: -25,
    image: $("img#glow-nochildren")[0],
    width: 288,
    height: 108,
    opacity:0
  });
  this.knGlow = glow;

  //Creating and positioning the main group that contains all the shapes
  if (this.parent == null) {
    var startX = stage.getWidth() / 6;
    var startY = (stage.getHeight() - 82) / 2 - 56 / 2 ;
  }else {
    //Starting coordinates = underneath the parent ID
    // debugger;
    var startX = this.parent.shapes.x();
    var startY = this.parent.shapes.y();

    if (this.takePlaceOf != null) {
      var animate = false;
      
      this.appearDestX = this.takePlaceOf.appearDestX;
      this.appearDestY = this.takePlaceOf.appearDestY;

      this.midX = this.takePlaceOf.midX;
      this.midY = this.takePlaceOf.midY;
    }else {
      var animate = true;
      //Final coordinates = each skill in its own place
      this.appearDestX = this.parent.shapes.x() + this.parent.shapes.getWidth() + 80;
      this.appearDestY = (this.parent.shapes.y() + (56 / 2)) + ((((56 + 20) * this.parent.totalChildren) - 20) / -2) + ((56 + 20) * (Object.keys(this.parent.children).length - 1));

      //Intermediate coordinates = when skills split up
      this.midX = this.appearDestX;
      this.midY = this.parent.shapes.y();
    }
  }

  var group = new Kinetic.Group({
    x: startX,
    y: startY,
    width:240,
    height:56/*,
    draggable:true*/
  });
  group.add(glow, backImage, editButton, labelGroup);
  this.shapes = group;

  //Adding the group to the layer and drawing the layer
  nodesLayer.add(group);

  group.moveToBottom();

  nodesLayer.draw();

  //Chained animations of appearing nodes
  if (this.parent != null) {
    //Make this available on onFinish callback
    var newNode = this;

    var tween1 = new Kinetic.Tween({
      node: group, 
      x: newNode.midX,
      y: newNode.midY,
      duration: 0.05 + 0.10 * (this.rank / this.count),       // Animation speed for a single node is relative to node rank/position, first is fastest, etc.
      onFinish: function() {
        var tween2 = new Kinetic.Tween({
          node: group, 
          x: newNode.appearDestX,
          y: newNode.appearDestY,
          duration: 0.05 + 0.10 * (newNode.rank / newNode.count),
          onFinish: function() {
            newNode.nodeReady = true;
            //Last child has finished appearing
            if (newNode.isLast == true) {
              // debugger;
              // if (newNode.name == "siby") debugger;
              // debugger;
              newNode.parent.setChildrenSiblings();
              tree.busy = false;              //Releasing the tree-wide lock
              if (newNode.onComplete != null) {
                newNode.onComplete();
              }
              tree.readyForNextLevel.fire();

            }
          }
        }); 
        if (animate == true) tween2.play();
        else tween2.finish();
      }
    });
    if (animate == true) tween1.play();
    else tween1.finish();
  }

  //Creating the edge / link with the parent node (except for the root node which has no parent)
  if (this.parent != null) {
    this.edge = new Edge(this.parent, this);
    this.edge.shape.moveToBottom();
  }

  //Node events
  labelGroup.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
  labelGroup.on("mouseout", function() { document.body.style.cursor = 'default'; });
  //Click on skill name
  labelGroup.on("click tap", function() {
    //Checking and setting a tree-wide lock. 
    //Will be released after last retrieved node has finished appearing (that.expand) or after last node has finished hiding (that.contract)
    if (tree.busy) return;
    tree.busy = true;

    // Do we first have to contract the selectedNode before expading a new one ?
    //TODO : rewrite conditions
    var openSibling = that.getSiblingMatch("isInPath", true);
    if (typeof openSibling != "undefined") {
        openSibling.contract({releaseTreeLock: false});
        tree.selectedNode.deSelect();
    }

    //Node is closed, expanding it
    if (!that.open) {
      that.select();
      that.expand();
    }else {
      //Node is open, contracting it
      that.deSelect();
      that.contract();
    }
  });
  this.labelGroup = labelGroup;
  
  editButton.on("mouseover", function(e) { document.body.style.cursor = 'pointer';}); //that.editMouseOver(that, e.type)
  editButton.on("mouseout", function(e) { document.body.style.cursor = 'default'; }); //that.editMouseOver(that, e.type)
  //Click on "+" symbol for node editing
  editButton.on("click tap", function() {
    if (tree.targetMode == true) {
      that.setTarget();
      return;
    }

    //Checking and setting a tree-wide lock. 
    //Will be released after panel slide in / slide out
    if (tree.busy) return;
    tree.busy = true;

    //This takes care of switching from an edited node to another one
    //We need to chain the finishEdit of the previous node with the startEdit of the next one
    //The tree lock is released at the end of the startEdit
    if (tree.editedNode && tree.editedNode.id != that.id) {
      tree.editedNode.finishEdit(function() { 
        that.startEdit();
      });
      return;
    }

    //This takes care of the normal situation of entering / exiting edit mode for a node when no other node was being edited
    if (that.isEdited == false) {
      that.startEdit();
    }else {
      that.finishEdit();
    }
  });
  this.editButton = editButton;

  //Fire the rootNodeReady callback when the rootNode is ready
  if (this.parent == null) {
    tree.rootNodeReady.fire();
  }
}

//Query the API for the children and show them
Node.prototype.expand = function(params) {
  var that = this;

  if (params != null) {
    var onComplete = params.onComplete;
  }
  var url = baseUrl + "api/getNodeChildren/" + this.id + "/";

  $.ajax({
    url: url,
  }).done(function(json) {
    that.totalChildren = json.data.length;

    if (that.totalChildren > 0) {
      that.open = true;
      that.setVisualState("glow-children");

      //Iterate through children to add them
      //isLast parameter is needed to release the tree lock after adding the last node
      var i = 0;
      var isLast = false;

      json.data.forEach(function(child) {
        if (++i == json.data.length) isLast = true;
        new Node(child, {
          parent: that,
          rank: i,
          count: json.data.length,
          isLast: isLast,
          onComplete: onComplete ? onComplete : null
        })
      });

    }else {
      //No children, releasing tree lock now
      tree.busy = false;
      that.setVisualState("glow-nochildren");
    }
  });
}

//Selection of the node
Node.prototype.select = function(params) {
  if (this.isSelected) return this;

  //Check camera position and reposition if needed
  camera.checkCameraPosition(this);

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

    for (var childIndex in this.children) {
      var child = this.children[childIndex];

      //Animation to the center of the children nodes
      var tween1 = new Kinetic.Tween({
        node: child.shapes,
        x: this.shapes.x() + 240 + 80,
        y: this.shapes.y(),
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
              x: that.shapes.x(),
              y: that.shapes.y(),
              duration: 0.15,
               onFinish: function() {
                //Last child deletion and tree cleanup
                lastChild.delete();
                that.open = false;
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
  tree.selectedNode = null;

  return this;
}

//Loads the panel
Node.prototype.startEdit = function() {
  if (this.isEdited) return;

  this.panel = new Panel(this, {
    onComplete: function() {
      tree.busy = false;
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
  }

  this.isEdited = false;
  tree.editedNode = null;

  if (this.open == true) {
    this.setVisualState("glow-children");
  } else this.setVisualState("normal");
}

Node.prototype.getSiblingMatch = function(propertyName, propertyValue) {
  for (var siblingIndex in this.siblings) {
      var sibling = this.siblings[siblingIndex];
      if (sibling[propertyName] == propertyValue) return sibling;
  }
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
      }
      break;
    case "normal":
      this.knGlow.setImage($("img#glow-nonotch")[0]);
      this.backImage.setImage($("img#node-normal" + imageSuffix)[0]);
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
      this.backImage.setImage($("img#node-edit" + imageSuffix)[0]);
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
Node.prototype.getBoundingBox = function() {
  return {
    x1: this.shapes.x(),
    y1: this.shapes.y(),
    x2: this.shapes.x() + this.shapes.width(),
    y2: this.shapes.y() + this.shapes.height()
  }
}

//Caches the node
Node.prototype.cache = function() {
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
  // console.log(Object.keys(this.children).length);
  for (var childIndex in this.children) {
      var child = this.children[childIndex];
      child.delete();
  }

  if (this.isEdited) this.finishEdit();
  if (this.isSelected) this.deSelect();

  this.edge.shape.destroy();
  this.shapes.destroy();

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
  // debugger;

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
  this.parent.select();
  this.delete();
  stage.draw();
}

Node.prototype.setTarget = function() {
  if (this.isTarget) return;
  if (this.isEdited) return;
  if (this == tree.editedNode.parent) return;
  if (tree.targetNode) tree.targetNode.unsetTarget();

  this.isTarget = true;
  this.setGlow(1);
  tree.targetNode = this;

  // console.log()

  tree.editedNode.panel.$activeSubpanel.find("#move-step3").css("display", "block");
  tree.editedNode.panel.$activeSubpanel.find("#destinationUuid").val(this.id);
}

Node.prototype.unsetTarget = function() {
  if (!this.isTarget) return;
  if (this.isEdited) return;

  this.isTarget = false;
  // node.targetModeOver = false;
  // node.setVisualState(node.visualState, true, true);
  if (!this.isInPath) this.setGlow(0);
  tree.targetNode = null;
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