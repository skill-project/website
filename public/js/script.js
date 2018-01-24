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
    distToTop,
    doResize;   //sort of resizeEnd event : http://stackoverflow.com/questions/5489946/jquery-how-to-wait-for-the-end-of-resize-event-and-only-then-perform-an-ac

var globalSizes = {
  footerHeight: 82
}

if (typeof rootNodeId !== "undefined") var skillWalk = true;
else var skillWalk = false;

if (skillWalk === true) {
  var tree = new Tree;
  var camera;
  var search = new Search;
  var tour = new Tour;  
  var loader = new Loader;
  var fpsCounter = new FPSCounter;
}

if (typeof pageName != "undefined" && pageName == "editor_dashboard") {
  var loader;
  var editor;
}

var user = new User;
var site;

//global ajax handling
//before ajax
$( document ).ajaxStart(function() {
  if (typeof loader != "undefined"){
    loader.show();
  }
});
//on error
$(document).ajaxError(function( event, jqxhr, settings, thrownError ) {
  //if (jqxhr.status == "403"){}
});
//on complete
$( document ).ajaxComplete(function( event, xhr, settings ) {
    if (typeof loader != "undefined"){
      loader.hide();
    }
});

$(document).ready(function () {
  site = new Site;

  if (skillWalk === true) {
    $("#kinetic, #backdrop")
      .hide()
      .width($(window).width())
      .height($(window).height() - $("#header").height());

    $("body").height($(window).height());

    $("#preload, #panel, #debug").hide();

    camera = new Camera;
    camera.footerOffset = $("#footer").height();

    $(window).resize(function() {
      clearTimeout(doResize);
      doResize = setTimeout(camera.resizeElements, 300);
    });


    // $("#debug").show();
    // setInterval(function() {
    //   $("#debug").empty();
    //   $("#debug").append("Current FPS : " + fpsCounter.currentFPS);
      
    //   if (tree.selectedNode) $("#debug").append("selectedNode : " + tree.selectedNode.name + "<br />");
    //   if (tree.editedNode) $("#debug").append("editedNode : " + tree.editedNode.name + "<br />");

    //   if (typeof tree.selectedNode == "undefined") $("#debug").css({"background-color": "red"});
    //   else $("#debug").css({"background-color": "white"});
    //   camera.drawZone(camera.getSecurityZone(camera.defaultSecurityZoneFactor));
    // },200);
  }

  if (typeof pageName != "undefined" && pageName == "editor_dashboard") {
    editor = new Editor();
    
    editor.init();
    editor.loadEvents();
    
  }
});

$(window).load(function  () {
    if (typeof rootNodeId == "undefined") return;

    stage = new Kinetic.Stage({
      container: 'kinetic',
      width: $("#kinetic").width(),
      height: $("#kinetic").height(),
      dragDistance: 10,
      fill: "black"
    });

    if (tour.isActive == true || doTour == true) stage.draggable(false);
    else stage.draggable(true);

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

    nodesLayer.add(camera.dummyShape);
});


