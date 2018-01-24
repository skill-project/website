var Site = function() {
	this.initEvents();
}

Site.prototype.initEvents = function() {
	$("#lang-nav").on("click", function(e) {
		$(this).find("ul").toggle("slide", {direction: "up"}) 
		ga("send", "event", "uiAction", "languageToggle");
	});


    $(window).load(function  () {

        $('#skillCount').waypoint({
            handler: function(direction) {
                if ($("#skillCount").hasClass("animationDone")) return;
                var counter = new countUp("skillCountNum", 0, skillCount, 0, 4, {
                  useEasing : true, 
                  useGrouping : true, 
                  separator : '', 
                  decimal : '',
                  prefix : '',
                  suffix : '' 
                });

                counter.start();
                $("#skillCount").addClass("animationDone");
            },
            offset: '100%'
        });
    });

    // var connection = new autobahn.Connection({
    //     url: wsUrl,
    //     realm: "skp",
    //     // authmethods: ["wampcra"],
    //     // authid: "frontend",
    //     // onchallenge: function(session, method, extra) { return autobahn.auth_cra.sign("anon", extra.challenge); }
    // });
    //
    // connection.onopen = function (session, details) {
    //     session.subscribe('ws.skillCount', function(data) {
    //     	var skillCount = data[0];
    //     	$("#kw-input").attr("placeholder", jt.footer.searchPlaceholder.replace("%s", skillCount));
    //     });
    // };

    // connection.open();
}