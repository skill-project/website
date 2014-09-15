var Camera = function() {
    this.securityZoneFactor = 0.3;
    this.securityZone;
    this.redrawStageInterval;
    this.rectZone;

    var that = this;



    this.checkCameraPosition = function(params)
    {
        console.log("check cam pos");
        that.updateSecurityZone();
        that.cacheInvisibleNodes();

        if (params.objectType == "node") {
            var node = params;
            var boundingBox = node.getBoundingBox();

            if (!camera.isBoxOnScreen(boundingBox, that.securityZone)) {
                camera.goToCoords({
                    x: node.shapes.x() + node.shapes.width() / 2,
                    y: node.shapes.y() + node.shapes.height() / 2,
                });
            }
        }
    }

    this.goToCoords = function(params) {
        var velocity = 50;

        destX = nodesLayer.x() - params.x + stage.getWidth() / 2;
        destY = nodesLayer.y() - params.y + stage.getHeight() / 2;

        var tween = new Kinetic.Tween({
          node: stage,
          x: destX,
          y: destY,
          duration: 0.5,
          easing: Kinetic.Easings.Linear,
          onFinish: function() {
            clearInterval(camera.redrawStageInterval);
            that.redrawStageInterval = null;
            camera.cacheInvisibleNodes();

            camera.updateSecurityZone();
            camera.drawZone(camera.securityZone);
            nodesLayer.draw();
          }
        });

        tween.play();
        if (!that.redrawStageInterval) {
            that.redrawStageInterval = setInterval(function () {
                console.log("redrawing");
                stage.batchDraw();

                // backLayer.x()
            },20);
        }

    }

    this.cacheInvisibleNodes = function() {
        // console.clear();
        // console.time("isBoxOnScreen");
        var nodeIds = Object.keys(tree.nodes);
        // console.log(nodeIds);
        for (var nodeId in nodeIds) {
            var node = tree.nodes[nodeIds[nodeId]];
            
            var nodeOnScreen = camera.isBoxOnScreen(node.getBoundingBox());
            
            
            if (!nodeOnScreen) {
                if (!node.cached) {
                    // console.log(node.name + " not on screen and not already cached : caching!");
                    node.cache();
                }
            }else {
                if (node.cached) {
                    node.clearCache();
                }
            }
            // tree.nodes[nodeIds[nodeId]].shapes.cache({drawBorder: true});

        }
        nodesLayer.draw();
        // console.timeEnd("isBoxOnScreen");
    }

    this.updateSecurityZone = function() {


        that.securityZone = {
            minX: Math.round(-stage.x() + (stage.width() / 2) * that.securityZoneFactor) / zoomLevel,
            maxX: Math.round(-stage.x() + (stage.width()) - (stage.width() / 2 * that.securityZoneFactor)) / zoomLevel,
            minY: Math.round(-stage.y() + (stage.height() / 2) * that.securityZoneFactor) / zoomLevel,
            maxY: Math.round(-stage.y() + (stage.height()) - (stage.height() / 2 * that.securityZoneFactor)) / zoomLevel
        }
    }

    this.isBoxOnScreen = function(boundingBoxOrPoint, securityZone) {


        //0.009
        var numParams = Object.keys(boundingBoxOrPoint).length;

        //0.034
        if (securityZone == null) {
            var checkZone = {
                minX : -stage.x(), 
                minY : -stage.y(),
                maxX : -stage.x() + stage.width(),
                maxY : -stage.y() + stage.height()
            }
        }
        else {
            checkZone = securityZone;
        }
        
        
        //12
        // camera.drawZone(checkZone);
        
        
        switch (numParams) {
            case 4:
                //0.006
                var boundingBox = boundingBoxOrPoint;
                //x1,y1 : top,left
                //x2,y2 : bottom,right
                if (
                    boundingBox.x1 < checkZone.minX ||
                    boundingBox.y1 < checkZone.minY ||
                    boundingBox.x2 > checkZone.maxX ||
                    boundingBox.y2 > checkZone.maxY
                ) return false;
                else return true;

                break
            case 2:
                //x1,y1
                var point = boundingBoxOrPoint;
                if (
                    point.y1 < checkZone.minY ||
                    point.x1 < checkZone.minX ||
                    point.x1 > checkZone.maxX ||
                    point.y1 > checkZone.maxY
                ) return false;
                else return true;
                break;
        }
        
    }

    this.drawZone = function(zone) {
        // console.clear();
        /*console.log("Zoomlevel : " + zoomLevel);
        console.log("Stage : " + stage.x() + " " + stage.y());
        console.log("nodesLayer : " + nodesLayer.x() + " " + nodesLayer.y());
        console.log("backLayer : " + backLayer.x() + " " + backLayer.y());
        console.log(camera.securityZone);*/

        if (that.rectZone != null)
        {
            that.rectZone.destroy();
            that.rectZone = null;
        }

        /*console.log("Stage pos : " + stage.x() + " " + stage.y());
        console.log("Stage size : " + stage.width() + " " + stage.height());
        console.log(that.securityZone);*/

            var pointTL = new Kinetic.Circle({
                x:zone.minX,
                y:zone.minY,
                radius:10,
                stroke: 'white',
                fill:'white',
                strokeWidth: 5
            });
            pointTL.listening(false);

            var pointTR = new Kinetic.Circle({
                x:zone.maxX,
                y:zone.minY,
                radius:10,
                stroke: 'white',
                fill:'white',
                strokeWidth: 5
            });
            pointTR.listening(false);

            var pointBL = new Kinetic.Circle({
                x:zone.minX,
                y:zone.maxY,
                radius:10,
                stroke: 'white',
                fill:'white',
                strokeWidth: 5
            });
            pointBL.listening(false);

            var pointBR = new Kinetic.Circle({
                x:zone.maxX,
                y:zone.maxY,
                radius:10,
                stroke: 'white',
                fill:'white',
                strokeWidth: 5
            });
            pointBR.listening(false);


            that.rectZone = new Kinetic.Group();
            that.rectZone.add(pointTL, pointTR, pointBL, pointBR);

        // rectZone.setZIndex(-100);

        nodesLayer.add(that.rectZone);
        nodesLayer.draw();
    }

    this.setAbsoluteCircle = function() {
        console.log(stage.x());

        /*var pointBR = new Kinetic.Circle({
            x:zone.maxX,
            y:zone.maxY,
            radius:10,
            stroke: 'white',
            fill:'white',
            strokeWidth: 5
        });
        pointBR.listening(false);*/
    }

    
}
