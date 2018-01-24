var Tour = function() {
	this.tourObj;
	this.legIndex = -1;
	this.isActive = false;
    this.legActions = [];
    this.firstSkill;
    this.overlay;
}

Tour.prototype.start = function() {

    this.overlay = $("<div></div>").css({
        position: "absolute",
        top: $("#kinetic").position().top,
        left: 0,
        width: $(window).width(),
        height: $("#kinetic").height(),
        opacity: 0.70,
        backgroundColor: "#000"
    });

    $("body").append(this.overlay);

    tour.isActive = true;
    tour.firstSkill = tree.rootNode.children[Object.keys(tree.rootNode.children)[0]];
	tour.setPositions();

	tour.tourObj = $('#my-tour-id').tourbus( {
	    onLegStart: function(leg, tourbus) {
            if (leg.rawData.orientation == "right") $(leg.$el[0]).css("left", leg.rawData.left);

            if (typeof leg.rawData.arrow !== "undefined" && leg.rawData.arrow === false) $(leg.el).removeClass("tourbus-arrow");

            var updatedPosition = tour.getUpdatedPositionForLeg(leg);
            tour.overrideLegPosition(leg, updatedPosition);

            if (leg.index === 0) leg.$el.css("box-shadow", "0 0 23px -5px #1adae6");

            if (leg.index !== 2) {
                leg.$el
                    .css( { visibility: 'visible', opacity: 0, zIndex: 9999 } )
                    .animate( { opacity: 0.8 }, 300, function() { leg.show(); } );
            }

            tour.legIndex++;
            return false;
	    },
	    onLegEnd: function(leg, tourbus) {
            if (tour.isActive === true && tourbus.running === true) tour.nextLeg(leg, tourbus);
	    },
        onStop: function(tourbus) {
            tour.overlay.fadeOut({duration: 1000});
            tour.isActive = false;
            doTour = false;
            tour.legIndex = -1;
            tour.tourObj[0].remove();
            $("#tourbus-0").remove();
            stage.draggable(true);
        }
	  });

	tour.tourObj.trigger('depart.tourbus');
}

Tour.prototype.getUpdatedPositionForLeg = function(leg) {
    switch (leg.index) {
        case 0:
            return {
                top: $("#kinetic").position().top + tree.rootNode.shapes.y() + tree.rootNode.sizes.labelHeight / 2 - 50,
                left: $("#kinetic").position().left + tree.rootNode.shapes.x() + tree.rootNode.sizes.labelWidth + 350
            }
            break;
        case 1:
            tour.overlay.fadeOut({duration: 1000});
            return {
                top: $("#kinetic").position().top + tour.firstSkill.shapes.y(),
                left: $("#kinetic").position().left + tour.firstSkill.shapes.x() + tour.firstSkill.sizes.totalWidth + 20
            }
            break;
        case 2:
            return {
                top: $("#kinetic").position().top + $("#kinetic").height() / 2 - $("#footer").height() + 20 - stage.y(),
                left: $("#kinetic").position().left + tour.firstSkill.shapes.x()
            }
            break;
        case 3:
            return {
                top: $("#kinetic").position().top + 20,
                left: $("#kinetic").width() - $(leg.$el).width() - 390
            }
            break;
    }
}

Tour.prototype.setPositions = function() {
	$("#tour-leg1").data("orientation", "right");
	$("#tour-leg2").data("orientation", "right").data("arrow", "25%");;
  	$("#tour-leg3").data("orientation", "top").data("arrow", "12%");
  	$("#tour-leg4").data("orientation", "left");
}

Tour.prototype.actionOnTree = function(type, node) {
	switch (type) {
		case "label-click":
            if (tour.legActions[1] == true) {
                tour.legActions = [];
                return;
            }

            if (tour.legIndex == 1) {
                if (tour.firstSkill == node) tour.tourObj.trigger('next.tourbus');
                else tour.endTour();
            }else tour.endTour();
            break;
        case "plus-click":
            if (tour.legActions[2] == true) {
                tour.legActions = [];
                return;
            }
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
        case 3:
            tour.isActive = false;
            tour.legIndex = -1;
    }
}

Tour.prototype.endTour = function() {
    tour.isActive = false;
    tour.tourObj.trigger('stop.tourbus');
}

Tour.prototype.overrideLegPosition = function(leg, newPosition) {
    $(leg.$el[0]).css("left", newPosition.left);
    $(leg.$el[0]).css("top", newPosition.top);
}

//This is called by camera.goToCoords after camera has moved
Tour.prototype.updateLegPositionsAfterCameraMove = function() {
    if (this.legIndex !== 2) return;

    var leg = tour.tourObj.data("tourbus").legs[this.legIndex];

    var updatedPosition = tour.getUpdatedPositionForLeg(leg);
    tour.overrideLegPosition(leg, updatedPosition);

    leg.$el
        .css( { visibility: 'visible', opacity: 0, zIndex: 9999 } )
        .animate( { opacity: 0.8 }, 500, function() { leg.show(); } );
}