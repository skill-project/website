var Node = function(nodeData, parent) {
  //Initializing node properties
  this.id = nodeData.id;
  this.parent = parent ? parent : null;
  this.name = nodeData.name;
  this.depth = nodeData.depth;
  this.shapes;
  this.children = [];
  this.open = false;
  this.isSelected = false;
  this.isEdited = false;
  this.knGlow;
  this.backImage;
  this.buttonImage;
  this.labelImage;
  this.totalChildren;
  this.appearDestX;
  this.appearDestY;
  this.panel;
  this.text;

  // Needed for nested functions
  var that = this;
  
  //For root node : add current node to rootNode object of Tree, (for tree traversal)
  if (this.parent == null) tree.rootNode = this;

  //For all nodes, except root node
  if (parent != null) {
      this.siblings = this.parent.children;   //Set siblings (children of parent)
      tree.nodes.push(this);                  //Add current node to flat list of nodes in Tree object (for quick node retrieval)
      this.parent.children.push(this);        //Add current node to list of parent's children
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

    // var name = "Lorem ipsum dolor sit amet";
    // var name = "Lorem ipsum";
    //that.name = "Lorem ipsum";

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
      startX = 50;
      startY = 200;
    }else {
      startX = that.parent.rect.attrs.x;
      startY = that.parent.rect.attrs.y;

      that.appearDestX = that.parent.rect.attrs.x + that.parent.rect.getWidth() + 80;
      that.appearDestY = (that.parent.rect.attrs.y + (56 / 2)) + ((((56 + 20) * that.parent.totalChildren) - 20) / -2) + ((56 + 20) * (that.parent.children.length - 1));


      that.midX = that.appearDestX;
      that.midY = that.parent.rect.attrs.y;
    }

    var group = new Kinetic.Group({
      x: startX,
      y: startY,
      width:240,
      height:56,
      // draggable:true
    });
    group.add(glow, backImage, editButton, labelGroup);
    that.shapes = group;

    //Adding the group to the layer and drawing the layer
    nodesLayer.add(group);
    nodesLayer.draw();

    if (parent != null) {
      var tween = new Kinetic.Tween({
        node: group, 
        x: that.midX,
        y: that.midY,
        duration: 0.15,
        onFinish: function() {
          // console.log(that.appearDestY);
          var tween = new Kinetic.Tween({
            node: group, 
            x: that.appearDestX,
            y: that.appearDestY,
            duration: 0.15
          }); 
          tween.play();
        }
      });
      tween.play();
    }

    //"Rect", unfortunate legacy name...
    that.rect = group;

    //Creating the edge / link with the parent node (except for the root node which has no parent)
    if (that.parent != null) that.edge = new Edge(parent, that);

    //Node events
    labelGroup.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
    labelGroup.on("mouseout", function() { document.body.style.cursor = 'default'; });
    labelGroup.on("click tap", function() {
      //Checking and setting a tree-wide lock
      if (tree.busy) return;

      // debugger;
      // console.clear();
      // console.log("current depth : " + that.depth);
      // if (tree.selectedNode) console.log("previous depth : " + tree.selectedNode.depth);


      if (tree.rootNode.id != that.id && that.depth < tree.selectedNode.depth) {
        that.siblings.forEach(function (sibling) {
          if (sibling.open) {
            sibling.contract();
            sibling.deSelect();
          }
        });
      }

      if (
          tree.selectedNode &&                    //selectedNode has not been previously deSelected
          tree.rootNode.id != that.id &&          //Not on rootNode
          tree.selectedNode.id != that.parent.id  //Not parent
        ) {
        tree.selectedNode.contract();
        tree.selectedNode.deSelect();
      }

      // console.clear();
      // console.log(that);
      // debugger;
      

      //Node is closed, expanding it
      if (!that.open) {
        that.select();
        that.expand();
        // console.log(that.children.length);
      }else {
        //Node is open, contracting it
        that.contract();
      }
    });

    editButton.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
    editButton.on("mouseout", function() { document.body.style.cursor = 'default'; });
    editButton.on("click tap", function() {
      // console.log(that.panel);
      // debugger;
      if (tree.editedNode && tree.editedNode.id != that.id)
      {
        /*console.log("clicked on " + that.name + " :");
        console.log(" - isSelected : " + that.isSelected);
        console.log(" - isEdited : " + that.isEdited);

        console.log("editedNode on " + tree.editedNode.name + " :");
        console.log(" - isSelected : " + tree.editedNode.isSelected);
        console.log(" - isEdited : " + tree.editedNode.isEdited);

        console.log("selectedNode : " + tree.selectedNode.name);
        console.log("editedNode : " + tree.editedNode.name);*/

        // console.log("First close other node : " + tree.selectedNode.name);
        tree.editedNode.finishEdit();
        tree.selectedNode.deSelect();
      }

      if (that.isEdited == false) {
        that.startEdit();
      }else {
        that.finishEdit();
      }
    })

  }).call();

  //Get all visible children, recursively (stored in global array)
  this.getChildrenRecursive = function() {
    // console.log(that.children);
    that.children.forEach(function(child) {
      recursiveChildren.push(child);
      child.getChildrenRecursive();
    });
  }

  //Unused function => delete it ?
  this.hasChildWithId = function(id) {
    var result;

    this.children.forEach(function(child) {
      if (child.id == id) {
        result = child;
      }
    });

    return result;
  }

  //Query the DB for the children and show them
  this.expand = function() {
    tree.busy = true;
    $.ajax({
      url: "http://192.168.0.60/skp/web/api/getNodeChildren/" + that.id + "/",
    }).done(function(json) {
      that.totalChildren = json.data.length;

      if (that.totalChildren > 0) {
        that.open = true;
        that.backImage.setImage($("img#node-glow-children")[0]);
        that.knGlow.setImage($("img#glow-children")[0]);
      }else {
        that.backImage.setImage($("img#node-glow-children")[0]);
        that.knGlow.setImage($("img#glow-nochildren")[0]);
      }

      json.data.forEach(function(child) {
        new Node(child, that);
      });

      tree.busy = false;    //Releasing the tree-wide lock
    });
  }

  //Hiding and destroying the children
  this.contract = function() {
    tree.busy = true;

    //Getting all children, recursively
    that.getChildrenRecursive();
      
    //Creating a group to animate all children together
    group = new Kinetic.Group();

    //Adding all children to the group
    recursiveChildren.forEach(function(child) {
      group.add(child.rect, child.edge.shape);
    });

    //Group is add to the layer
    //Moving the children to this node would be any different ? moveTo()
    nodesLayer.add(group);

    //Setting up animation to make group (with children nodes) disappear
    var tween = new Kinetic.Tween({
        node: group, 
        duration: 0.2,
        scaleX: 0,
        scaleY: 0,
        x: that.rect.attrs.x + that.rect.getWidth(),
        y: that.rect.attrs.y + that.rect.getHeight() / 2,
        onFinish: function() {
          recursiveChildren.forEach(function(child) {
            child.rect.destroy();
            child.edge.shape.destroy();
          });
          //Emptying the global array for future use
          recursiveChildren = [];
          group.destroy();

          that.knGlow.setImage($("img#glow-nochildren")[0]);
          that.backImage.setImage($("img#node-glow-nochildren")[0]);
          
          //Emptying this node's list of children
          that.children = [];
          tree.busy = false;
          that.open = false;
        }
      });

    //Starting the animation
    tween.play();
  }

  //Selection of the node : glow super power!
  this.select = function() {
    if (that.isSelected) return;

    if (that.edge != null) that.edge.selected = true;

    var tween = new Kinetic.Tween({
      node: that.knGlow, 
      duration: 0.5,
      opacity: 1
    });

    tween.play();

    that.isSelected = true;
    tree.selectedNode = that;
  }

  this.deSelect = function() {
    // console.log(that.isSelected);
    if (!that.isSelected) return;

    if (that.edge != null) that.edge.selected = false;

    that.knGlow.setImage($("img#glow-nonotch")[0]);
    that.backImage.setImage($("img#node-normal")[0]);

    var tween = new Kinetic.Tween({
      node: that.knGlow, 
      duration: 0.5,
      opacity: 0,
    });

    tween.play();

    that.isSelected = false;
    tree.selectedNode = null;
  }

  this.startEdit = function() {
    if (that.isEdited) return;

    that.select();

    that.panel = new Panel(that);

    that.backImage.setImage($("img#node-edit")[0]);
    that.text.setFill("#fff");

    // Partial redraws not effective...
    nodesLayer.draw();

    that.isEdited = true;
    tree.editedNode = that;
  }

  this.finishEdit = function() {
    if (!that.isEdited) return;

    that.panel.close({
      onComplete: function () {
        delete that.panel;
      }
    });

    if (that.totalChildren > 0) that.backImage.setImage($("img#node-glow-children")[0]);
    else that.backImage.setImage($("img#node-glow-nochildren")[0]);
    that.text.setFill("#333333");

    // Partial redraws not effective...
    nodesLayer.draw();

    that.isEdited = false;
    tree.editedNode = null;
  }
}