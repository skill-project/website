var FPSCounter = function() {
	this.currentFPS = 0;
	this.startTime = 0;	
	this.frames = 0;

	this.running = false;
	this.averageSent = false;

	this.readings = [];
};

FPSCounter.prototype.start = function () {
	if (typeof requestAnimationFrame == "undefined") return;

	if (this.running === true || this.averageSent === true) return;
	this.running = true;
	this.startTime = Date.now();
	
	requestAnimationFrame($.proxy(this.countFrames, this));
};

FPSCounter.prototype.end = function () {
	if (this.running === false || this.averageSent === true) return;

	var timeElapsed = Date.now() - this.startTime;
	this.currentFPS = Math.round(this.frames / (timeElapsed / 1000));

	this.saveFPS();
	this.running = false;
	this.reset();
};

FPSCounter.prototype.countFrames = function () {
	if (typeof requestAnimationFrame == "undefined") return;

	this.frames++;
	if (this.running === true) requestAnimationFrame($.proxy(this.countFrames, this));
};

FPSCounter.prototype.saveFPS = function() {
	if (typeof requestAnimationFrame == "undefined") return;

	this.readings.push(this.currentFPS);
	
	if (this.readings.length === 5) {
		var readingsSum = 0;
		for (readingIndex in this.readings) {
			readingsSum+=this.readings[readingIndex];
		}
		var averageFPS = Math.round((readingsSum / this.readings.length) * 10) / 10;

		ga("send", "event", "averageFPS", "5-readings", averageFPS);
		this.averageSent = true;
	}
}

FPSCounter.prototype.reset = function() {
	if (typeof requestAnimationFrame == "undefined") return;

	this.currentFPS = 0;
	this.startTime = 0;
	this.frames = 0;
}