$(document).ready(function() {

    $("#login").click(function() {
        var user_data = $(".form_details").serializeArray();
        console.log(user_data);
        $.ajax({
            type: "POST",
            url: "/login",
            data: user_data,
            dataType: "JSON",
            success: function (data) {
                url = data.data.redirectTo;
                window.location = url;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                if(jqXHR.status > 100 && jqXHR.status <400)
                {

                    if(confirm("Something is wrong. Make sure your ID and Password match."))
                    {
                        $(window).unload(function() {
                            $.modal.close();
                        });
                        window.location.reload();
                    }
                    else{
                        $(window).unload(function() {
                            $.modal.close();
                        });
                        window.location.reload();
                    }
                }
            }
        });
    });
    $("#register").click(function() {
        var user_data = $(".form_details").serializeArray();
        $.ajax({
            type: "POST",
            url: "/register",
            data: user_data,
            dataType: "JSON",
            success: function (data) {
                url = data.data.redirectTo;
                window.location = url;
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var erro = jqXHR.responseJSON.error;
                if (jqXHR.status === 500)
                {
                    alert("Something went wrong. Please try again.")
                }
                for (var key in erro) {
                    if (erro.hasOwnProperty(key)) {
                        console.log(key);
                        console.log('ha');
                        console.log(erro[key]);
                        if(key === "password_bis" || key === "password")
                        {
                            $("#password-error").html(erro[key]);
                        }
                        if(key === "email")
                        {
                            $("#email-error").html(erro[key]);
                        }
                        if(key === "username")
                        {
                            $("#username-error").html(erro[key]);
                        }
                    }
                }

            }
        });
    });

});