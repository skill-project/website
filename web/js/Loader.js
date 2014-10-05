var Loader = function() {
	this.isVisible = false;
	this.isWaitingToShow = false;
	this.timer;
	this.cl;
}

Loader.prototype.show = function() {
	if (typeof this.cl === "undefined" && this.isVisible === false && this.isWaitingToShow === false) {
		this.isWaitingToShow = true;
		this.timer = setTimeout(function() {
			loader.cl = new CanvasLoader('loader');
			loader.cl.setColor('#fef7f9');
			loader.cl.setShape('spiral');
			loader.cl.setDiameter(47);
			loader.cl.setDensity(22);
			loader.cl.setRange(1.2);
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
}