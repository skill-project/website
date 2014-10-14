var User = function(){

    $(document).ready(function(){
        $("body").on("click", ".register-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "registerLink");
        });
        $("body").on("click", ".change-password-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "changePasswordLink");
        });
        $("body").on("click", ".login-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "loginLink");
        });
        $("body").on("click", ".forgot-passowrd-link", function(e){
            e.preventDefault();
            user.clickedHref = $(this).attr("href");
            user.showForm();
            ga("send", "event", "uiAction", "forgotPasswordLink");
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
    if (typeof loader != "undefined") {loader.show();}
    $.ajax({
        url: user.clickedHref,
        success: function(response){
            if (typeof loader != "undefined") {loader.hide();}
            user.showModal(response);
        }
    });
}

User.prototype.ajaxSubmit = function(form){
    if (typeof loader != "undefined") {loader.show();}
    $.ajax({
        url: $(form).attr("action"),
        type: $(form).attr("method"),
        data: $(form).serialize(),
        success: function(response){
            if (typeof loader != "undefined") {loader.hide();}
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

