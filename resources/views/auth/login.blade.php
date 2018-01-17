 <div id="modal-wrapper">
        <header id="modal-header">
            <img id="modal-logo" src="/img/logo-header.png" alt="Skill Project" />
            <h2>Sign In</h2>
        </header>
        <div id="modal-content">
            <form class = 'form_details'>
            {{csrf_field()}}
                <div>
                    <label for="loginUsername"><?php echo _("USERNAME OR EMAIL") ?></label>
                    <input type="text" name="loginUsername" id="loginUsername" value="" required />
                </div>
                <div>
                    <label for="password"><?php echo _("PASSWORD") ?></label>
                    <input type="password" name="password" id="password" required />
                    <a class="forgot-passowrd-link" href="" title="<?= _("Forgot your password?"); ?>"><?= _("Forgot your password?"); ?></a>
                </div>
                <div class="submit-container">
                    <input type="button" id ='login' value="<?php echo _("SIGN IN") ?>" />
                    <div class="modal-errors">
                        <?php
                        if (!empty($error['global'])){
                            echo $error['global'] . "<br />";
                        }
                        ?>
                        <?php
                        if (!empty($errors)):
                            foreach($errors as $name => $message){
                                echo $message . "<br />";
                            }
                        endif;
                        ?>
                    </div>
                </div>
            </form>
            <p><?= _("You don't have an account yet?"); ?> <a href="/register" class="register-link" title="<?= _("Sign up!"); ?>"><?= _("You can create one!"); ?></a></p>
        </div>
    </div>
<script src = "{{asset('js/login_helper.js')}}"></script>