var Node = function(nodeData, params) {//, parent, rank, count, isLast) {
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
      tree.nodes[this.id] = this;             //Add current node to flat list of nodes in Tree object (for quick node retrieval)
      this.parent.children[this.id] = this;        //Add current node to list of parent's children

      for (var ancestorIndex in Object.keys(this.parent.ancestors))
      {
        var ancestorId = Object.keys(this.parent.ancestors)[ancestorIndex];
        this.ancestors[ancestorId] = tree.nodes[ancestorId];
      }
      this.ancestors[this.parent.id] = this.parent;
   }

  //Constructor
  (function() {
    var backImage = new Kinetic.Image({
      x:0,
      y:0,
      width:236,
      height:56,
      image: $("img#node-normal")[0]
    });
    that.backImage = backImage;

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
      text: that.name,
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
        text: that.name,
        fontSize: 14,
        fontFamily: 'Avenir-Book',
        fill: '#333333',
        align: 'center'
      });
    } else {
      //Yes it does, so just position the Text
      text.setX(67).setY(22).setWidth(160);
    }
    that.text = text;

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
    that.knGlow = glow;

    //Creating and positioning the main group that contains all the shapes
    if (that.parent == null) {
      var startX = stage.getWidth() / 6;
      var startY = (stage.getHeight() - 82) / 2 - 56 / 2 ;
    }else {
      //Starting coordinates = underneath the parent ID
      var startX = that.parent.shapes.x();
      var startY = that.parent.shapes.y();

      if (that.takePlaceOf != null) {
        var animate = false;
        // console.log("take place of");
        // console.log(that.takePlaceOf.appearDestX);
        
        that.appearDestX = that.takePlaceOf.appearDestX;
        that.appearDestY = that.takePlaceOf.appearDestY;

        that.midX = that.takePlaceOf.midX;
        that.midY = that.takePlaceOf.midY;
      }else {
        var animate = true;
        //Final coordinates = each skill in its own place
        that.appearDestX = that.parent.shapes.x() + that.parent.shapes.getWidth() + 80;
        that.appearDestY = (that.parent.shapes.y() + (56 / 2)) + ((((56 + 20) * that.parent.totalChildren) - 20) / -2) + ((56 + 20) * (Object.keys(that.parent.children).length - 1));

        //Intermediate coordinates = when skills split up
        that.midX = that.appearDestX;
        that.midY = that.parent.shapes.y();
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
    that.shapes = group;

    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);

    group.moveToBottom();

    nodesLayer.draw();

    //Chained animations of appearing nodes
    if (that.parent != null) {
      var tween1 = new Kinetic.Tween({
        node: group, 
        x: that.midX,
        y: that.midY,
        duration: 0.05 + 0.10 * (that.rank / that.count),       // Animation speed for a single node is relative to node rank/position, first is fastest, etc.
        onFinish: function() {
          var tween2 = new Kinetic.Tween({
            node: group, 
            x: that.appearDestX,
            y: that.appearDestY,
            duration: 0.05 + 0.10 * (that.rank / that.count),
            onFinish: function() {
              that.nodeReady = true;
              //Last child has finished appearing
              if (that.isLast == true) {
                tree.busy = false;              //Releasing the tree-wide lock
                if (that.onComplete != null) {
                  that.onComplete();
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
    if (that.parent != null) {
      that.edge = new Edge(that.parent, that);
      that.edge.shape.moveToBottom();
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
          for (var siblingIndex in that.siblings) {
            var sibling = that.siblings[siblingIndex];
            if (sibling.open && sibling.id != that.id) {
              sibling.contract({releaseTreeLock: false});
            }
          }
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
        that.contract();
      }
    });
    that.labelGroup = labelGroup;

    
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
    that.editButton = editButton;

  // End of Node constructor
  }).call();

  //Get all visible children, recursively (stored in global array)
  this.getChildrenRecursive = function() {
    for (var child in that.children) {
      recursiveChildren.push(that.children[child]);
      that.children[child].getChildrenRecursive();
    }
  }

  //Query the API for the children and show them
  this.expand = function(params) {
    if (params != null) {
      var onComplete = params.onComplete;
    }
    var url = baseUrl + "api/getNodeChildren/" + that.id + "/";

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

  //Hiding and destroying the children
  this.contract = function(params) {
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
    that.shapes.moveToTop();

    //Make deep children disappear without animation
    var openChild = that.getChildrenMatch("open", true);
    if (that.open == true && typeof openChild != "undefined") {
      for (var childIndex in openChild.children) {
          var child = openChild.children[childIndex];
          child.delete();
      }
      stage.draw();
    }

    //Take care of direct children
    var countPositioned = 0;
    var totalChildren = Object.keys(that.children).length;

    //If no children, not much to do
    if (totalChildren == 0) {
      if (releaseTreeLock == true) tree.busy = false;
      that.open = false;
      that.setVisualState("normal");
      if (onComplete != null) onComplete();

    //If one or more children, we animate all of them to the center, delete all but one and animate the last one
    }else {
      for (var childIndex in that.children) {
        //Variable to make current scope available to onFinish anonymous functions
        var child = that.children[childIndex];
        child.skpNode = child;

        //Animation to the center of the children nodes
        child.tween1 = new Kinetic.Tween({
          node: child.shapes,
          x: that.shapes.x() + 240 + 80,
          y: that.shapes.y(),
          duration: 0.15,
          onFinish: function() {
            if (countPositioned++ < totalChildren - 1) {
              //For all children except the last one, mark for later deletion
              this.skpNode.positionedForDeletion = true; 
            }else {
              //Last child, delete all children marked for deletion
              that.deleteChildrenMatch("positionedForDeletion", true);

              //Animation of the last child
              var tween2 = new Kinetic.Tween({
                node: this.skpNode.shapes,
                x: that.shapes.x(),
                y: that.shapes.y(),
                duration: 0.15,
                 onFinish: function() {
                  //Last child deletion and tree cleanup
                  this.skpNode.delete();
                  if (releaseTreeLock == true) tree.busy = false;
                  that.open = false;
                  that.setVisualState("normal");
                  if (onComplete != null) onComplete();
                }
              });
              //Local scope handling
              tween2.skpNode = this.skpNode;

              //With or without animation
              if (noAnim == false) tween2.play();
              else child.tween2.finish();
            }
          }
        });
        //Local scope handling
        child.tween1.skpNode = child;

        //With or without animation
        if (noAnim == false && Object.keys(that.children).length > 1) child.tween1.play();
        else child.tween1.finish();
      }
    }
  }

  //Selection of the node
  this.select = function(params) {
    if (that.isSelected) return;


    if (params != null && params.finishEdit != false) var finishEdit = true;

    //deSelect previously selectedNode (only if it's not the current node itSelf)
    if (tree.selectedNode && tree.selectedNode.id != that.id) tree.selectedNode.deSelect(); 

    //Exiting edit mode for previous editedNode that is not the current node itself
    if (tree.editedNode && that.id != tree.editedNode.id && finishEdit == true) {
      tree.editedNode.finishEdit();
    }

    //Check camera position and reposition if needed
    camera.checkCameraPosition(that);

    that.isSelected = true;
    tree.selectedNode = that;

    return that;
  }

  this.deSelect = function() {
    if (!that.isSelected) return;

    that.isSelected = false;
    tree.selectedNode = null;
  }

  //Loads the panel
  this.startEdit = function() {
    if (that.isEdited) return;

    that.panel = new Panel(that, {
      onComplete: function() {
        tree.busy = false;
      }
    });

    that.setVisualState("normal-edit");

    that.isEdited = true;
    tree.editedNode = that;
  }

  //Closes the panel
  this.finishEdit = function(onComplete) {
    if (!that.isEdited) return;

    if (that.panel) {
      that.panel.close({
        onComplete: function () {
          delete that.panel;
          actionsCount = 0;
          if (onComplete) {
            onComplete.call();      //Animation is being chained with new panel slide in, so tree is still busy
          }else {
            tree.busy = false;
          }
        }
      });
    }

    that.isEdited = false;
    tree.editedNode = null;

    if (that.open == true) {
      that.setVisualState("glow-children");
    } else that.setVisualState("normal");
  }

  this.getSiblingMatch = function(propertyName, propertyValue) {
    for (var siblingIndex in that.siblings) {
        var sibling = that.siblings[siblingIndex];
        if (sibling[propertyName] == propertyValue) return sibling;
    }
  }

  this.getChildrenMatch = function(propertyName, propertyValue) {
    for (var childIndex in that.children) {
        var child = that.children[childIndex];
        if (child[propertyName] == propertyValue) return child;
    }
  }

  this.deleteChildrenMatch = function(propertyName, propertyValue) {
    for (var childIndex in that.children) {
        var child = that.children[childIndex];
        if (child[propertyName] == propertyValue) child.delete();
    }
  }

  //Set visual state of the node
  this.setVisualState = function (state) {
    switch (state) {
      case "normal":
        that.knGlow.setImage($("img#glow-nonotch")[0]);
        that.backImage.setImage($("img#node-normal")[0]);
        if (that.edge != null) that.edge.selected = false;
        that.text.setFill("#333333");
        that.setGlow(0);
        break;
      case "glow-children":
        if (!that.isEdited) {
          that.backImage.setImage($("img#node-glow-children")[0]);
          that.knGlow.setImage($("img#glow-children")[0]);
          that.text.setFill("#333333");
        }
        if (that.edge != null) that.edge.selected = true;
        that.setGlow(1);
        break;
      case "glow-nochildren":
        if (!that.isEdited) {
          that.backImage.setImage($("img#node-glow-nochildren")[0]);
          that.knGlow.setImage($("img#glow-nochildren")[0]);
          that.text.setFill("#333333");
        }
        if (that.edge != null) that.edge.selected = true;
        that.setGlow(1);
        break;
      case "normal-edit":
        that.backImage.setImage($("img#node-edit")[0]);
        that.text.setFill("#fff");
        break;
      case "glow-edit":
        if (that.totalChildren > 0) that.backImage.setImage($("img#node-glow-children")[0]);
        else that.backImage.setImage($("img#node-glow-nochildren")[0]);
        that.text.setFill("#333333");
        break;
    }
    nodesLayer.draw();

    that.visualState = state;
  }

  //Make it glow...
  this.setGlow = function (state) {
    if (that.glow == state) return;

    var opacity = (state == 1) ? 1 : 0;

    var tween = new Kinetic.Tween({
      node: that.knGlow, 
      duration: 0.5,
      opacity: opacity
    });

    tween.play();

    that.glow = state;
  }

  //Returns the bouding box of the node (glow excluded)
  this.getBoundingBox = function() {
    return {
      x1: that.shapes.x(),
      y1: that.shapes.y(),
      x2: that.shapes.x() + that.shapes.width(),
      y2: that.shapes.y() + that.shapes.height()
    }
  }

  //Caches the node
  this.cache = function() {
    //Caching in only really carried out on nodes which are ready (static, finished appearing)
    if (that.nodeReady) {
      that.shapes.cache({
        x: -25,
        y: -25,
        width: that.shapes.width() + 50,
        height: that.shapes.height() + 50/*,
        drawBorder:true*/
      });

      //Glow is not negatively offseted anymore so we have to reposition the node
      that.shapes.x(that.shapes.x() - 25);
      that.shapes.y(that.shapes.y() - 25);

      //Stop listening for events on cached nodes (they are not visible anyway)
      that.labelGroup.listening(false);
      that.editButton.listening(false);
      if (typeof that.edge != "undefined") that.edge.shape.listening(false);

      // Tough or impossible to cache custom drawn Shapes (drawFunc)
      // var nodeBoundingBox = that.edge.getBoundingBox();
      // that.edge.shape.cache({
      //   x: nodeBoundingBox.x1,
      //   y: nodeBoundingBox.x1,
      //   width: nodeBoundingBox.x2 - nodeBoundingBox.x1,
      //   height: nodeBoundingBox.y2 - nodeBoundingBox.y1 
      // });
      that.cached = true;
    }
  }

  //Clears the cache on the node (when it becomes visible again)
  this.clearCache = function () {
    that.shapes.clearCache();
    that.shapes.x(that.shapes.x() + 25);
    that.shapes.y(that.shapes.y() + 25);

    that.cached = false;

    that.labelGroup.listening(true);
    that.editButton.listening(true);
  }

  //Fire the rootNodeReady callback when the rootNode is ready
  if (this.parent == null) {
    tree.rootNodeReady.fire();
  }

  this.delete = function() {
    // console.log(Object.keys(that.children).length);
    for (var childIndex in that.children) {
        var child = that.children[childIndex];
        child.delete();
    }

    if (that.isEdited) that.finishEdit();
    if (that.isSelected) that.deSelect();

    that.edge.shape.destroy();
    that.shapes.destroy();

    delete that.parent.children[that.id];
    delete tree.nodes[that.id];
    delete that;
  }

}