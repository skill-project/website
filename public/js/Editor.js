var Editor = function() {

}
Editor.prototype.init = function() {
    loader = new Loader({
      color: "black",
      diameter: 30,
      // css: {
      //   position:"relative",
      //   top: "auto",
      //   left: "auto",
      //   zIndex: "auto",
      //   width: 30,
      //   height: 30,
      //   margin: "0 auto",

      // }
    });
}

Editor.prototype.loadEvents = function() {
    $("#editor-tabs-nav a").on("click tap", function(e){
        e.preventDefault();
        $("#editor-tabs-nav li").removeClass("selected");
        $(this).parent().addClass("selected");

        $(".editor-dashboard-content").hide();
        $.ajax({
            url: $(this).attr("href")
        }).done(function(response){
            $("#tab-content").html(response);
        });

        $( "#"+$(this).data("tab") ).show();
        ga("send", "event", "editor", "loadTab", $(this).data("tab"));
    });

    $("#editor-tabs-nav li:first-child a").trigger("click");

    $(document).on("click tap", "a#show-more", function(e) {
        e.preventDefault();

        $.ajax({
            url: $(this).attr("href"),
            type: "GET",
            data: {
                skip: $(this).data("skip"),
                limit: $(this).data("limit")
            }
        }).done(function(response){
            var newSkip = $(response).find("#show-more").data("skip");
            var newLimit = $(response).find("#show-more").data("limit");

            $("#show-more").data("skip", newSkip);
            $("#show-more").data("limit", newLimit);

            var newRows = $(response).find("tr").splice(1);
            $("#tab-content table").append(newRows);
        });

        ga("send", "event", "editor", "showMore", $(this).attr("href"));
    });
}