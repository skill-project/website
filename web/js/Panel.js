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
        console.log("ici");
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
                $(subPanel).children("a.panel-btn").each(function (loadBtnIndex, loadBtn) {
                    $(loadBtn).on("tap click", function() {
                        var panelToLoad = $(loadBtn).data("panel");
                        $("#" + panelToLoad).show("slide", {
                            direction: "right"
                        });
                        that.$activeSubpanel = $("#" + panelToLoad);
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
                            if (response.status == "ok"){
                                tree.editedNode.finishEdit(); //close the panel, nothing to do here anymore    
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
        });

        $(subPanel).find(".close-panel-btn").on("tap click", function() {
            tree.editedNode.finishEdit();
        });	
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



