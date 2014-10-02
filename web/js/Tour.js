var Tour = function() {
	this.tourObj;
	this.legIndex = -1;
	this.isActive = false;
    this.legActions = [];
    this.firstSkill;
}

Tour.prototype.start = function() {
    tour.isActive = true;
    tour.firstSkill = tree.rootNode.children[Object.keys(tree.rootNode.children)[0]];
	tour.setPositions();

	tour.tourObj = $('#my-tour-id').tourbus( {
	    onLegStart: function(leg, tourbus) {
            if (leg.rawData.orientation == "right") $(leg.$el[0]).css("left", leg.rawData.left);

            leg.$el
                .css( { visibility: 'visible', opacity: 0, zIndex: 9999 } )
                .animate( { opacity: 0.8 }, 500, function() { leg.show(); } );

            tour.legIndex++;
            return false;
	    },
	    onLegEnd: function(leg, tourbus) {
            tour.nextLeg(leg, tourbus);
	    }
	  });

	tour.tourObj.trigger('depart.tourbus');
}

Tour.prototype.setPositions = function() {
	$("#tour-leg1")
	  .data("top", $("#kinetic").position().top + tree.rootNode.shapes.y() + tree.rootNode.sizes.labelHeight / 2 - 50)
	  .data("left", $("#kinetic").position().left + tree.rootNode.shapes.x() + tree.rootNode.sizes.labelWidth + 350)
	  .data("orientation", "right");
	
	
	$("#tour-leg2")
	  .data("top", $("#kinetic").position().top + tour.firstSkill.shapes.y())
	  .data("left", $("#kinetic").position().left + tour.firstSkill.shapes.x() + tour.firstSkill.sizes.totalWidth + 20)
	  .data("orientation", "right");

  	$("#tour-leg3")
	  .data("top", $("#kinetic").position().top + $("#kinetic").height() / 2 - $("#footer").height() + 40)
	  .data("left", $("#kinetic").position().left + tour.firstSkill.shapes.x())
	  .data("orientation", "top")
	  .data("arrow", "8%");

  	$("#tour-leg4")
	  .data("top", $("#kinetic").position().top + 20)
	  .data("left", $("#kinetic").width() - 390)
	  .data("orientation", "left");
}

Tour.prototype.actionOnTree = function(type, node) {
	switch (type) {
		case "label-click":
            if (tour.legActions[1] == true) return;

            if (tour.legIndex == 1) {
                if (tour.firstSkill == node) tour.tourObj.trigger('next.tourbus');
                else tour.endTour();
            }else tour.endTour();
            break;
        case "plus-click":
            if (tour.legActions[2] == true) return;
            if (tour.legIndex == 2) {
                if (tour.firstSkill == node) tour.tourObj.trigger('next.tourbus');
                else tour.endTour();
            }else tour.endTour();
            break;
        default:
            doTour = false;
            if (tour.isActive) tour.endTour();
            break;
	}
}

Tour.prototype.nextLeg = function(leg, tourbus) {
    switch (leg.index) {
        case 0:
            //Do nothing
            break;
        case 1:
            tour.legActions[leg.index] = true;
            tour.firstSkill.labelGroup.fire("click");
            break;
        case 2:
            tour.legActions[leg.index] = true;
            tour.firstSkill.editButton.fire("click");
            break;
    }
}

Tour.prototype.endTour = function() {
    tour.tourObj.trigger('stop.tourbus');
    tour.isActive = false;
    tour.legIndex = -1;
    tour.tourObj[0].remove();
    $("#tourbus-0").remove();
}