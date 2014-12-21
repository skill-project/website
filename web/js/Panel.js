var Panel = function(node, initParams) {
	this.initParams = initParams;
	this.$subPanels = {};
	this.$activeSubpanel;

    //Locks panel during AJAX requests
    this.locked = false;

	var that = this;
    var userRole = "user"; //editor, anonymous

    $("#panel").height($("#kinetic").height() - $("#footer").height() - 15);

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

        camera.panelOffset = $("#panel").outerWidth();

    	$("#panel").show("slide", {
    		direction: "right",
    		complete: function () {
                that.$activeSubpanel = that.$subPanels["first-panel"];
                that.initParams.onComplete();
                that.setOrUpdateScrollbar();
            }
    	});
	});

	this.close = function(params) {
        that.closePanelModal();
		$("#panel").hide("slide", {
			direction: "right", 
			complete: function() {
                that.$activeSubpanel.hide();
                params.onComplete();
                camera.panelOffset = 0;
            }
		});
	}

    this.showErrors = function(response){
        var content = '<div class="modal-content">';
        content += '<a href="#" class="panelModalRemoveBtn"></a>';
        if (typeof response.message != "undefined"){
            content += '<h5>' + response.message + "</h5>";
            for (var key in response.data.errors) {
                if (response.data.errors.hasOwnProperty(key)) {
                    content += response.data.errors[key] + '<br />';
                }
            }
        }
        else {
            content += '<h5>' + jt.error + '</h5>';
        }
        content += '</div>';

        that.addPanelModal(content);        
    }

    this.showWarning = function(warning, callback) {
        var content = '<div class="modal-content warning">';
        content += '<a href="#" class="panelModalRemoveBtn"></a>';
        content += '<p>' + warning + '</p>';
        content += '<button class="panelModalOkBtn">' + jt.ok + '</button>';
        content += '</div>';

        this.addPanelModal(content, callback);
    }

    this.showMessage = function(content){
        this.$activeSubpanel.find(".message-zone").html(content).css("display", "block");
        window.setTimeout(function(){
            $(".message-zone").fadeOut("fast");
        }, 3000);
    }

    this.addPanelModal = function(html, callback){
        var panelModal = $('<div class="panelModal">');
        panelModal.html(html).hide();
        panelModal.css({
            width: $("#panel").width(),
            height: $("#panel").height()
        });
        $("#panel").append(panelModal);
        panelModal.fadeIn(200);
        $(".panelModalRemoveBtn, .panelModalOkBtn").on("tap click", function(e){
            e.preventDefault();
            that.closePanelModal();

            if (typeof callback !== "undefined") callback();
        });        
    }

    this.closePanelModal = function(){
        $(".panelModal").remove();
    }

	this.loadSubPanelEvents = function(subPanel, userRole) {
        var subPanelId = $(subPanel).attr("id");
        switch (subPanelId) {
            case "first-panel":
                $(subPanel).children("a.panel-btn").each(function (loadBtnIndex, loadBtn) {
                    $(loadBtn).on("tap click", function() {
                        var panelToLoad = $(loadBtn).data("panel");

                        //Hide first-panel's scrollbar so it doesn't conflict with subPanel's scrollbar
                        that.$activeSubpanel.find(".scrollbar").css("display", "none");

                        that.$activeSubpanel.hide("slide", {
                            direction:"left"
                        });

                        that.$activeSubpanel = $("#" + panelToLoad);

                        that.panelPreloadEvents();

                        $("#" + panelToLoad).show("slide", {
                            direction: "right",
                        }, function(){
                            that.panelLoadEvents();
                            
                            that.setOrUpdateScrollbar();

                            ga("send", "event", "panelLoad", panelToLoad);

                            if ($("body").hasClass("anonymous") && panelToLoad != "share-skill-panel" && panelToLoad != "skill-history-panel"){
                                that.addPanelModal(
                                    '<div class="modal-content">' + 
                                    '<h5>' + jt.panel.haveToBeSigned + '</h5>' + 
                                    '<a class="login-link" href="../login/">' + jt.panel.signIn + '</a> ' + jt.or +
                                    ' <a class="register-link" href="../register/">' + jt.panel.createAccount + '</a>' + '</div>'
                                );
                            }
                        });

                        return false;
                    });
                })
                break;
            case "create-skill-panel":
                $(subPanel).find(".img-btn").on("tap click", function() {
                    $(subPanel).find("#creationType").val($(this).data("value"));
                    $(subPanel).find("#skillParentUuid").val($(this).data("parentuuid"));
                    $(subPanel).find(".img-btn").toggleClass("selected");

                    if ($(subPanel).find("#creationType").val() === "child") $(subPanel).find("#childrenCapAlert").show();
                    else $(subPanel).find("#childrenCapAlert").hide();
                });

                $("#create-skill-form").on("submit", $.proxy(function(e){
                    e.preventDefault();
                    this.locked = true;

                    $.ajax({
                        url: $("#create-skill-form").attr("action"),
                        type: $("#create-skill-form").attr("method"),
                        data: $("#create-skill-form").serialize(),
                        
                    }).done( function(response){
                            if (response.status == "ok"){
                                $("#create-skillName").val("");
                                that.showMessage(response.message);

                                ga("send", "event", "nodeCreate", response.data.skill.name);
                                that.checkChildrenCaps({
                                    response: response
                                });

                                var creationType = $(subPanel).find("#creationType").val();
                                if (creationType == "child") {
                                    tree.editedNode.createNewChild(response.data.skill);
                                } else if (creationType == "parent") { 
                                    $("#creationTypeParent").data("parentuuid", response.data.skill.uuid);
                                    $("#skillParentUuid").val(response.data.skill.uuid);
                                    tree.editedNode.createNewParent(response.data.skill)
                                }
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                }, this));
                break;
            case "move-skill-panel":
                /*$(subPanel).find(".img-btn").on("tap click", function() {
                    $(subPanel).find("#moveType").val($(this).data("value"));
                    $(subPanel).find("#move-form-submit").val($(this).data("value").toUpperCase());
                    $(subPanel).find(".selected").toggleClass("selected");
                    $(this).toggleClass("selected");

                    $(subPanel).find("#move-step2").css("display", "block");
                    tree.enterTargetMode();
                });
                */

                $("#move-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;
                    $.ajax({
                        url: $("#move-skill-form").attr("action"),
                        type: $("#move-skill-form").attr("method"),
                        data: $("#move-skill-form").serialize()
                    }).done( function(response){
                            if (response.status == "ok"){
                                that.showMessage(response.message);
                                ga("send", "event", "nodeMove", tree.editedNode.name);

                                that.checkChildrenCaps({
                                    response: response,
                                    afterCheckCallback: tree.executeMoveCopy
                                });
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "rename-skill-panel":
                $("#rename-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;

                    $.ajax({
                        url: $("#rename-skill-form").attr("action"),
                        type: $("#rename-skill-form").attr("method"),
                        data: $("#rename-skill-form").serialize()
                    }).done( function(response){

                            if (response.status == "ok"){
                                $("#rename-skillName").val("");
                                $("#panel .skillName").html('"'+response.data.name+'"'); //change the skillname at top of panel
                                that.showMessage(response.message);
                                ga("send", "event", "nodeRename", tree.editedNode.name, response.data.name);
                                tree.editedNode.setName(response.data.name);
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                    });
                break;
            case "skill-settings-panel":
                $("#skill-settings-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;

                    $.ajax({
                        url: $("#skill-settings-form").attr("action"),
                        type: $("#skill-settings-form").attr("method"),
                        data: $("#skill-settings-form").serialize()
                    }).done( function(response){
                            if (response.status == "ok"){
                                that.showMessage(response.message);
                                ga("send", "event", "settingsChanged", tree.editedNode.name);
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                    });
                break;
            case "delete-skill-panel":
                $("#delete-skill-form-submit").hide();
                $('input[name=sureToDelete]').on("change", function(){
                    $("#delete-fake-radio").toggleClass("yes no");
                    $("#delete-skill-form-submit").toggle();
                });
                $("#delete-fake-radio").on("tap click", function(e){
                    var offset = $(this).offset();
                    var x = e.clientX - offset.left;
                    if (x < 24){ $("#yes-sureToDelete-label").click(); }
                    else { $("#no-sureToDelete-label").click(); }
                });
                $("#delete-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;

                    $.ajax({
                        url: $("#delete-skill-form").attr("action"),
                        type: $("#delete-skill-form").attr("method"),
                        data: $("#delete-skill-form").serialize()
                     }).done( function(response){

                            if (response.status == "ok") {
                                var nodeToDelete = tree.editedNode;
                                ga("send", "event", "nodeDelete", tree.editedNode.name);
                                nodeToDelete.finishEdit(); //close the panel, nothing to do here anymore    
                                nodeToDelete.deleteFromDB();
                                that.showMessage(response.message);
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "translate-skill-panel":                
                $("#translate-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;
                    
                    $.ajax({
                        url: $("#translate-skill-form").attr("action"),
                        type: $("#translate-skill-form").attr("method"),
                        data: $("#translate-skill-form").serialize()
                    }).done(function(response){

                            if (response.status == "ok"){
                                
                                $("#skillTrans").val("");
                                that.showMessage(response.message);

                                $.ajax({
                                    url: baseUrl + "panel/reloadTranslations/" + node.id + "/"
                                }).done(function(messagesHtml){
            
                                        $("#other-translations-list").html(messagesHtml);
                                        that.setOrUpdateScrollbar();
                                    });
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "discuss-skill-panel":
                $("#discuss-skill-form").on("submit", function(e){
                    e.preventDefault();
                    that.locked = true;
                    
                    $.ajax({
                        url: $("#discuss-skill-form").attr("action"),
                        type: $("#discuss-skill-form").attr("method"),
                        data: $("#discuss-skill-form").serialize()
                    }).done(function(response){

                            if (response.status == "ok"){
                                $("#discuss-message").val("");
                                
                                $.ajax({
                                    url: baseUrl + "panel/reloadDiscussionMessages/" + node.id + "/"
                                }).done(function(messagesHtml){
            
                                        $(".discuss-prev-messages").html(messagesHtml);
                                        that.setOrUpdateScrollbar();

                                    });
                            }
                            else {
                                that.showErrors(response);
                            }
                            that.locked = false;
                        });
                });
                break;
            case "share-skill-panel":
                $("#skill-permalink-input").on("tap click", function () {
                   $(this).select();
                });
                break;
        }

        //Common events
        $(subPanel).find(".back-to-panel-btn").on("tap click", $.proxy(function(e) {
            e.preventDefault();
            if (this.locked === true) return;

            $(subPanel).hide("slide", {
                direction:"right",
                complete: function() {
                    //Show first-panel's scrollbar
                    that.$subPanels["first-panel"].find(".scrollbar").css("display", "block");
                }
            });

            $("#first-panel").show("slide", {
                direction:"left"
            });

            that.$activeSubpanel = that.$subPanels["first-panel"];

            if (tree.targetMode == true) tree.exitTargetMode();
        }, this));

        $(subPanel).find(".close-panel-btn").on("tap click", $.proxy(function(e) {
            e.preventDefault();
            if (this.locked === true) return;

            if (tour.isActive == true || doTour == true) tour.actionOnTree("close-panel");

            if (tree.targetMode == true) tree.exitTargetMode();
            tree.editedNode.finishEdit();
        }, this));

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
            //Nothing to do for now, but who knows...
            $(panel.$activeSubpanel).find("#move-step2").css("display", "block");
            tree.enterTargetMode();
            break;
    }
}

Panel.prototype.panelPreloadEvents = function() {
    var panel = tree.editedNode.panel;

    switch (panel.$activeSubpanel[0].id) {
        case "skill-history-panel":
            $.ajax({
                url: $("#skill-history-form").attr("action"),
                type: $("#skill-history-form").attr("method"),
                data: $("#skill-history-form").serialize()
            }).done(function(response){
                $("#skill-history-content").empty().append(response);
            });
            break;
    }
}


Panel.prototype.setOrUpdateScrollbar = function() {

    if (typeof this.$activeSubpanel[0].scrollBarLoaded == "undefined") {
        this.$activeSubpanel.wrapInner("<div class='viewport'><div class='overview'></div></div>");
        this.$activeSubpanel.find(".viewport").before("<div class='scrollbar'><div class='track'><div class='thumb'><div class='end'></div></div></div></div>");
    }

    this.$activeSubpanel.find(".viewport").css({
        width: this.$activeSubpanel.width(),
        height: $("#panel").height()
    });

    this.$activeSubpanel.find(".overview").css({ 
        width: this.$activeSubpanel.width()
    });

    if (this.$activeSubpanel[0].scrollBarLoaded == true) this.$activeSubpanel.data("plugin_tinyscrollbar").update();
    else this.$activeSubpanel.tinyscrollbar();

    this.$activeSubpanel[0].scrollBarLoaded = true;
}

Panel.prototype.checkChildrenCaps = function(params) {
    var response = params.response;
    var afterCheckCallback = typeof params.afterCheckCallback != "undefined" ? params.afterCheckCallback : function() { };

    //Check for the NoMore (blocking) threshold 
    if (response.data.parent.childrenCount + 1 == response.data.parent.capNoMore) {
        var warningMessage = jt.panel.capNoMore.replace("%%%IDEAL%%%", response.data.parent.capIdealMax);
        warningMessage = warningMessage.replace("%%%PARENTNAME%%%", response.data.parent.translations[jt.currentLang]);
        warningMessage = warningMessage.replace("%%%NOMORE%%%", response.data.parent.capNoMore);
        this.showWarning(warningMessage + "<p>" + jt.panel.capsDiscuss + "</p>", afterCheckCallback);
    
    //Check for the Alert threshold
    }else if (response.data.parent.childrenCount + 1 >= response.data.parent.capAlert) {
        var warningMessage = jt.panel.capAlert.replace("%%%IDEAL%%%", response.data.parent.capIdealMax);
        warningMessage = warningMessage.replace("%%%PARENTNAME%%%", response.data.parent.translations[jt.currentLang]);
        warningMessage = warningMessage.replace("%%%NOMORE%%%", response.data.parent.capNoMore);
        this.showWarning(warningMessage + "<p>" + jt.panel.capsDiscuss + "</p>", afterCheckCallback);


    //Check for the Ideal Max thresholld
    }else if (response.data.parent.childrenCount + 1 > response.data.parent.capIdealMax) {
        var warningMessage = jt.panel.capIdealMax.replace("%%%IDEAL%%%", response.data.parent.capIdealMax);
        warningMessage = warningMessage.replace("%%%PARENTNAME%%%", response.data.parent.translations[jt.currentLang]);
        this.showWarning(warningMessage + "<p>" + jt.panel.capsDiscuss + "</p>", afterCheckCallback);
    }else {
        afterCheckCallback();
    }
}