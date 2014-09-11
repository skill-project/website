var mouseIsDown, 
    nodesLayer,
    glowLayer, 
    zoomLevel = 1,
    stage,
    rootNode,
    recursiveChildren = []; //Array used for recursive function Node.getChildrenRecursive()

var tree = new Tree;

$(document).ready(function (){
  $("#kinetic")
    .hide()
    .width($(window).width())
    .height($(window).height());

  $("#preload").hide();
});

$(window).load(function  () {
    $("#kinetic").css("visibility", "visible").fadeIn();
  
    stage = new Kinetic.Stage({
      container: 'kinetic',
      width: $(window).width(),
      height: $(window).height(),
      draggable: true,
      dragBoundFunc : function (e) {
        dragX = e.x;
        dragY = e.y;
        nodesLayer.offsetX(-dragX);
        nodesLayer.offsetY(-dragY);
        nodesLayer.draw();
        return {
          x: dragX,
          y: dragY
        }
      }
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

    backLayer.draw();
 
    nodesLayer = new Kinetic.Layer();

    var skills = new Node({id: "0", name: "Skills"}, null);
  

    stage.add(backLayer);
    stage.add(nodesLayer);
});


