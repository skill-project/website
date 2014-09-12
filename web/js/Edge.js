var Edge = function(nodeFrom, nodeTo) {
  this.nodeFrom = nodeFrom;
  this.nodeTo = nodeTo;
  this.selected = false;
  var that = this;

  this.getStartEndPoints = function () {
    edgeStartX = that.nodeFrom.rect.attrs.x + that.nodeFrom.rect.getWidth();
    edgeStartY = that.nodeFrom.rect.attrs.y + that.nodeFrom.rect.getHeight() / 2;
    edgeEndX = that.nodeTo.rect.attrs.x
    edgeEndY = that.nodeTo.rect.attrs.y + that.nodeTo.rect.getHeight() / 2;

    return {
      nodeFrom: {
        x: edgeStartX,
        y: edgeStartY
      },
      nodeTo: {
          x: edgeEndX,
          y: edgeEndY
      }
    }
  }

  this.cachePos = this.getStartEndPoints();

  /*this.shape = new Kinetic.Group({
    x: this.cachePos.nodeFrom.x,
    y: this.cachePos.nodeFrom.y
  });*/

  this.startPoint = new Kinetic.Circle({
    x:0,
    y:0,
    radius:5,
    fill: "#fbeaed"
  });

  var line = new Kinetic.Shape({
    drawFunc: function(context) {
      //Coordinates for start and end points must be recalculated on every draw
      var pos = that.getStartEndPoints();
      that.cachePos = pos;

      that.startPoint.setX(pos.nodeFrom.x).setY(pos.nodeFrom.y);

      cp1X = pos.nodeFrom.x + 50;
      cp1Y = pos.nodeFrom.y;
      cp2X = pos.nodeTo.x - 50;
      cp2Y = pos.nodeTo.y;

      if (that.selected) {
        var originalStroke = this.attrs.stroke;
        var originalStrokeWidth = this.attrs.strokeWidth;

        this.attrs.stroke = "rgba(251,225,169,0.4)";
        this.attrs.strokeWidth = "6";
        context.beginPath();
        context.moveTo(pos.nodeFrom.x, pos.nodeFrom.y);
        context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, pos.nodeTo.x, pos.nodeTo.y);
        context.strokeShape(this);
        this.attrs.stroke = originalStroke;
        this.attrs.strokeWidth = originalStrokeWidth;
      }
      
      context.beginPath();
      context.moveTo(pos.nodeFrom.x, pos.nodeFrom.y);
      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, pos.nodeTo.x, pos.nodeTo.y);
      context.strokeShape(this);

      context.moveTo(pos.nodeFrom.x, pos.nodeFrom.y);
      context.beginPath();
      context.arc(pos.nodeFrom.x - 4,pos.nodeFrom.y,4,0,2*Math.PI);
      context.fillShape(this);

      context.moveTo(pos.nodeTo.x, pos.nodeTo.y);
      context.beginPath();
      context.arc(pos.nodeTo.x,pos.nodeTo.y,4,0,2*Math.PI);
      context.fillShape(this);
    },
    // stroke: "#fbeaed",
    stroke: "#eed4d8",
    fill: "#eed4d8",
    lineCap: "round",
    strokeWidth: 1.7
  })

  

  //this.shape.add(line, this.startPoint);

  this.shape = line;

  nodesLayer.add(line);

  
}