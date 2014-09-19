var User = function(){

    $(document).ready(function(){
        $("#register-link").on("click", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });
        $("#login-link").on("click", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });
    });

}

User.prototype.clickedHref = "";

User.prototype.showForm = function(){
    $.ajax({
        url: user.clickedHref,
        success: function(response){
            $.modal("<div>"+response+"</div>", {overlayClose: true, opacity: 70});
        }
    });
}