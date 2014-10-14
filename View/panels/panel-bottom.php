<?php if (!\Utils\SecurityHelper::getUser()): ?>
    <div class="panel-bottom">
        <?php
        	$string = _("You are not logged in!<br />%Log in% or %create an account%");
        	echo \Controller\App::stringWithLinks($string, 
        		array(
        			'<a id="login-in-btn" class="login-link" href="' . \Controller\Router::url("login") . '" title="%s">%s</a>',
        			'<a id="register-btn" class="register-link" href="' . \Controller\Router::url("register") . '" title="%s">%s</a>'
        		)
        	);
       	?>
    </div>
<?php endif; ?>