var User = function(){

    $(document).ready(function(){
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
    loader.show();
    $.ajax({
        url: user.clickedHref,
        success: function(response){
            loader.hide();
            user.showModal(response);
        }
    });
}

User.prototype.ajaxSubmit = function(form){
    loader.show();
    $.ajax({
        url: $(form).attr("action"),
        type: $(form).attr("method"),
        data: $(form).serialize(),
        success: function(response){
            loader.hide();
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

