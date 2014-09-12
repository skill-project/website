var Panel = function(node) {
	$("#panel").show("slide", {direction: "right"});
	$("#panel").empty().append("<h1>" + node.name + "</h1>");

	this.close = function(params) {
		$("#panel").hide("slide", {
			direction: "right", 
			complete: params.onComplete
		});
	}
}
