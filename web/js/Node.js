var Node = function(nodeData, parent, rank, count, isLast) {
  //Initializing node properties
  this.id = nodeData.uuid;
  this.parent = parent ? parent : null;
  this.name = nodeData.name;
  this.depth = nodeData.depth ? nodeData.depth : 1;
  this.rank = rank;
  this.count = count;
  this.isLast = isLast;
  this.visualState = "normal";
  this.glow = 0;
  this.shapes;
  this.children = [];
  this.open = false;
  this.isSelected = false;
  this.isEdited = false;
  this.knGlow;
  this.backImage;
  this.totalChildren;
  this.appearDestX;
  this.appearDestY;
  this.panel;
  this.text;
  //this.nodeReady = $.Callbacks("unique");

  // Needed for nested functions
  var that = this;
  
  //For root node : add current node to rootNode object of Tree, (for tree traversal)
  if (this.parent == null) tree.rootNode = this;

  //For all nodes, except root node
  if (parent != null) {
      this.siblings = this.parent.children;   //Set siblings (children of parent)
      tree.nodes[this.id] = this;             //Add current node to flat list of nodes in Tree object (for quick node retrieval)
      this.parent.children[this.id] = this;        //Add current node to list of parent's children
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
    if (parent == null) {
      startX = stage.getWidth() / 6;
      startY = (stage.getHeight() - 82) / 2 - 56 / 2 ;
    }else {
      //Starting coordinates = underneath the parent ID
      startX = that.parent.shapes.x();
      startY = that.parent.shapes.y();

      //Final coordinates = each skill in its own place
      that.appearDestX = that.parent.shapes.x() + that.parent.shapes.getWidth() + 80;
      that.appearDestY = (that.parent.shapes.y() + (56 / 2)) + ((((56 + 20) * that.parent.totalChildren) - 20) / -2) + ((56 + 20) * (Object.keys(that.parent.children).length - 1));

      //Intermediate coordinates = when skills split up
      that.midX = that.appearDestX;
      that.midY = that.parent.shapes.y();
    }

    var group = new Kinetic.Group({
      x: startX,
      y: startY,
      width:240,
      height:56
    });
    group.add(glow, backImage, editButton, labelGroup);
    that.shapes = group;

    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);
    nodesLayer.draw();

    //Chained animations of appearing nodes
    if (parent != null) {
      var tween = new Kinetic.Tween({
        node: group, 
        x: that.midX,
        y: that.midY,
        duration: 0.05 + 0.10 * (that.rank / that.count),       // Animation speed for a single node is relative to node rank/position, first is fastest, etc.
        onFinish: function() {
          var tween = new Kinetic.Tween({
            node: group, 
            x: that.appearDestX,
            y: that.appearDestY,
            duration: 0.05 + 0.10 * (that.rank / that.count),
            onFinish: function() {
              //Last child has finished appearing
              if (that.isLast == true) {
                tree.busy = false;                              //Releasing the tree-wide lock
                tree.readyForNextLevel.fire();
              }
            }
          }); 
          tween.play();
        }
      });
      tween.play();
    }

    //Creating the edge / link with the parent node (except for the root node which has no parent)
    if (that.parent != null) that.edge = new Edge(parent, that);

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
          that.id != tree.selectedNode.id &&                 //Not for contracting the selectedNode itself
          that.depth <= tree.selectedNode.depth &&           //Not for a node shallower than the selectedNode
          tree.selectedNode.id != that.parent.id             //Not for parent
        ) {
        if (that.depth < tree.selectedNode.depth)           //Currently selectedNode is deeper than current node : 
        {                                                   //let's find, contract and deSelect current node's sibling which contains the selectedNode
          for (var siblingIndex in that.siblings) {
            var sibling = that.siblings[siblingIndex];
            if (sibling.open && sibling.id != that.id) {
              sibling.contract(false);
              tree.selectedNode.deSelect();
            }
          }
        } else {                                            //Contract and deSelect previously selectedNode
          tree.selectedNode.contract(false);
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
  this.expand = function(urlFullJson) {
    // console.log(that);
    if (urlFullJson) var url = urlFullJson;
    else var url = baseUrl + "api/getNodeChildren/" + that.id + "/";

    $.ajax({
      url: url,
    }).done(function(json) {
      // console.log(json);
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
          new Node(child, that, i, json.data.length, isLast);
        });

      }else {
        //No children, releasing tree lock now
        tree.busy = false;
        that.setVisualState("glow-nochildren");
      }
    });
  }

  //Hiding and destroying the children
  this.contract = function(releaseTreeLock) {
    if (releaseTreeLock == null) releaseTreeLock = true;

    //Getting all children, recursively
    that.getChildrenRecursive();
      
    //Creating a group to animate all children together
    group = new Kinetic.Group();

    //Adding all children to the group
    recursiveChildren.forEach(function(child) {
      group.add(child.shapes, child.edge.shape);
    });

    //Group is add to the layer
    //Moving the children to this node would be any different ? moveTo()
    nodesLayer.add(group);

    //Setting up animation to make group (with children nodes) disappear
    var tween = new Kinetic.Tween({
        node: group, 
        duration: 0.4,
        scaleX: 0,
        scaleY: 0,
        x: that.shapes.x() + that.shapes.getWidth(),
        y: that.shapes.y() + that.shapes.getHeight() / 2,
        onFinish: function() {
          recursiveChildren.forEach(function(child) {
            child.shapes.destroy();
            child.edge.shape.destroy();

            delete tree.nodes[child.id];
          });
          //Emptying the global array for future use
          recursiveChildren = [];
          group.destroy();

          that.setVisualState("normal");
          
          //Emptying this node's list of children
          that.children = [];
          if (releaseTreeLock == true) tree.busy = false;
          that.open = false;
        }
      });

    //Starting the animation
    tween.play();
  }

  //Selection of the node
  this.select = function() {
    if (that.isSelected) return;

    //deSelect previously selectedNode (only if it's not the current node itSelf)
    if (tree.selectedNode && tree.selectedNode.id != that.id) tree.selectedNode.deSelect(); 

    //Exiting edit mode for previous editedNode that is not the current node itself
    if (tree.editedNode && that.id != tree.editedNode.id) {
      tree.editedNode.finishEdit();
    }

    that.isSelected = true;
    tree.selectedNode = that;

    return that;
  }

  this.deSelect = function() {
    if (!that.isSelected) return;

    that.isSelected = false;
    tree.selectedNode = null;
  }

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

  /*this.nodeReady.add(function() {

  });*/

  if (this.parent == null) {
    tree.rootNodeReady.fire();
  }
}