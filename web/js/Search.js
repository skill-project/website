var Search = function(){

    var that = this;

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

        
        //@spada's magic starts here
        var selectedSlug = $(this).data("slug");
        console.log(selectedSlug + " clicked !");

        tree.selectedNode.deSelect();
        tree.rootNode.contract();

        
    }

    this.close = function(){
        $("#search-results").slideUp(100);
    }

    //do search
    this.autocomplete = function(event){
        event.preventDefault();
        that.q = $('#kw-input').val();
        if (that.q.length < 3){
            that.close();
            return false;
        }
        $.ajax({
            url: $("#search-form").attr("action"),
            data: $("#search-form").serialize(),
            method: $("#search-form").attr("method"),
            success: that.showResult
        });
    }

    //show autocomplete results
    this.showResult = function(response){
        var $list = $("<ul>");
        var $item, $link;
        for(uuid in response.data){
            console.log(response.data[uuid]);
            gp = (response.data[uuid].gp) ? response.data[uuid].gp + " > " : "";
            $link = $("<a>")
                        .attr("href", "#")
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