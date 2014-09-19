var nodesLayer,
    backLayer, 
    zoomLevel = 1,
    stage,
    rootNode,
    recursiveChildren = [], //Array used for recursive function Node.getChildrenRecursive(),
    panStartCoords,
    panDistanceX,
    panDistanceY,
    panLayerStartCoords,
    backLayerOffset = {x:0, y:0},
    backgroundImage,
    panBackImageStartCoords,
    distToBottom,
    distToTop;

var tree = new Tree;
var camera = new Camera;
var search = new Search;
var user = new User;

$(document).ready(function (){
  $("#kinetic, #backdrop")
    .hide()
    .width($(window).width())
    .height($(window).height() - $("#header").height());

  $("#preload").hide();

  $("#panel")
    .hide()
    .height($("#kinetic").height());

  setInterval(function() {
    $("#debug").empty();
    if (tree.selectedNode) $("#debug").append("selectedNode : " + tree.selectedNode.name + "<br />");
    if (tree.editedNode) $("#debug").append("editedNode : " + tree.editedNode.name + "<br />");

    if (typeof tree.selectedNode == "undefined") $("#debug").css({"background-color": "red"});
    else $("#debug").css({"background-color": "white"});
  },200);
});

$(window).load(function  () {
    stage = new Kinetic.Stage({
      container: 'kinetic',
      width: $("#kinetic").width(),
      height: $("#kinetic").height(),
      draggable: true,
      dragDistance: 10,
      fill: "black"
    });

    //Initialize drag and mousemove events
    camera.initDragEvents();

    //Setting up the sky with all the stars
    //Sky and stars are drawn on a different canvas
    camera.skySetup();
 
    //Main layer, it contains everything
    nodesLayer = new Kinetic.Layer();
    
    // Konami code, sort of
    // var anim = new Kinetic.Animation(function(frame) {
    //   nodesLayer.rotation(frame.time / 150);
    // }, stage);
    // anim.start();
    
    stage.add(nodesLayer);

    //Adding root skill
    var skills = new Node({
      uuid: rootNodeId, 
      name: "Skills"
    }, 
    {
      parent: null
    });

    //Fadein effect on canvas objects (sky and nodes)
    $("#kinetic, #backdrop").css("visibility", "visible").fadeIn({
      duration: 800
    });
});


