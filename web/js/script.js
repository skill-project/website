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
    .height($(window).height() - $("#header").height() - $("#footer").height());

  $("#preload").hide();

  $("#panel")
    .hide()
    .height($("#kinetic").height());
});

$(window).load(function  () {
    $("#kinetic").css("visibility", "visible").fadeIn();
  
    stage = new Kinetic.Stage({
      container: 'kinetic',
      width: $(window).width(),
      height: $(window).height(),
      draggable: true,
      dragDistance: 10
    });

    stage.on("dragstart", function(e) {
      panStartCoords = stage.getPointerPosition();
      panLayerStartCoords = { x: backLayer.x(), y: backLayer.y() }

      //TODO : get tree bounds

      nodesLayer.cache({
          x:0,
          y:0,
          width:1000,
          height:1000
        });

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
      nodesLayer.draw();
    });


    $(document).on("wheel", function (e) {
      delta = e.originalEvent.wheelDeltaY;
      var newZoomLevel = zoomLevel + (delta / 120) / 10;
      nodesLayer.scale({x: zoomLevel, y: zoomLevel});
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

    var skills = new Node({uuid: rootNodeId, name: "Skills"}, null);
  

    stage.add(backLayer);
    stage.add(nodesLayer);

    //stage.on("mousemove", function () {
    $("#kinetic").mousemove(function (e) {
      if (!stage.isDragging()) {
        backLayer.x(Math.round(stage.getPointerPosition().x /30));
        backLayer.y(Math.round(stage.getPointerPosition().y /30));
        backLayer.batchDraw();
      }
    });
});


