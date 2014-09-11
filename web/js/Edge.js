var Edge = function(nodeFrom, nodeTo) {
  this.nodeFrom = nodeFrom;
  this.nodeTo = nodeTo;

  var that = this;

  this.edgeStartX = that.nodeFrom.rect.attrs.x + that.nodeFrom.rect.getWidth();
  this.edgeStartY = that.nodeFrom.rect.attrs.y + that.nodeFrom.rect.getHeight() / 2;

  this.shape = new Kinetic.Group({
    x: this.edgeStartX,
    y: this.edgeStartY
  });

  var line = new Kinetic.Shape({
    drawFunc: function(context) {
      // console.log(context);
      // var context = canvas.getContext();
      // console.log(that.edgeStartX);
      edgeStartX = that.nodeFrom.rect.attrs.x + that.nodeFrom.rect.getWidth();
      // console.log(edgeStartX);
      cp1X = that.edgeStartX + 50;
      cp1Y = that.edgeStartY;
      edgeEndX = that.nodeTo.rect.attrs.x
      edgeEndY = that.nodeTo.rect.attrs.y + that.nodeTo.rect.getHeight() / 2;
      cp2X = edgeEndX - 50;
      cp2Y = edgeEndY;

      context.beginPath();
      context.moveTo(that.edgeStartX, that.edgeStartY);
      context.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, edgeEndX, edgeEndY);
      context.strokeShape(this);
    },
    stroke: "#fbeaed",
    lineCap: "round",
    strokeWidth: 2
  })

  var startPoint = new Kinetic.Circle({
    x:0,
    y:0,
    radius:5,
    fill: "#fbeaed"
  })

  this.shape.add(line, startPoint);

  nodesLayer.add(this.shape);
}