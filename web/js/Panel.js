var Panel = function(node, initParams) {
	this.initParams = initParams;
	this.$subPanels = {};
	this.$activeSubpanel;

	var that = this;

    var userRole = "user"; //editor, anonymous



	$.ajax({
      url: baseUrl + "panel/getPanel/" + node.id + "/",
    }).done(function(content) {

    	$("#panel").empty().append(content);
    	$("#panel .panel-content").each(function (index, subPanel) {
            // debugger;
            subPanelId = $(subPanel).attr("id");
    		that.$subPanels[subPanelId] = $(subPanel);
            that.initSubPanel(subPanel);
            that.loadSubPanelEvents(subPanel, userRole);
    	});

    	$("#panel").show("slide", {
    		direction: "right",
    		complete: function () {
                that.$activeSubpanel = that.$subPanels["first-panel"];
                that.initParams.onComplete();
            }
    	});
	});

	this.close = function(params) {
		$("#panel").hide("slide", {
			direction: "right", 
			complete: function() {
                that.$activeSubpanel.hide();
                params.onComplete();
            }
		});
	}

	this.loadSubPanelEvents = function(subPanel, userRole) {
        var subPanelId = $(subPanel).attr("id");
        switch (subPanelId) {
            case "first-panel":
            // debugger;
                $(subPanel).children("a.panel-btn").each(function (loadBtnIndex, loadBtn) {
                    $(loadBtn).on("tap click", function() {
                        var panelToLoad = $(loadBtn).data("panel");
                        that.$activeSubpanel = $("#" + panelToLoad);
                        $("#" + panelToLoad).show("slide", {
                            direction: "right"
                        }, that.panelLoadEvents);
                        return false;
                    });
                })
                break;
            case "create-skill-panel":
                $(subPanel).find(".img-btn").on("tap click", function() {
                    $(subPanel).find("#creationType").val($(this).data("value"));
                    $(subPanel).find("#skillParentUuid").val($(this).data("parentuuid"));
                    $(subPanel).find(".img-btn").toggleClass("selected");
                });

                $("#create-skill-form").on("submit", function(e){
                    e.preventDefault();
                    $.ajax({
                        url: $("#create-skill-form").attr("action"),
                        type: $("#create-skill-form").attr("method"),
                        data: $("#create-skill-form").serialize(),
                        success: function(response){
                            if (response.status == "ok"){
                                $("#create-skillName").val("");
                                $(subPanel).find(".message-zone").html(response.message).css("display", "inline-block");
                                
                                var creationType = $(subPanel).find("#creationType").val();
                                if (creationType == "child") {
                                    tree.editedNode.createNewChild(response.data);
                                } else if (creationType == "parent") { 
                                    $("#creationTypeParent").data("parentuuid", response.data.uuid);
                                    $("#skillParentUuid").val(response.data.uuid);
                                    tree.editedNode.createNewParent(response.data)
                                }
                            }
                        }
                    });
                });
                break;
            case "move-skill-panel":
                $(subPanel).find(".img-btn").on("tap click", function() {
                    $(subPanel).find("#moveType").val($(this).data("value"));
                    $(subPanel).find("#move-form-submit").val($(this).data("value").toUpperCase());
                    $(subPanel).find(".selected").toggleClass("selected");
                    $(this).toggleClass("selected");

                    $(subPanel).find("#move-step2").css("display", "block");
                });

                $("#move-skill-form").on("submit", function(e){
                    e.preventDefault();
                    $.ajax({
                        url: $("#move-skill-form").attr("action"),
                        type: $("#move-skill-form").attr("method"),
                        data: $("#move-skill-form").serialize(),
                        success: function(response){
                            if (response.status == "ok"){
                                $(subPanel).find(".message-zone").html(response.message).css("display", "inline-block");
                                tree.executeMoveCopy();
                            }
                        }
                    });
                });
                break;
            case "rename-skill-panel":
                $("#rename-skill-form").on("submit", function(e){
                    e.preventDefault();
                    $.ajax({
                        url: $("#rename-skill-form").attr("action"),
                        type: $("#rename-skill-form").attr("method"),
                        data: $("#rename-skill-form").serialize(),
                        success: function(response){
                            if (response.status == "ok"){
                                $("#rename-skillName").val("");
                                $("#panel .skillName").html('"'+response.data.name+'"'); //change the skillname at top of panel
                                $(subPanel).find(".message-zone").html(response.message).css("display", "inline-block");
                                tree.editedNode.setName(response.data.name);
                            }
                        }
                    });
                });
                break;
            case "delete-skill-panel":
                $("#delete-skill-form-submit").hide();
                $(subPanel).find(".sureToDeleteRadio").on("change", function(e){
                    $("#delete-skill-form-submit").toggle();
                });
                $("#delete-skill-form").on("submit", function(e){
                    e.preventDefault();
                    $.ajax({
                        url: $("#delete-skill-form").attr("action"),
                        type: $("#delete-skill-form").attr("method"),
                        data: $("#delete-skill-form").serialize(),
                        success: function(response){
                            if (response.status == "ok") {
                                var nodeToDelete = tree.editedNode;
                                nodeToDelete.finishEdit(); //close the panel, nothing to do here anymore    
                                nodeToDelete.deleteFromDB();
                            }
                        }
                    });
                });
                break;
            case "translate-skill-panel":                
                $("#translate-skill-form").on("submit", function(e){
                    e.preventDefault();
                    $.ajax({
                        url: $("#translate-skill-form").attr("action"),
                        type: $("#translate-skill-form").attr("method"),
                        data: $("#translate-skill-form").serialize(),
                        success: function(response){
                            if (response.status == "ok"){
                                $.ajax({
                                    url: baseUrl + "panel/reloadTranslations/" + node.id,
                                    success: function(messagesHtml){
                                        $("#other-translations-list").html(messagesHtml);
                                    }
                                });
                            }
                        }
                    });
                });
                break;
            case "discuss-skill-panel":
                $("#discuss-skill-form").on("submit", function(e){
                    e.preventDefault();
                    $.ajax({
                        url: $("#discuss-skill-form").attr("action"),
                        type: $("#discuss-skill-form").attr("method"),
                        data: $("#discuss-skill-form").serialize(),
                        success: function(response){
                            if (response.status == "ok"){
                                $("#discuss-message").val("");
                                $.ajax({
                                    url: baseUrl + "panel/reloadDiscussionMessages/" + node.id + "/",
                                    success: function(messagesHtml){
                                        $(".discuss-prev-messages").html(messagesHtml);
                                    }
                                });
                            }
                        }
                    });
                });
                break;
        }

        //Common events
        $(subPanel).find(".back-to-panel-btn").on("tap click", function() {
            $(subPanel).hide("slide", {
                direction:"right"
            });
            that.$activeSubpanel = that.$subPanels["first-panel"];
            if (tree.targetMode = true) tree.exitTargetMode();
            return false;
        });

        $(subPanel).find(".close-panel-btn").on("tap click", function() {
            if (tour.isActive == true) tour.actionOnTree("close-panel");

            if (tree.targetMode = true) tree.exitTargetMode();
            tree.editedNode.finishEdit();
            return false;
        });

        // Click/tap on the stage only fires on nodes, not on empty space (TODO)
        // stage.on("click tap", function(e) {
        //     tree.editedNode.finishEdit();
        //     stage.off("click tap");
        // });
	}

    this.initSubPanel = function(subPanel) {
        var subPanelId = $(subPanel).attr("id");
        $(subPanel)
            .css({
                position: "absolute",
                width: $("#panel").width() 
            });
        if (subPanelId != "first-panel") $(subPanel).hide();
    }
}

Panel.prototype.panelLoadEvents = function() {
    var panel = tree.editedNode.panel;

    switch (panel.$activeSubpanel[0].id) {
        case "move-skill-panel":
            tree.enterTargetMode();
            break;
    }
}



