<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
</head>

<body>
	<div id="wrapper">	
		<nav>
			<ul>
				<li><a href="<?php echo \Controller\Router::url("home"); ?>" title="Home">Home</a></li>
				<?php if (Utils\SecurityHelper::userIsLogged()): ?>
					<li><a href="<?php echo \Controller\Router::url("addSkillSubPanel"); ?>" title="Add a new skill (AJAX)">Add skill (should be called by AJAX)</a></li>
					<li><a href="<?php echo \Controller\Router::url("logout"); ?>" title="Logout">Logout</a></li>
				<?php else: ?>
					<li><a href="<?php echo \Controller\Router::url("login"); ?>" title="Login">Login</a></li>
					<li><a href="<?php echo \Controller\Router::url("register"); ?>" title="Register">Register</a></li>
				<?php endif; ?>
			</ul>
		</nav>
		<?php include("../View/pages/" . $page); ?>
	</div>

	<?php include("../View/inc/debug_bar.php"); ?>
</body>
</html>
