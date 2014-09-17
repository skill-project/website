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
    });

    //autocomplete result clicked
    this.searchResultClicked = function(event){
        event.preventDefault();

        //@spada's magic starts here
        var selectedUuid = $(this).data("uuid");
        console.log(selectedUuid + " clicked !");
    
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
        for(i in response.data){
            $link = $("<a>").attr("href", "#").data("uuid", response.data[i].uuid).html(response.data[i].name);
            $item = $("<li>").html($link);
            $list.append($item);
        }
        $("#search-results").html($list);
        $("#search-results").highlight(that.q);
        $("#search-results").slideDown(100);
    }

}