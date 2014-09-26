var User = function(){

    $(document).ready(function(){
        console.log("yo");
        $("body").on("click", ".register-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });
        $("body").on("click", ".change-password-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });
        $("body").on("click", ".login-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });
        $("body").on("click", ".forgot-passowrd-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
        });

        $("body").on("submit", "#modal-wrapper form", function(e){
            e.preventDefault();
            user.ajaxSubmit(this);
        });
    });

}

User.prototype.clickedHref = "";

User.prototype.showModal = function(content){
    $.modal.close();
    $.modal("<div>"+content+"</div>", {overlayClose: true, opacity: 70});
}

User.prototype.showForm = function(){
    $.ajax({
        url: user.clickedHref,
        success: function(response){
            user.showModal(response);
        }
    });
}

User.prototype.ajaxSubmit = function(form){
    $.ajax({
        url: $(form).attr("action"),
        type: $(form).attr("method"),
        data: $(form).serialize(),
        success: function(response){
            if (response.status == "ok"){
                if (response.data.redirectTo){
                    window.location.href = response.data.redirectTo;
                }
            }
            else {
                user.showModal(response);
            }
        }
    });
}

