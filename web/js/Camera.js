var Camera = function() {
    this.defaultSecurityZoneFactor = 0.3;
    this.redrawStageInterval;
    this.rectZone;
    this.scale = 1;
    this.zoomFactor = 1;
    this.origin = {x: 0, y: 0};

    var that = this;

    //Zoom event
    $(document).on("wheel", function (event) {
        event.preventDefault();
        var evt = event.originalEvent;
        var mx = evt.clientX;
        var my = evt.clientY;
        var wheel = evt.wheelDelta / 120;
        var zoom = (that.zoomFactor - (evt.wheelDelta < 0 ? 0.1 : -0.1));
        var newscale = that.scale * zoom;

        that.origin.x = mx / that.scale + that.origin.x - mx / newscale;
        that.origin.y = my / that.scale + that.origin.y - my / newscale;

        that.scale *= zoom;

        //Fluid zoom
        var tween = new Kinetic.Tween({
            node: nodesLayer, 
            duration: 0.2,
            offsetX: that.origin.x,
            offsetY: that.origin.y,
            scaleX: newscale,
            scaleY: newscale
        });
        tween.play();

        //Static zoom
        // nodesLayer.offsetX(that.origin.x);
        // nodesLayer.offsetY(that.origin.y);
        // nodesLayer.scaleX(newscale);
        // nodesLayer.scaleY(newscale);
        // nodesLayer.draw();
    });

    //Checks if node is safely inside viewport (securityZone)
    //If not, animates the stage to the point where the node is centered on the screen
    this.checkCameraPosition = function(node)
    {
        var securityZone = camera.getSecurityZone(camera.defaultSecurityZoneFactor);
        var boundingBox = node.getBoundingBox();
        var onScreen = camera.isBoxOnScreen(boundingBox, securityZone, false);

        if (onScreen.x == false && onScreen.y == false) var moveDirection = "xy";
        else if (onScreen.x == false) var moveDirection = "x";
        else if (onScreen.y == false) var moveDirection = "y";
        else moveDirection = false;

        if (moveDirection) {
            camera.goToCoords({
                x: node.shapes.x() + node.shapes.width() / 2,
                y: node.shapes.y() + node.shapes.height() / 2
            }, moveDirection);
        }
    }

    this.goToCoords = function(params, moveDirection) {
        var destX = (moveDirection == "x" || moveDirection == "xy") ? stage.width() / 2 - (params.x - nodesLayer.offsetX()) * that.scale : stage.x();
        var destY = (moveDirection == "y" || moveDirection == "xy") ? stage.height() / 2 - (params.y - nodesLayer.offsetY()) * that.scale : stage.y();

        var tweenX = new Kinetic.Tween({
          node: stage,
          x: destX,
          duration: 0.25,
          easing: Kinetic.Easings.Linear,
          onFinish: function() {
            var tweenY = new Kinetic.Tween({
              node: stage,
              y: destY,
              duration: 0.25,
              easing: Kinetic.Easings.Linear,
              onFinish: function() {
                camera.cacheInvisibleNodes();
                clearInterval(that.redrawStageInterval);
                that.redrawStageInterval = null;
              }
            });
            tweenY.play();
          }
        });
        tweenX.play();
    }

    this.cacheInvisibleNodes = function() {
        var securityZone = camera.getSecurityZone(0);
        var nodeIds = Object.keys(tree.nodes);

        for (var nodeId in nodeIds) {
            var node = tree.nodes[nodeIds[nodeId]];
            var nodeOnScreen = camera.isBoxOnScreen(node.getBoundingBox(), securityZone, true);
            
            if (!nodeOnScreen && !node.cached) node.cache();
            else if (nodeOnScreen && node.cached) node.clearCache();
        }
        nodesLayer.draw();
    }

    this.getSecurityZone = function(securityZoneFactor) {
        if (securityZoneFactor == null) var securityZoneFactor = that.defaultSecurityZoneFactor;

        var securityZone = {
            minX: Math.round(-stage.x() + (stage.width() / 2) * securityZoneFactor) / that.scale + nodesLayer.offsetX(),
            maxX: Math.round(-stage.x() + stage.width() - (stage.width() / 2 * securityZoneFactor)) / that.scale + nodesLayer.offsetX(),
            minY: Math.round(-stage.y() + (stage.height() / 2) * securityZoneFactor) / that.scale + nodesLayer.offsetY(),
            maxY: Math.round(-stage.y() + stage.height() - (stage.height() / 2 * securityZoneFactor)) / that.scale + nodesLayer.offsetY()
        }
        return securityZone;
    }

    //boundingBoxOrPoint : point case is not yet used
    //partialAllowed : 
    // - true : will not return false is box is partially off screen / will return true even if box is only partially on screen
    // - false : will return false if box is partially off screen / will return true only if box fits completely on screen
    this.isBoxOnScreen = function(boundingBoxOrPoint, securityZone, partialAllowed) {
        var numParams = Object.keys(boundingBoxOrPoint).length;
        var checkZone = securityZone;
        
        switch (numParams) {
            case 4:
                var boundingBox = boundingBoxOrPoint;
                //x1,y1 : top,left
                //x2,y2 : bottom,right
                if (partialAllowed == false) {
                    if (boundingBox.x1 < checkZone.minX || boundingBox.x2 > checkZone.maxX) var inZoneX = false;
                    else var inZoneX = true;
                    if (boundingBox.y1 < checkZone.minY || boundingBox.y2 > checkZone.maxY) var inZoneY = false;
                    else var inZoneY = true;
                    return {x: inZoneX, y: inZoneY};
                }else {
                    if (
                        (boundingBox.x1 < checkZone.minX && boundingBox.x2 < checkZone.minX) ||
                        (boundingBox.y1 < checkZone.minY && boundingBox.y2 < checkZone.minY) ||
                        (boundingBox.x1 > checkZone.maxX && boundingBox.x2 > checkZone.maxX) ||
                        (boundingBox.y1 > checkZone.maxY && boundingBox.y2 > checkZone.maxY)
                    ) return false;
                    else return true;
                }
                break
            case 2:
                //x1,y1
                var point = boundingBoxOrPoint;
                if (
                    point.y1 < checkZone.minY || point.x1 < checkZone.minX ||
                    point.x1 > checkZone.maxX || point.y1 > checkZone.maxY
                ) return false;
                else return true;
                break;
        }
    }

    // Only for debug purposes
    // this.drawStage = function() {
    //     if (typeof line1 != "undefined") line1.destroy();
    //     if (typeof line2 != "undefined") line2.destroy();
    //     if (typeof line3 != "undefined") line3.destroy();
    //     if (typeof line4 != "undefined") line4.destroy();

    //     line1 = new Kinetic.Line({
    //       points: [stage.x(), stage.y(), stage.x()+stage.width(), stage.y()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     line2 = new Kinetic.Line({
    //       points: [stage.x()+stage.width(), stage.y(), stage.x() + stage.width(), stage.y()+stage.height()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     line3 = new Kinetic.Line({
    //       points: [stage.x(), stage.y()+stage.height(), stage.x()+stage.width(), stage.y()+stage.height()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     line4 = new Kinetic.Line({
    //       points: [stage.x(), stage.y(), stage.x(), stage.y()+stage.height()],
    //       stroke: 'red',
    //       strokeWidth: 15
    //     });

    //     stageDrawLayer.add(line1, line2, line3, line4);
    //     stageDrawLayer.draw();
    // }

    // this.drawZone = function(zone) {
    //     camera.updateSecurityZone();

    //     if (that.rectZone != null)
    //     {
    //         that.rectZone.destroy();
    //         that.rectZone = null;
    //     }

    //     var pointTL = new Kinetic.Circle({
    //         x:zone.minX,
    //         y:zone.minY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointTL.listening(false);

    //     var pointTR = new Kinetic.Circle({
    //         x:zone.maxX,
    //         y:zone.minY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointTR.listening(false);

    //     var pointBL = new Kinetic.Circle({
    //         x:zone.minX,
    //         y:zone.maxY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointBL.listening(false);

    //     var pointBR = new Kinetic.Circle({
    //         x:zone.maxX,
    //         y:zone.maxY,
    //         radius:10,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 5
    //     });
    //     pointBR.listening(false);


    //     var centerX = (stage.width() / 2 - stage.x()) / that.scale + nodesLayer.offsetX();
    //     var centerY = (stage.height() / 2 - stage.y()) / that.scale + nodesLayer.offsetY();

    //     var pointCenter = new Kinetic.Circle({
    //         x:centerX,
    //         y:centerY,
    //         radius:10,
    //         stroke: 'black',
    //         fill:'black',
    //         strokeWidth: 5
    //     });
    //     pointCenter.listening(false);

    //     that.rectZone = new Kinetic.Group();
    //     that.rectZone.add(pointTL, pointTR, pointBL, pointBR, pointCenter);

    //     nodesLayer.add(that.rectZone);
    //     nodesLayer.draw();
    // }

    //Sets up drag and move events for stage
    this.initDragEvents = function() {
        stage.on("dragstart", function(e) {
          panStartCoords = stage.getPointerPosition();
          panLayerStartCoords = { x: backLayer.x(), y: backLayer.y() }
          panBackImageStartCoords = { x: 0, y: backgroundImage.y() }
        });

        stage.on("dragmove", function(e) {
          panCurCoords = stage.getPointerPosition();
          panDistanceX = panCurCoords.x - panStartCoords.x;
          panDistanceY = panCurCoords.y - panStartCoords.y;

          distToTop = -backgroundImage.y();
          distToBottom = backgroundImage.height() + backgroundImage.y() - stage.getHeight();
          var smaller = distToTop < distToBottom ? distToTop : distToBottom;

          backgroundImage.y(panBackImageStartCoords.y + (panDistanceY / (2000 / smaller)));

          //If stars are not cached, we can animate their opacity based on "virtual altitude"
          // if (distToBottom < 480 && distToBottom > 384) {
          //   backStars.opacity((distToBottom*5-1920)/480);
          // }else if (distToBottom <= 384) backStars.opacity(0);
          // if (distToTop < 480 && distToTop > 384) {
          //   backStarsMore.opacity(1-((distToTop*5-1920)/480));
          // }else if (distToTop <= 384) backStarsMore.opacity(1);
          // backStars.batchDraw();


          backLayer.batchDraw();
        });

        stage.on("dragend", function(e) {
          backLayerOffset = {x: 0, y: panDistanceY};

          camera.cacheInvisibleNodes();

          // Cache the stars once the drag is finished
          // backStars.cache({
          //   x:0,
          //   y:0,
          //   width: stage.width(),
          //   height: stage.height()
          // });
          // backStarsMore.cache({
          //   x:0,
          //   y:0,
          //   width: stage.width(),
          //   height: stage.height()
          // });

          //backgroundImage.y(backgroundImage.offsetY());
          //backgroundImage.offsetY(0);
          //backgroundImage.fillLinearGradientStartPointY(backLayerOffset.y);
          //backLayer.x(backLayerOffset.x);
          //backLayer.y(backLayerOffset.y);
        });

        $("#kinetic").mousemove(function (e) {
            backStars.x(Math.round((stage.getPointerPosition().x + backStars.x()) /60));
            backStars.y(Math.round((stage.getPointerPosition().y + backStars.y()) /60));
            backStars.batchDraw();
            backStage.batchDraw();
        });
    }

    this.skySetup = function () {
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

        // backStars.cache({
        //   x:0,
        //   y:0,
        //   width: stage.width(),
        //   height: stage.height()
        // });
        
        // backStarsMore = new Kinetic.Layer({opacity: 0});
        // for (i = 0; i < 600; i++)
        // {
        //   var star = new Kinetic.Circle({
        //     radius: Math.random()*1.7,
        //     fill: "white",
        //     x: Math.round(Math.random()*backgroundWidth),
        //     y: Math.round(Math.random()*(backgroundHeight-500) / 2),
        //   })
        //   backStarsMore.add(star);
        // }
        // backStarsMore.cache({
        //   x:0,
        //   y:0,
        //   width: stage.width(),
        //   height: stage.height()
        // });

        backStage.listening(false);
        backStage.add(backLayer, backStars);
        backStage.draw();
    }
}
