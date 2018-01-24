var Node = function(nodeData, params) {
  //Initializing node properties
  this.id = nodeData.uuid;
  this.params = params;
  this.parent = params.parent ? params.parent : null;
  this.name;
  this.slug = nodeData.slug;
  this.depth = nodeData.depth ? nodeData.depth : 0;
  this.onComplete = params.onComplete;
  this.rank = params.rank;
  this.count = params.count;
  this.isLast = params.isLast;
  this.takePlaceOf = params.takePlaceOf ? params.takePlaceOf : null;
  this.animate = typeof params.animate !== "undefined" ? params.animate : true;
  this.visualState = "normal";
  this.glow = 0;
  this.invisibleChildrenCount = nodeData.childrenCount;
  this.childrenMarkedForDeleteCount = 0;
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
  this.rootOffsetX = 0;
  this.rootOffsetY = 0;
  this.panel;
  this.cached = false;
  this.nodeReady = false;
  this.text;
  this.sizes;
  this.freeSlots = [];

  // Needed for nested functions
  var that = this;

  //For root node : add current node to rootNode object of Tree, (for tree traversal)
  if (this.parent == null) {
    tree.rootNode = this;
    this.name = "Skills";
  }

  this.setSizes();

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

  if (this.parent == null) {
    var sunImage = new Kinetic.Image({
      x:0,
      y:0,
      width:this.sizes.labelWidth,
      height:this.sizes.labelHeight,
      image: $("img#node-sun")[0]
    });
    this.sunImage = backImage;

    var startX = stage.getWidth() / 6;
    var startY = (stage.getHeight() - globalSizes.footerHeight) / 2 - this.sizes.labelHeight / 2 ;

    var group = new Kinetic.Group({
      x: startX,
      y: startY
    });

    var circleLabel = new Kinetic.Circle({
      radius:this.sizes.sunRadius,
      x: this.sizes.labelWidth / 2,
      y: this.sizes.labelHeight / 2
    });

    group.add(sunImage, circleLabel);

    this.shapes = group;
    var labelGroup = circleLabel;
    this.labelGroup = labelGroup;

    this.backImage = new Kinetic.Image();
    this.knGlow = new Kinetic.Image();


    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);
    
  } else {
    var targetModePrefix = (tree.targetMode == true) ? "-t" : "";

    if (this.invisibleChildrenCount > 0) var imageRes = $("img#node-normal-children" + targetModePrefix)[0];
    else var imageRes = $("img#node-normal" + targetModePrefix)[0];
  
    var backImage = new Kinetic.Image({
      x:0,
      y:0,
      width:this.sizes.labelWidth + this.sizes.editButtonWidth,
      height:this.sizes.labelHeight,
      image: imageRes
    });
    this.backImage = backImage;

    //Creating the label
    var editButton = new Kinetic.Rect({
      x: 0,
      y: 0,
      width: this.sizes.editButtonWidth,
      height: this.sizes.labelHeight
    });

    //Creating the label
    var label = new Kinetic.Rect({
      x: this.sizes.editButtonWidth,
      y: 0,
      width: this.sizes.labelWidth,
      height: this.sizes.labelHeight,
      fill: 'white',
      opacity: 0
    });

    this.setName(nodeData.name);

    //Creating a group that will listen for events
    var labelGroup = new Kinetic.Group({
      height: this.sizes.labelHeight,
      width: this.sizes.labelWidth
    });
    labelGroup.add(label, this.text);

    //Creating the glow, off by default (opacity: 0)
    var glow = new Kinetic.Image({
      x: this.sizes.glowOffsetX,
      y: this.sizes.glowOffsetY,
      image: $("img#glow-nochildren")[0],
      width: this.sizes.glowWidth,
      height: this.sizes.glowHeight,
      opacity:0
    });
    this.knGlow = glow;

    //Creating and positioning the main group that contains all the shapes
    //Starting coordinates = underneath the parent ID

    var startX = this.parent.shapes.x() + this.parent.sizes.startXOffset;
    var startY = this.parent.shapes.y() + this.parent.sizes.startYOffset - this.sizes.labelHeight / 2;

    if (this.takePlaceOf != null) {
      var animate = false;
      
      this.appearDestX = this.takePlaceOf.appearDestX;
      this.appearDestY = this.takePlaceOf.appearDestY;

      this.midX = this.takePlaceOf.midX;
      this.midY = this.takePlaceOf.midY;
    }else {
      var animate = this.animate;

      //Final coordinates = each skill in its own place
      this.appearDestX = this.parent.shapes.x() + this.parent.sizes.midXOffset// + this.parent.shapes.getWidth() + this.sizes.horizontalGap;

      //Reuse a free slot if the parent has any
      //Free slots are created after a child has been removed ("missing tooth")
      if (this.parent.freeSlots.length > 0) {
        this.appearDestY = this.parent.freeSlots.shift();
      }else {
        this.appearDestY = (this.parent.shapes.y() + this.parent.sizes.labelHeight / 2) + ((this.sizes.slotHeight * this.parent.totalChildren) / - 2 + this.sizes.verticalGap / 2) + (this.sizes.slotHeight * (Object.keys(this.parent.children).length - 1));
      }

      //Intermediate coordinates = when skills split up
      this.midX = this.parent.shapes.x() + this.parent.sizes.midXOffset;
      this.midY = this.parent.shapes.y() + this.parent.sizes.midYOffset - this.sizes.labelHeight / 2;
    }

    var group = new Kinetic.Group({
      x: startX,
      y: startY,
      width: this.sizes.labelWidth + this.sizes.editButtonWidth,
      height: this.sizes.labelHeight/*,
      draggable:true*/
    });
    group.add(glow, backImage, editButton, labelGroup);
    this.shapes = group;

    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);

    group.moveToBottom();
  }

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
            //If we are in targetMode, it's possible that an editedNode was collapsed. Now we bring it back.
            if (tree.targetMode === true && typeof tree.editedNode !== "undefined") {

              //Here it is!
              if (tree.editedNode.id === newNode.id) {
                newNode.panel = tree.editedNode.panel;
                tree.editedNode = newNode;

                newNode.isEdited = true;
                newNode.setVisualState("normal-edit");
              }
            }

            newNode.nodeReady = true;
            //Last child has finished appearing
            if (newNode.isLast == true) {
              fpsCounter.end();

              newNode.parent.setChildrenSiblings();
              newNode.parent.invisibleChildrenCount = Object.keys(newNode.parent.children).length;
              tree.busy = false;              //Releasing the tree-wide lock
              if (newNode.onComplete != null) {
                newNode.onComplete();
              }
              tree.readyForNextLevel.fire();
            }
          }
        }); 
        if (animate == true) tween2.play();
        else {
          tween2.finish();
        }
      }
    });
    if (animate == true) tween1.play();
    else {
      tween1.finish();
    }
  }

  //Creating the edge / link with the parent node (except for the root node which has no parent)
  if (this.parent != null) {
    this.edge = new Edge(this.parent, this);
    this.edge.shape.moveToBottom();
  }

  if (animate === false) {
    stage.draw();
  }

  //Node events
  labelGroup.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
  labelGroup.on("mouseout", function() { document.body.style.cursor = 'default'; });
  //Click on skill name
  labelGroup.on("click tap", function() {
    //When tree is in target mode (move/copy), click on the sun doesn't contract/expand but sets it as a target
    if (tree.targetMode == true && that == tree.rootNode) {
      that.setTarget();
      return;
    }

    if (tour.isActive == true || doTour == true) tour.actionOnTree("label-click", that);

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
      ga("send", "event", "nodeOpen", that.name);
      that.select();
      that.expand();
    }else {
      //Node is open, contracting it
      ga("send", "event", "nodeClose", that.name);
      that.deSelect();
      that.contract();
    }
  });
  this.labelGroup = labelGroup;
  
  if (this != tree.rootNode) {
    editButton.on("mouseover", function(e) { document.body.style.cursor = 'pointer';}); //that.editMouseOver(that, e.type)
    editButton.on("mouseout", function(e) { document.body.style.cursor = 'default'; }); //that.editMouseOver(that, e.type)
    //Click on "+" symbol for node editing
    editButton.on("click tap", function(e) {
      if (tree.targetMode == true) {
        that.setTarget();
        return;
      }

      if (tour.isActive == true || doTour == true) tour.actionOnTree("plus-click", that);

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
        ga("send", "event", "nodeEdit", that.name);
        that.startEdit();
      }else {
        that.finishEdit();
      }
    });
    this.editButton = editButton;
  }

  //Fire the rootNodeReady callback when the rootNode is ready
  if (this.parent == null) {
    if (tree.autoLoad == false) {

      if (doTour === false) {
        var duration = 500;
        var animateChildren = true;
        $("#kinetic, #backdrop").css("visibility", "visible").fadeIn({
          duration: duration
        });
      }else {
        duration = 0;
        var animateChildren = false;
      }

      setTimeout(function() {
          tree.rootNode.select().expand({
            onComplete: function() {
              if (typeof doTour != "undefined" && doTour == true) {
                $("#kinetic, #backdrop").css("visibility", "visible").show();
                tour.start();
              }

              tree.rootNodeReady.fire();
            },
            animate: animateChildren
          });
        }, duration);
    } else {
      tree.rootNodeReady.fire();
    }
  } 
}