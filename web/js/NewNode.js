var NewNode = function(params) {
	this.parent = params.parent;
	this.previous = params.previous;
	this.rectangle;
	this.shapes;
	this.sizes;
	this.input;
	this.addButton;

	this.setSizes();

	this.rectangle = new Kinetic.Rect({
	  x: 0,
	  y: 0,
	  width: this.sizes.totalWidth,
	  height: this.sizes.totalHeight,
	  stroke: "#eed4d8",
	  strokeWidth: 2
	});

	if (typeof this.previous !== "undefined") {
		var posX = this.previous.shapes.x();
		var posY = this.previous.shapes.y() + this.previous.sizes.labelHeight + this.previous.sizes.verticalGap;
	}else {
		var posX = this.parent.shapes.x() + this.parent.sizes.totalWidth + this.sizes.horizontalGap;
		var posY = this.parent.shapes.y();
	}

	this.shapes = new Kinetic.Group({
		x: posX,
		y: posY,
		width: this.sizes.totalWidth,
		height: this.sizes.totalHeight
	});

	this.shapes.add(this.rectangle);

	this.rectangle.on("mouseover", function() { if (tree.newNodeMode !== true) document.body.style.cursor = 'pointer'; });
	this.rectangle.on("mouseout", function() { if (tree.newNodeMode !== true) document.body.style.cursor = 'default'; });
	this.rectangle.on("click tap", $.proxy(function() {
		if (tree.newNodeMode === false) {
			tree.newNodeMode = true;
			tree.activeNewNode = this;

			// debugger;
			// camera.setDefaultZoom();

			if (typeof this.previous !== "undefined") {
				var newNodeX = this.previous.getPositionRelativeToScreen().x;
				var newNodeY = this.previous.getPositionRelativeToScreen().y + this.previous.sizes.labelHeight + this.previous.sizes.verticalGap;
			}else {
				var newNodeX = this.parent.getPositionRelativeToScreen().x + this.parent.sizes.totalWidth + this.sizes.horizontalGap;
				var newNodeY = this.parent.getPositionRelativeToScreen().y;
			}


			this.input = $("<textarea class='newNode'>");
			this.input.css({
				left: newNodeX,
				top: newNodeY,
				width: this.sizes.totalWidth,
				height: this.sizes.totalHeight,
			});

			$("#kinetic").append(this.input);
			this.input.focus();

			this.addButton = new Kinetic.Rect({
				x: this.shapes.width() - 80,
				y: this.shapes.height() + 10,
				width: 80,
				height: 30,
				fill: "#0f0",
				cornerRadius: 5,
				opacity: 0
			});

			this.addButton.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
			this.addButton.on("mouseout", function() { document.body.style.cursor = 'default'; });
			this.addButton.on("click tap", $.proxy(function() {
				this.add();
				tree.newNodeMode = false;
			}, this));

			var addTween = new Kinetic.Tween({
				node: this.addButton,
				opacity: 1,
				duration: 0.5,
				easing: Kinetic.Easings.Linear
			});


			this.cancelButton = new Kinetic.Rect({
				x: 0,
				y: this.shapes.height() + 10,
				width: 80,
				height: 30,
				fill: "#f00",
				cornerRadius: 5,
				opacity: 0
			});

			this.cancelButton.on("mouseover", function() { document.body.style.cursor = 'pointer'; });
			this.cancelButton.on("mouseout", function() { document.body.style.cursor = 'default'; });
			this.cancelButton.on("click tap", $.proxy(function() {
				this.reset();
			}, this));

			var cancelTween = new Kinetic.Tween({
				node: this.cancelButton,
				opacity: 1,
				duration: 0.5,
				easing: Kinetic.Easings.Linear
			});

			this.shapes.add(this.addButton, this.cancelButton);


			nodesLayer.draw();

			camera.animateStage(0.6);
			addTween.play();
			cancelTween.play();
		}
	}, this));

	nodesLayer.add(this.shapes);

	this.edge = new Edge(this.parent, this);

	this.parent.newNode = this;
}

NewNode.prototype.add = function() {
	var skillName = this.input.val();

	$.ajax({
	    url: "/add-skill/",
	    type: "POST",
	    data: {
	    	skillName: skillName,
	    	selectedSkillUuid: tree.selectedNode.id,
	    	skillParentUuid: this.parent.id,
	    	creationType: "child"
	    }
	}).done( $.proxy(function(response){
	    if (response.status == "ok"){
	        
	        this.delete();

			ga("send", "event", "nodeCreate", response.data.name, "fromNewNode");

	        this.parent.createNewChild(response.data);

	        delete this;
	    }
	    else {
	        this.showErrors(response);
	    }
	}, this));
}

NewNode.prototype.delete = function() {
	if (typeof this.input !== "undefined") {
		this.input.remove();
	}

	delete tree.activeNewNode;

	this.shapes.destroy();
	this.edge.shape.destroy();
	nodesLayer.draw();

	if (this.parent.getChildren().length === 0) this.parent.open = false;
}

NewNode.prototype.reset = function() {
	this.addButton.destroy();
	this.cancelButton.destroy();

	delete tree.activeNewNode;
	this.input.remove();
	
	nodesLayer.draw();

	tree.newNodeMode = false;
}

NewNode.prototype.setSizes = function() {
	var sizes;

	if (typeof this.previous !== "undefined") {
		sizes = {
			labelWidth: this.previous.sizes.labelWidth,
			labelHeight: this.previous.sizes.labelHeight,
			editButtonWidth: this.previous.sizes.editButtonWidth,
		// 	editButtonHeight: 56,
		// 	glowOffsetX: -25,
		// 	glowOffsetY: -25,
		// 	glowWidth: 288,
		// 	glowHeight: 108,
		// 	verticalGap: 20,
			horizontalGap: 80,
		// 	appearDestYOffset: 0,
		// 	appearStartXOffset: 0,
		// 	appearStartYOffset: 0
		}
	}else {
		sizes = {
			labelWidth: this.parent.sizes.labelWidth,
			labelHeight: this.parent.sizes.labelHeight,
			editButtonWidth: this.parent.sizes.editButtonWidth,
		// 	editButtonHeight: 56,
		// 	glowOffsetX: -25,
		// 	glowOffsetY: -25,
		// 	glowWidth: 288,
		// 	glowHeight: 108,
		// 	verticalGap: 20,
			horizontalGap: 80,
		// 	appearDestYOffset: 0,
		// 	appearStartXOffset: 0,
		// 	appearStartYOffset: 0
		}
	}

	

	sizes.totalWidth = sizes.labelWidth + sizes.editButtonWidth;
	sizes.totalHeight = sizes.labelHeight;

	// sizes.startXOffset = sizes.labelWidth * 0.25;
	// sizes.startYOffset = sizes.labelHeight / 2;

	// sizes.midXOffset = sizes.totalWidth + sizes.horizontalGap;
	// sizes.midYOffset = sizes.labelHeight / 2;

	sizes.edgeStartXOffset = sizes.totalWidth + 4;
	sizes.edgeStartYOffset = sizes.labelHeight / 2;

	// sizes.slotHeight = sizes.labelHeight + sizes.verticalGap;

	this.sizes = sizes;
}

NewNode.prototype.getPositionRelativeToScreen = function() {
  var screenBoundingBox = camera.getSecurityZone(0);
  return {
    x: (this.shapes.x() - screenBoundingBox.minX) * camera.scale,
    y: (this.shapes.y() - screenBoundingBox.minY) * camera.scale
  }
}

NewNode.prototype.repositionInput = function() {
	newNodePosition = this.getPositionRelativeToScreen();

	this.input.show();

	this.input.css({
	    top: newNodePosition.y,
	    left: newNodePosition.x
	});
}