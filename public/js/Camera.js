var Camera = function() {
    this.defaultSecurityZoneFactor = 0.3;
    this.redrawStageInterval;
    this.rectZone;
    this.scale = 1;
    this.zoomFactor = 1;
    this.origin = {x: 0, y: 0};
    this.zoomTween;
    this.lastZoom = (new Date()).getTime();
    this.panelOffset = 0;
    this.footerOffset = 0;
    this.backgroundImage;
    this.backStars;
    this.backStage;
    this.backLayer;
    this.dummyShape;

    var that = this;

    //Zoom event
    $("#kinetic").on("mousewheel", function (event) {
    // stage.on("wheel", function (event) {
        event.preventDefault();
        
        if (tour.isActive == true || doTour == true) return;

        if ((that.scale <= 0.15 && event.deltaY < 0) || (that.scale >= 1.6 && event.deltaY > 0)) return;
        // console.log(that.scale);

        var timeFromLastZoom = (new Date()).getTime() - camera.lastZoom;

        if (timeFromLastZoom > 100) var zoomAcceleration = 1;
        else if (timeFromLastZoom > 60 && timeFromLastZoom <= 100) var zoomAcceleration = 1.2;
        else if (timeFromLastZoom > 50 && timeFromLastZoom <= 60) var zoomAcceleration = 2;
        else if (timeFromLastZoom > 40 && timeFromLastZoom <= 50) var zoomAcceleration = 3;
        else if (timeFromLastZoom > 30 && timeFromLastZoom <= 40) var zoomAcceleration = 5;
        else if (timeFromLastZoom <= 30) var zoomAcceleration = 6;

        zoomAcceleration *= 0.1;

        var evt = event.originalEvent;
        var mx = evt.clientX - stage.x();
        var my = evt.clientY - stage.y() - $("#header").height();
        var zoom = (that.zoomFactor - (event.deltaY < 0 ? 0.02 : -0.02) * event.deltaFactor * zoomAcceleration);

        //Strange condition we must catch in order to prevent the tree from turning upside down
        if (zoom < 0) return;

        var newscale = that.scale * zoom;

        that.origin.x = mx / that.scale + that.origin.x - mx / newscale;
        that.origin.y = my / that.scale + that.origin.y - my / newscale;


        that.scale *= zoom;

        //Fluid zoom
        // var diffOffsetX = that.origin.x - nodesLayer.offsetX();
        // var diffOffsetY = that.origin.y - nodesLayer.offsetY();

        // var prevScale = nodesLayer.scaleX();
        // var newScaleMid = (newscale - nodesLayer.scaleX()) / 2 + nodesLayer.scaleX();
    
        // camera.zoomTween = new Kinetic.Tween({
        //     node: nodesLayer, 
        //     duration: 0.2,
        //     offsetX: that.origin.x - diffOffsetX / 2.3,
        //     offsetY: that.origin.y - diffOffsetY / 2.3,
        //     scaleX: newScaleMid,
        //     scaleY: newScaleMid,
        //     easing: Kinetic.Easings.Linear,
        //     onFinish: function() {
        //         var finishOffsetTween = new Kinetic.Tween({
        //             node: nodesLayer, 
        //             duration: 0.2,
        //             offsetX: that.origin.x,
        //             offsetY: that.origin.y,
        //             scaleX: newscale,
        //             scaleY: newscale,
        //             easing: Kinetic.Easings.Linear
        //         });
        //         finishOffsetTween.play();
        //         console.log("play");
        //     }
        // });
        // camera.zoomTween.play();

        //Static zoom
        nodesLayer.offsetX(that.origin.x);
        nodesLayer.offsetY(that.origin.y);
        nodesLayer.scaleX(newscale);
        nodesLayer.scaleY(newscale);
        nodesLayer.batchDraw();

        camera.lastZoom = (new Date()).getTime();
    });

    //Checks if node is safely inside viewport (securityZone)
    //If not, animates the stage to the point where the node is centered on the screen
    this.checkCameraPosition = function(node, childrenCount)
    {
        //the childrenCount parameter was initially added to calculate a boundingBox with children that are not yet present (just before expanding)
        //if childrenCount was not passed but node is open, calculate boundingBox with actual children
        if (typeof childrenCount == "undefined" && node.open == true) {
            childrenCount = Object.keys(node.children).length;
        }

        var securityZone = camera.getSecurityZone(camera.defaultSecurityZoneFactor);

        if (typeof childrenCount == "undefined") {
            var boundingBox = node.getBoundingBox();
        } else {
            var boundingBox = node.getBoundingBox(childrenCount);
        }

        var onScreen = camera.isBoxOnScreen(boundingBox, securityZone, false);

        if (onScreen.x == false && onScreen.y == false) var moveDirection = "xy";
        else if (onScreen.x == false) var moveDirection = "x";
        else if (onScreen.y == false) var moveDirection = "y";
        else moveDirection = false;

        if (moveDirection) {
            camera.goToCoords({
                x: node.shapes.x() + node.sizes.totalWidth / 2,
                y: node.shapes.y() + node.sizes.totalHeight / 2,
            }, moveDirection);
        }
    }

    this.goToCoords = function(params, moveDirection) {
        var destX = (moveDirection == "x" || moveDirection == "xy") ? stage.width() / 2 - (params.x - nodesLayer.offsetX() + camera.panelOffset / 2) * that.scale : stage.x();
        var destY = (moveDirection == "y" || moveDirection == "xy") ? stage.height() / 2 - (params.y - nodesLayer.offsetY() + camera.footerOffset / 2) * that.scale : stage.y();

        var tweenX = new Kinetic.Tween({
          node: stage,
          y: destY,
          duration: 0.25,
          easing: Kinetic.Easings.Linear,
          onFinish: function() {
            var tweenY = new Kinetic.Tween({
              node: stage,
              x: destX,
              duration: 0.25,
              easing: Kinetic.Easings.Linear,
              onFinish: function() {
                camera.cacheInvisibleNodes();
                clearInterval(that.redrawStageInterval);
                that.redrawStageInterval = null;

                if (tour.isActive === true) tour.updateLegPositionsAfterCameraMove();
              }
            });
            tweenY.play();
          }
        });
        tweenX.play();
    }

    this.moveStageBy = function(params) {
        var tween = new Kinetic.Tween({
            node: stage,
            x: stage.x() + params.x,
            y: stage.y() + params.y,
            duration: 0.25,
            easing: Kinetic.Easings.Linear,
            onFinish: function() {
                camera.cacheInvisibleNodes();
            }
        });
        camera.animateStage(0.25);
        tween.play();
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
            maxX: Math.round(-stage.x() + stage.width() - (stage.width() / 2 * securityZoneFactor) - camera.panelOffset) / that.scale + nodesLayer.offsetX(),
            minY: Math.round(-stage.y() + (stage.height() / 2) * securityZoneFactor) / that.scale + nodesLayer.offsetY(),
            maxY: Math.round(-stage.y() + stage.height() - (stage.height() / 2 * securityZoneFactor) - camera.footerOffset) / that.scale + nodesLayer.offsetY()
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
    //     // camera.updateSecurityZone();

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


    //     var centerX = (stage.width() / 2 - stage.x() - camera.panelOffset / 2) / that.scale + nodesLayer.offsetX();
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

    // this.drawBoundingBox = function(boundingBox) {
    //     var rect = new Kinetic.Rect({
    //         x:boundingBox.x1,
    //         y:boundingBox.y1,
    //         width: boundingBox.x2 - boundingBox.x1,
    //         height: boundingBox.y2 - boundingBox.y1,
    //         stroke: 'white',
    //         fill:'white',
    //         strokeWidth: 1,
    //         opacity: 0.2
    //     });
    //     nodesLayer.add(rect);
    //     nodesLayer.draw();
    // }

    //Sets up drag and move events for stage
    this.initDragEvents = function() {
        stage.on("dragstart", function(e) {
            panStartCoords = stage.getPointerPosition();
            panLayerStartCoords = { x: camera.backLayer.x(), y: camera.backLayer.y() }
            panBackImageStartCoords = { x: 0, y: camera.backgroundImage.y() }
        });

        stage.on("dragmove", function(e) {
          panCurCoords = stage.getPointerPosition();
          panDistanceX = panCurCoords.x - panStartCoords.x;
          panDistanceY = panCurCoords.y - panStartCoords.y;

          distToTop = -camera.backgroundImage.y();
          distToBottom = camera.backgroundImage.height() + camera.backgroundImage.y() - stage.getHeight();
          var smaller = distToTop < distToBottom ? distToTop : distToBottom;

          camera.backgroundImage.y(panBackImageStartCoords.y + (panDistanceY / (2000 / smaller)));

          //If stars are not cached, we can animate their opacity based on "virtual altitude"
          // if (distToBottom < 480 && distToBottom > 384) {
          //   backStars.opacity((distToBottom*5-1920)/480);
          // }else if (distToBottom <= 384) backStars.opacity(0);
          // if (distToTop < 480 && distToTop > 384) {
          //   backStarsMore.opacity(1-((distToTop*5-1920)/480));
          // }else if (distToTop <= 384) backStarsMore.opacity(1);
          // backStars.batchDraw();


          camera.backLayer.batchDraw();
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
            camera.backStars.x(Math.round((stage.getPointerPosition().x + camera.backStars.x()) /60));
            camera.backStars.y(Math.round((stage.getPointerPosition().y + camera.backStars.y()) /60));
            camera.backStars.batchDraw();
        });

        // stage.on("contentClick", function(e) {
        //     // e.cancelBubble = true;
        //     // console.log("contentClick");
        //     // if (tour.isActive == true || doTour == true) tour.actionOnTree("stage-click");

        //     // if (typeof tree.editedNode != "undefined") tree.editedNode.finishEdit();

        // });

        //Light hack to animate stage in every situation
        this.dummyShape = new Kinetic.Rect({
            width:100,
            height:100,
            x:0,
            y:0
        });
    }

    this.skySetup = function () {
        camera.backStage = new Kinetic.Stage({
          container: 'backdrop',
          width: $("#kinetic").width(),
          height: $("#kinetic").height(),
        });

        camera.backLayer = new Kinetic.Layer();

        var backgroundWidth = stage.getWidth();
        var backgroundHeight = stage.getHeight() + 500;

        var backgroundImage = new Kinetic.Rect({
          x: 0,
          y: -500,
          width: backgroundWidth,
          height: backgroundHeight + 500,
          fillLinearGradientStartPoint: {x:0, y:0},
          fillLinearGradientEndPoint: {x:0,y:backgroundHeight},
          fillLinearGradientColorStops: [0, '#4a2f52', 0.7, '#e67b88', 1, '#b66fb0']
        });

        camera.backgroundImage = backgroundImage;

        camera.backLayer.add(backgroundImage);

        camera.drawStars(backgroundWidth, backgroundHeight);

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

        camera.backStage.listening(false);
        camera.backStage.add(camera.backLayer, camera.backStars);
        camera.backStage.draw();
    }
}

Camera.prototype.drawStars = function(backgroundWidth, backgroundHeight) {
    if (typeof camera.backStars == "undefined") camera.backStars = new Kinetic.Layer();
    else camera.backStars.destroyChildren();

    for (i = 0; i < 150; i++)
    {
      var star = new Kinetic.Circle({
        radius: Math.random()*1.6,
        fill: "white",
        x: Math.round(Math.random()*backgroundWidth),
        y: Math.round(Math.random()*(backgroundHeight-500) / 2),
      })
      camera.backStars.add(star);
    }
}

Camera.prototype.resizeElements = function() {
    var newWidth = $(window).width();
    var newHeight = $(window).height() - $("#header").height();

    $("#kinetic, #backdrop")
        .width(newWidth)
        .height(newHeight);

    $("body").height(newHeight);

    camera.backStage.width(newWidth);
    camera.backStage.height(newHeight);

    stage.width(newWidth);
    stage.height(newHeight);

    camera.backgroundImage.width(newWidth);
    camera.backgroundImage.height(newHeight + 500);

    camera.drawStars(newWidth, newHeight + 500);
    camera.backStage.draw();

    if (typeof tree.editedNode != "undefined") {
        camera.checkIfPanelBlocksEditedNode();
    }else {
        camera.animateStage(0.5);
        camera.checkCameraPosition(tree.selectedNode);    
    }
    
    if (typeof tree.editedNode != "undefined") {
        var newPanelHeight = newHeight - $("#footer").height() - 15;
        $("#panel").height(newPanelHeight);
        tree.editedNode.panel.setOrUpdateScrollbar();
    }

    camera.cacheInvisibleNodes();

    if (tour.isActive === true) {
        tour.overlay.css({
            width: $(window).width(),
            height: $("#kinetic").height()
        });

        //TODO : here we should reposition tour legs after resize
    }
}


//Light hack to animate stage in every situation
//This methode must be called just before animating the stage
//seconds: time in seconds the stage is going to be animated
//Hack is needed because some kind of optimisation in KineticJS 
//doesn't automatically redraw the stage when the stage is the only element being animated
//TODO : check on SO that this behaviour is not a bug
Camera.prototype.animateStage = function(seconds) {
    var tween = new Kinetic.Tween({
        node: camera.dummyShape,
        x: camera.dummyShape.x() + 100,
        duration: seconds,
        opacity:0
    });
    tween.play();
}

Camera.prototype.checkIfPanelBlocksEditedNode = function() {
    var blockedByPanel = tree.editedNode.isBlockedByPanel();
    if (blockedByPanel != false) {
      camera.moveStageBy({x: -blockedByPanel - 50, y:0 });
    }
}
