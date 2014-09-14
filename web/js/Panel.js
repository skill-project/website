var Panel = function(node, initParams) {
	this.initParams = initParams;

	var that = this;

	(function(params) {
		$.ajax({
		      url: baseUrl + "panel/getPanel/" + node.id + "/",
		    }).done(function(content) {
				$("#panel").empty().append(content);
				// console.log($("#panel").is(":animated"));
				// console.log(++actionsCount);
				$("#panel").show("slide", {
					direction: "right",
					complete: that.initParams.onComplete
				});
			});
		
	}).call();


	this.close = function(params) {
		$("#panel").hide("slide", {
			direction: "right", 
			complete: params.onComplete
		});
	}
}
