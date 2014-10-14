var Site = function() {
	this.initEvents();
}

Site.prototype.initEvents = function() {
	$("#lang-nav").on("click", function(e) {
		$(this).find("ul").toggle("slide", {direction: "up"}) 
		ga("send", "event", "uiAction", "languageToggle");
	});
}