<?php if (!Session::has('user')): ?>
    <div class="panel-bottom">
        <?php
//        	$string = _("You are not logged in!<br />%Log in% or %create an account%");
//        	echo \Controller\App::stringWithLinks($string,
//        		array(
//        			'<a id="login-in-btn" class="login-link" href="/login" title="%s">%s</a>',
//        			'<a id="register-btn" class="register-link" href="/register" title="%s">%s</a>'
//        		)
//        	);
			echo "You're not logged in. Please"?> <a class="login-link" href="/login" title="Log in!"> sign in </a> or <a class="register-link" href="/register" tile="Create an account">register.</a>
            <?php
       	?>
    </div>
<?php endif; ?>