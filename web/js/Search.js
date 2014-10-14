var Search = function(){

    var that = this;
    this.researchPending = false;
    this.jqxhr;

    this.q = ""; //the search terms

    $(document).ready(function (){
        //listen for keyup event
        $("#kw-input").on("keyup", that.autocomplete);
        //on click on a result link, show the node
        $("#autocomplete-container").on("click", "a", that.searchResultClicked);
        //click anywhere closes the search results
        $("body").on("click", that.close);
        //disable form submit
        $("#search-form").on("submit", function(e){
            e.preventDefault();
        });
    });

    //autocomplete result clicked
    this.searchResultClicked = function(event){
        event.preventDefault();
        
        if (tour.isActive == true || doTour == true) tour.actionOnTree("search-click");

        var selectedSlug = $(this).data("slug");

        ga("send", "event", "searchResultClicked", $(this).data("name"));
        
        var url = baseUrl + "api/getNodePathToRoot/" + selectedSlug + "/";

        var contractAnim = tree.rootNode.isNodeOnScreen() ? false : true;

        $.ajax({
            url: url
        }).done(function(response) {
                jsonAutoLoad = response;
                if (tree.selectedNode) tree.selectedNode.deSelect();
                tree.rootNode.contract({
                    noAnim: contractAnim,
                    onComplete: function() {
                        camera.checkCameraPosition(tree.rootNode);
                        tree.autoLoad = true;
                        tree.autoLoadCurrentDepth = 0;
                        tree.readyForNextLevel.fire();
                    }});
            });
    }

    this.close = function(){
        $("#search-results").slideUp(100);
    }

    //do search
    this.autocomplete = function(event){
        event.preventDefault();
        that.q = $('#kw-input').val();
        if (that.q.length < 3 || that.researchPending){
            that.close();
            return false;
        }

        if (typeof that.jqxhr != "undefined"){
            that.jqxhr.abort();
        }

        that.jqxhr = $.ajax({
            url: $("#search-form").attr("action"),
            data: $("#search-form").serialize(),
            method: $("#search-form").attr("method")
        }).done(function(response){
            that.showResult(response);
            that.researchPending = false;
        });
    }

    //show autocomplete results
    this.showResult = function(response){

        if (response.data.length <= 0){ return false; }
        
        var $list = $("<ul>");
        var $item, $link;
        for(uuid in response.data){
            // console.log(response.data);
            gp = (response.data[uuid].gp) ? response.data[uuid].gp + " > " : "";
            $link = $("<a>")
                        .attr("href", "#")
                        .data("name", response.data[uuid].name)
                        .data("uuid", uuid)
                        .data("slug", response.data[uuid].slug)
                        .html('<div class="search-result-name">' + response.data[uuid].name + '</div>' 
                              + gp + response.data[uuid].parent);
            $item = $("<li>").html($link);
            $list.append($item);
        }
        $("#search-results").html($list);
        //highlight each words
        var words = that.q.split(" ");
        for(i in words){
            $(".search-result-name").highlight(words[i]);
        }
        $("#search-results").slideDown(100);
    }

}