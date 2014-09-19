var Node = function(nodeData, params) {
  //Initializing node properties
  this.id = nodeData.uuid;
  this.params = params;
  this.parent = params.parent ? params.parent : null;
  this.name = nodeData.name;
  this.depth = nodeData.depth ? nodeData.depth : 1;
  this.onComplete = params.onComplete;
  this.rank = params.rank;
  this.count = params.count;
  this.isLast = params.isLast;
  this.takePlaceOf = params.takePlaceOf ? params.takePlaceOf : null;
  this.visualState = "normal";
  this.glow = 0;
  this.shapes;
  this.children = [];
  this.ancestors = [];
  this.open = false;
  this.isSelected = false;
  this.isEdited = false;
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

  tree.nodes[this.id] = this;

  //For all nodes, except root node
  if (this.parent != null) {
      this.siblings = this.parent.children;   //Set siblings (children of parent)
      this.fillSiblings();
      tree.nodes[this.id] = this;             //Add current node to flat list of nodes in Tree object (for quick node retrieval)
      this.parent.children[this.id] = this;        //Add current node to list of parent's children

      for (var ancestorIndex in Object.keys(this.parent.ancestors))
      {
        var ancestorId = Object.keys(this.parent.ancestors)[ancestorIndex];
        this.ancestors[ancestorId] = tree.nodes[ancestorId];
      }
      this.ancestors[this.parent.id] = this.parent;
   }

  var backImage = new Kinetic.Image({
    x:0,
    y:0,
    width:236,
    height:56,
    image: $("img#node-normal")[0]
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

  //Writing the text of the skill
  //First attempt
  var text = new Kinetic.Text({
    text: this.name,
    fontSize: 14,
    fontFamily: 'Avenir-Book',
    fill: '#333333',
    align: 'center'
  });

  //Does it fit on a single line?
  var textWidth = text.getWidth();
  
  //No it doesn't, so we make another Text with a width restriction for automatic wordwrap
  if (textWidth > 160) {
    text = new Kinetic.Text({
      x: 67,
      y: 12,
      width:160,
      height:56 - 12,
      lineHeight:1.3,
      text: this.name,
      fontSize: 14,
      fontFamily: 'Avenir-Book',
      fill: '#333333',
      align: 'center'
    });
  } else {
    //Yes it does, so just position the Text
    text.setX(67).setY(22).setWidth(160);
  }
  this.text = text;

  //Creating a group that will listen for events
  var labelGroup = new Kinetic.Group({
    height:56,
    width:182
  });
  labelGroup.add(label, text);

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
    if (
        tree.rootNode.id != that.id &&                     //Not for rootNode
        tree.selectedNode != null && that.id != tree.selectedNode.id &&                 //Not for contracting the selectedNode itself
        that.depth <= tree.selectedNode.depth &&           //Not for a node shallower than the selectedNode
        tree.selectedNode.id != that.parent.id             //Not for parent
      ) {
      if (that.depth < tree.selectedNode.depth)           //Currently selectedNode is deeper than current node : 
      {                                                   //let's find, contract and deSelect current node's sibling which contains the selectedNode
        var openSibling = that.getSiblingMatch("open", true);
        openSibling.contract({releaseTreeLock: false});
      } else {                                            //Contract and deSelect previously selectedNode
        tree.selectedNode.contract({releaseTreeLock: false});
        tree.selectedNode.deSelect();
      }
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

  
  editButton.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
  editButton.on("mouseout", function() { document.body.style.cursor = 'default'; });
  //Click on "+" symbol for node editing
  editButton.on("click tap", function() {
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
  if (this.isSelected) return;

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

  return this;
}

Node.prototype.fillSiblings = function() {
  for (var siblingIndex in this.parent.children) {
      var sibling = this.parent.children[siblingIndex];
      if (sibling.id != this.id) this.siblings[sibling.id] = sibling;
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
}

Node.prototype.deSelect = function() {
  if (!this.isSelected) return;

  this.isSelected = false;
  tree.selectedNode = null;
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
Node.prototype.finishEdit = function(onComplete) {
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
Node.prototype.setVisualState = function (state) {
  switch (state) {
    case "auto":
      if (this.isSelected && this.isEdited) {
        this.setVisualState("glow-edit");
      } else if (!this.isSelected && this.isEdited) {
        this.setVisualState("normal-edit");
        this.setGlow(0);
      } else if (!this.isSelected && !this.isEdited && !this.open) {
        this.setVisualState("normal");
        this.setGlow(0);
      }
      break;
    case "normal":
      this.knGlow.setImage($("img#glow-nonotch")[0]);
      this.backImage.setImage($("img#node-normal")[0]);
      if (this.edge != null) this.edge.selected = false;
      this.text.setFill("#333333");
      this.setGlow(0);
      break;
    case "glow-children":
      if (!this.isEdited) {
        this.backImage.setImage($("img#node-glow-children")[0]);
        this.knGlow.setImage($("img#glow-children")[0]);
        this.text.setFill("#333333");
      }
      if (this.edge != null) this.edge.selected = true;
      this.setGlow(1);
      break;
    case "glow-nochildren":
      if (!this.isEdited) {
        this.backImage.setImage($("img#node-glow-nochildren")[0]);
        this.knGlow.setImage($("img#glow-nochildren")[0]);
        this.text.setFill("#333333");
      }
      if (this.edge != null) this.edge.selected = true;
      this.setGlow(1);
      break;
    case "normal-edit":
      this.backImage.setImage($("img#node-edit")[0]);
      this.text.setFill("#fff");
      break;
    case "glow-edit":
      if (this.totalChildren > 0) this.backImage.setImage($("img#node-glow-children")[0]);
      else this.backImage.setImage($("img#node-glow-nochildren")[0]);
      this.text.setFill("#333333");
      break;
  }
  nodesLayer.draw();

  this.visualState = state;
}

//Make it glow...
Node.prototype.setGlow = function (state) {
  if (this.glow == state) return;

  var opacity = (state == 1) ? 1 : 0;

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