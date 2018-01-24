var Edge = function(nodeFrom, nodeTo) {
  this.nodeFrom = nodeFrom;
  this.nodeTo = nodeTo;
  this.selected = false;
  this.x;
  this.y;
  this.width;
  this.height;
  var that = this;

  this.getStartEndPoints = function () {
    //Offsets handle correct positioning of the edges with the cached from/to nodes
    //Cached nodes include the glow image which offsets them. Probably could have been handled differently...
    var nodeToCachedOffset = 0;
    var nodeFromCachedOffset = 0;
    if (that.nodeTo.cached == true) nodeToCachedOffset = 25;
    if (that.nodeFrom.cached == true) nodeFromCachedOffset = 25;

    edgeStartX = that.nodeFrom.shapes.x() + that.nodeFrom.sizes.edgeStartXOffset;
    edgeStartY = that.nodeFrom.shapes.y() + that.nodeFrom.sizes.edgeStartYOffset;
    edgeEndX = that.nodeTo.shapes.x()
    edgeEndY = that.nodeTo.shapes.y() + that.nodeTo.shapes.getHeight() / 2;

    return {
      nodeFrom: {
        x: edgeStartX + nodeFromCachedOffset,
        y: edgeStartY + nodeFromCachedOffset
      },
      nodeTo: {
          x: edgeEndX + nodeToCachedOffset,
          y: edgeEndY + nodeToCachedOffset
      }
    }
  }

  this.cachePos = this.getStartEndPoints();

  var line = new Kinetic.Shape({
    drawFunc: function(context) {
      //Coordinates for start and end points must be recalculated on every draw
      var pos = that.getStartEndPoints();
      that.cachePos = pos;

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
    stroke: "#eed4d8",
    fill: "#eed4d8",
    lineCap: "round",
    strokeWidth: 1.7,
    listening: false
  })

  this.shape = line;

  nodesLayer.add(line);

  this.getBoundingBox = function() {
    var startEndPoints = that.getStartEndPoints();
    var nodeFrom = startEndPoints.nodeFrom;
    var nodeTo = startEndPoints.nodeTo;

    if (nodeFrom.y < nodeTo.y) {
      return {
        x1: nodeFrom.x - 5,
        y1: nodeFrom.y - 5,
        x2: nodeTo.x + 5,
        y2: nodeTo.y + 5
      }
    }else {
      return {
        x1: nodeFrom.x - 5,
        y1: nodeTo.y - 5,
        x2: nodeTo.x + 5,
        y2: nodeFrom.y + 5
      }
    }
  }
}