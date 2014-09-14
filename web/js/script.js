var mouseIsDown, 
    nodesLayer,
    backLayer,
    glowLayer, 
    zoomLevel = 1,
    stage,
    rootNode,
    recursiveChildren = [], //Array used for recursive function Node.getChildrenRecursive(),
    panning = false,
    panStartCoords,
    panDistanceX,
    panDistanceY,
    panLayerStartCoords;

var tree = new Tree;

$(document).ready(function (){
  $("#kinetic")
    .hide()
    .width($(window).width())
    .height($(window).height() - $("#header").height());

  $("#preload").hide();

  $("#panel")
    .hide()
    .height($("#kinetic").height());
});

$(window).load(function  () {
    $("#kinetic").css("visibility", "visible").fadeIn({
      duration: 1500
    });
  
    stage = new Kinetic.Stage({
      container: 'kinetic',
      width: $("#kinetic").width(),
      height: $("#kinetic").height(),
      draggable: true,
      dragDistance: 10
    });

    stage.on("dragstart", function(e) {
      panStartCoords = stage.getPointerPosition();
      panLayerStartCoords = { x: backLayer.x(), y: backLayer.y() }

      var minX = 0, maxX = 0, minY = 0, maxY = 0;
      nodesLayer.children.forEach(function(child) {
        if (child.x() < minX) minX = child.x();
        if (child.y() < minY) minY = child.y();
        if (child.x() + child.getWidth() > maxX) maxX = child.x() + child.getWidth();
        if (child.y() + child.getHeight() > maxY) maxY = child.y() + child.getHeight();
      });

      /*console.log("minX : " + minX);
      console.log("maxX : " + maxX);
      console.log("minY : " + minY);
      console.log("maxY : " + maxY);*/

      nodesLayer.cache({
          x:minX,
          y:minY,
          width:maxX - minX,
          height:maxY - minY
        });

      nodesLayer.x(minX);
      nodesLayer.y(minY);

    });

    stage.on("dragmove", function(e) {
      panCurCoords = stage.getPointerPosition();
      panDistanceX = panCurCoords.x - panStartCoords.x;
      panDistanceY = panCurCoords.y - panStartCoords.y;
      
      backLayer.x(panLayerStartCoords.x + (panDistanceX / 4));
      backLayer.y(panLayerStartCoords.y + (panDistanceY / 4));
    });

    stage.on("dragend", function(e) {
      nodesLayer.clearCache();

      nodesLayer.x(0);
      nodesLayer.y(0);

      nodesLayer.draw();
    });


    $(document).on("wheel", function (e) {
      delta = e.originalEvent.wheelDeltaY;
      console.log(delta);
      var newZoomLevel = Math.round((zoomLevel + (delta / 120) / 10) * 1000) / 1000;
      console.log(newZoomLevel);
      nodesLayer.scale({x: newZoomLevel, y: newZoomLevel});
      nodesLayer.draw();
      zoomLevel = newZoomLevel;
    });

    backLayer = new Kinetic.Layer();

    backgroundWidth = stage.getWidth() + 2000;
    backgroundHeight = stage.getHeight() + 500;

    var background = new Kinetic.Rect({
      x: -1000,
      y: -500,
      width: backgroundWidth,
      height: backgroundHeight,
      fillLinearGradientStartPoint: {x:0, y:0},
      fillLinearGradientEndPoint: {x:0,y:backgroundHeight},
      fillLinearGradientColorStops: [0, '#4a2f52', 0.7, '#e67b88', 1, '#b66fb0']
    });

    backLayer.add(background);

    for (i = 0; i < 300; i++)
    {
      var star = new Kinetic.Circle({
        radius: Math.random()*1.6,
        fill: "white",
        x: Math.round(Math.random()*backgroundWidth-1000),
        y: Math.round(Math.random()*backgroundHeight-800),
      })
      backLayer.add(star);

    }

    /*backLayer.cache({
      x:-200,
      y:-200,
      width:1000,
      height:500
    })*/
    backLayer.listening(false);

    // backLayer.draw();
 
    nodesLayer = new Kinetic.Layer();
    // nodesLayer.listening(false);

    /*
    Konami code
    var anim = new Kinetic.Animation(function(frame) {
      nodesLayer.rotation(frame.time / 150);
    }, stage);

    anim.start();
    */


    stage.add(backLayer);
    stage.add(nodesLayer);

    //Maybe unnecessary to trigger this event, since code execution is linear here
    /*$(document).on("rootNodeReady", function() {
      console.log(tree.rootNode.select().expand());
      // tree.rootNode.select().expand();
    });*/

    var skills = new Node({uuid: rootNodeId, name: "Skills"}, null);

    

    // $(document).trigger("rootNodeReady");

    // tree.rootNode.select().expand();
    // tree.selectedNode.children[Object.keys(tree.selectedNode.children)[0]].select().expand();

    //stage.on("mousemove", function () {
    $("#kinetic").mousemove(function (e) {
      if (!stage.isDragging()) {
        backLayer.x(Math.round(stage.getPointerPosition().x /30));
        backLayer.y(Math.round(stage.getPointerPosition().y /30));
        backLayer.batchDraw();
      }
    });
});


