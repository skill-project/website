var Loader = function(params) {
	var params = typeof params != "undefined" ? params : {};

	this.color = typeof params.color != "undefined" ? params.color : "#fef7f9";
	this.diameter = typeof params.diameter != "undefined" ? params.diameter : 47;
	this.density = typeof params.density != "undefined" ? params.density : 22;
	this.range = typeof params.range != "undefined" ? params.range : 1.2;

	if (typeof params.css != "undefined") {
		$('#loader').css(params.css);
	}

	this.isVisible = false;
	this.isWaitingToShow = false;
	this.timer;
	this.cl;
}

Loader.prototype.show = function() {
	if (typeof this.cl === "undefined" && this.isVisible === false && this.isWaitingToShow === false) {
		$("#loader").show();
		this.isWaitingToShow = true;
		this.timer = setTimeout(function() {
			loader.cl = new CanvasLoader('loader');
			loader.cl.setColor(loader.color);
			loader.cl.setShape('spiral');
			loader.cl.setDiameter(loader.diameter);
			loader.cl.setDensity(loader.density);
			loader.cl.setRange(loader.range);
			loader.cl.setSpeed(1);
			loader.cl.setFPS(30);
			loader.cl.show();
			
			this.isVisible = true;
			this.isWaitingToShow = false;
		}, 200);
	}
}

Loader.prototype.hide = function() {
	if (this.isWaitingToShow === true) {
		clearTimeout(this.timer);
		this.isVisible = false;
		this.isWaitingToShow = false;
	}	
	if (typeof this.cl != "undefined") {
		this.cl.kill();

		this.isVisible = false;
		this.isWaitingToShow = false;

		delete this.cl;
	}
	$("#loader").hide();
}