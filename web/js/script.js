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
    panLayerStartCoords,
    backLayerOffset = {x:0, y:0},
    backgroundImage,
    panBackImageStartCoords,
    distToBottom,
    distToTop;

var tree = new Tree;
var camera = new Camera;

$(document).ready(function (){
  $("#kinetic")
    //.hide()
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
      panBackImageStartCoords = { x: 0, y: backgroundImage.y() }

      /*backStars.clearCache();
      backStarsMore.clearCache();*/



/*
      var minX = 0, maxX = 0, minY = 0, maxY = 0;
      nodesLayer.children.forEach(function(child) {
        if (child.x() < minX) minX = child.x();
        if (child.y() < minY) minY = child.y();
        if (child.x() + child.getWidth() > maxX) maxX = child.x() + child.getWidth();
        if (child.y() + child.getHeight() > maxY) maxY = child.y() + child.getHeight();
      });*/

      /*console.log("minX : " + minX);
      console.log("maxX : " + maxX);
      console.log("minY : " + minY);
      console.log("maxY : " + maxY);*/

      /*nodesLayer.cache({
          x:minX,
          y:minY,
          width:maxX - minX,
          height:maxY - minY
        });

      nodesLayer.x(minX);
      nodesLayer.y(minY);*/

    });

    stage.on("dragmove", function(e) {
      panCurCoords = stage.getPointerPosition();
      panDistanceX = panCurCoords.x - panStartCoords.x;
      panDistanceY = panCurCoords.y - panStartCoords.y;
      
      
      /*backLayer.x(panLayerStartCoords.x + (panDistanceX / 60));
      backLayer.y(panLayerStartCoords.y + (panDistanceY / 60));*/

      //console.log(backgroundImage.fillLinearGradientStartPointY());
      
      

      distToTop = -backgroundImage.y();
      distToBottom = backgroundImage.height() + backgroundImage.y() - stage.getHeight();
      var smaller = distToTop < distToBottom ? distToTop : distToBottom;

      backgroundImage.y(panBackImageStartCoords.y + (panDistanceY / (2000 / smaller)));

      /*if (distToBottom < 480 && distToBottom > 384) {
        backStars.opacity((distToBottom*5-1920)/480);
      }else if (distToBottom <= 384) backStars.opacity(0);

      if (distToTop < 480 && distToTop > 384) {
        backStarsMore.opacity(1-((distToTop*5-1920)/480));
        // console.log(backStarsMore.opacity());
      }else if (distToTop <= 384) backStarsMore.opacity(1);

      backStars.batchDraw();*/


      backLayer.batchDraw();


      // camera.updateSecurityZone();
      // camera.drawZone(camera.securityZone);
    });

    stage.on("dragend", function(e) {
      backLayerOffset = {x: 0, y: panDistanceY}

      /*backStars.cache({
        x:0,
        y:0,
        width: stage.width(),
        height: stage.height()
      });
      backStarsMore.cache({
        x:0,
        y:0,
        width: stage.width(),
        height: stage.height()
      });*/

      // console.log(backLayerOffset);
      // backgroundImage.y(backgroundImage.offsetY());
      //backgroundImage.offsetY(0);
      //backgroundImage.fillLinearGradientStartPointY(backLayerOffset.y);
      /*console.log(backLayerOffset);
      backLayer.x(backLayerOffset.x);
      backLayer.y(backLayerOffset.y);*/


      /*nodesLayer.clearCache();

      nodesLayer.x(0);
      nodesLayer.y(0);

      nodesLayer.draw();*/
    });


    $(document).on("wheel", function (e) {
      delta = e.originalEvent.wheelDeltaY;
      /*console.log(delta);
      var newZoomLevel = Math.round((zoomLevel + (delta / 120) / 10) * 1000) / 1000;
      console.log(newZoomLevel);
      nodesLayer.scale({x: newZoomLevel, y: newZoomLevel});
      nodesLayer.draw();
      zoomLevel = newZoomLevel;
      */
      console.log(zoomLevel);
      if ((delta > 0 && zoomLevel > 1.5) || (delta < 0 && zoomLevel < 0.3)) return;

      var newZoomLevel = Math.round((zoomLevel + (delta / 120) / 10) * 1000) / 1000;
      zoomLevel = newZoomLevel;

      var tween = new Kinetic.Tween({
        node: stage, 
        duration: 0.2,
        scaleX: newZoomLevel,
        scaleY: newZoomLevel,
        x: tree.selectedNode.shapes.x(),
        y: tree.selectedNode.shapes.y(),
        onFinish: function() {
          clearInterval(camera.redrawStageInterval);
          camera.redrawStageInterval = null;
        }
      });

      tween.play();
      if (!camera.redrawStageInterval) {
        camera.redrawStageInterval = setInterval(function () {
            camera.updateSecurityZone();
            camera.drawZone(camera.securityZone);
            console.log("redrawing");

            // backLayer.x(camera.securityZone.minX);
            // backLayer.y(camera.securityZone.minY);

            stage.batchDraw();
        },20);
      }
    });

    // backLayer = new Kinetic.Layer();

    /*
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
    });*/

    /*backLayer.add(background);

    for (i = 0; i < 300; i++)
    {
      var star = new Kinetic.Circle({
        radius: Math.random()*1.6,
        fill: "white",
        x: Math.round(Math.random()*backgroundWidth-1000),
        y: Math.round(Math.random()*backgroundHeight-800),
      })
      backLayer.add(star);

    }*/

    /*backLayer.cache({
      x:-200,
      y:-200,
      width:1000,
      height:500
    })*/
    // backLayer.listening(false);

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


    // stage.add(backLayer);
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
      // console.log(stage.isDragging());
      if (backLayerOffset != null) {
        
        // backLayerOffset = null;
      }


      // if (!stage.isDragging()) {
        // console.log("1 " + backLayer.y());
        backStars.x(Math.round((stage.getPointerPosition().x + backStars.x()) /60));
        backStars.y(Math.round((stage.getPointerPosition().y + backStars.y()) /60));
        /*backStarsMore.x(Math.round((stage.getPointerPosition().x + backStarsMore.x()) /60));
        backStarsMore.y(Math.round((stage.getPointerPosition().y + backStarsMore.y()) /60));
        backStarsMore.batchDraw();*/
        backStars.batchDraw();
        backStage.batchDraw();
        // console.log("2 " + backLayer.y());
      // }
    });


    backStage = new Kinetic.Stage({
      container: 'backdrop',
      width: $("#kinetic").width(),
      height: $("#kinetic").height(),
    });

    backLayer = new Kinetic.Layer();

    backgroundWidth = stage.getWidth();
    backgroundHeight = stage.getHeight() + 500;



    backgroundImage = new Kinetic.Rect({
      x: 0,
      y: -500,
      width: backgroundWidth,
      height: backgroundHeight + 500,
      fillLinearGradientStartPoint: {x:0, y:0},
      fillLinearGradientEndPoint: {x:0,y:backgroundHeight},
      fillLinearGradientColorStops: [0, '#4a2f52', 0.7, '#e67b88', 1, '#b66fb0']
    });



    backLayer.add(backgroundImage);

    backStars = new Kinetic.Layer();

    for (i = 0; i < 150; i++)
    {
      var star = new Kinetic.Circle({
        radius: Math.random()*1.6,
        fill: "white",
        x: Math.round(Math.random()*backgroundWidth),
        y: Math.round(Math.random()*(backgroundHeight-500) / 2),
      })
      backStars.add(star);
    }
    /*backStars.cache({
      x:0,
      y:0,
      width: stage.width(),
      height: stage.height()
    });*/
    
    /*
    backStarsMore = new Kinetic.Layer({opacity: 0});
    for (i = 0; i < 600; i++)
    {
      var star = new Kinetic.Circle({
        radius: Math.random()*1.7,
        fill: "white",
        x: Math.round(Math.random()*backgroundWidth),
        y: Math.round(Math.random()*(backgroundHeight-500) / 2),
      })
      backStarsMore.add(star);
    }*/

    
    /*backStarsMore.cache({
      x:0,
      y:0,
      width: stage.width(),
      height: stage.height()
    });*/

    backStage.listening(false);




    backStage.add(backLayer, backStars);

    backStage.draw();
});


