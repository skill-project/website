var Panel = function(node, initParams) {
	this.initParams = initParams;

	var that = this;

	(function(params) {
		$("#panel").empty().append("<h1>" + node.name + "</h1>");
		// console.log($("#panel").is(":animated"));
		// console.log(++actionsCount);
		$("#panel").show("slide", {
			direction: "right",
			complete: that.initParams.onComplete
		});
		
	}).call();


	this.close = function(params) {
		$("#panel").hide("slide", {
			direction: "right", 
			complete: params.onComplete
		});
	}
}
