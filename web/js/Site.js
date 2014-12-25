var Site = function() {
	this.initEvents();
}

Site.prototype.initEvents = function() {
	$("#lang-nav").on("click", function(e) {
		$(this).find("ul").toggle("slide", {direction: "up"}) 
		ga("send", "event", "uiAction", "languageToggle");
	});



	var connection = new autobahn.Connection({
        url: "ws://127.0.0.1:8080/ws",
        realm: "skp",
        // authmethods: ["wampcra"],
        // authid: "frontend",
        // onchallenge: function(session, method, extra) { return autobahn.auth_cra.sign("anon", extra.challenge); }
    });

    connection.onopen = function (session, details) {

        session.subscribe('ws.skillCount', function(data) {
        	var skillCount = data[0];
        	$("#kw-input").attr("placeholder", jt.footer.searchPlaceholder.replace("%s", skillCount));
        });
    };

    connection.open();
}