var User = function(){

    $(document).ready(function(){
        $("body").on("click", ".register-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });
        $("body").on("click", ".login-link", function(e){
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
            $.modal.close();
            $.modal("<div>"+response+"</div>", {overlayClose: true, opacity: 70});
        }
    });
}