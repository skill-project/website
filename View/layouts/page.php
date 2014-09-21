<!DOCTYPE html>
<html lang="fr" class="page">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
	<base href="<?= \Config\Config::BASE_URL ?>" />
	
	<link rel="shortcut icon" href="img/favicon.png">
	
	<?php if (\Config\Config::DEBUG): ?>
	<link href="css/all.css" type="text/css" rel="stylesheet" />
	<?php else: ?>
	<link href="css/all.min.css" type="text/css" rel="stylesheet" />
	<?php endif; ?>

	<?php if (\Config\Config::DEBUG): ?>
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="js/jquery.highlight.js"></script>
	<script type="text/javascript" src="js/jquery.simplemodal.1.4.4.min.js"></script>
	<script type="text/javascript" src="js/kinetic-v5.1.0.min.js"></script>
	<script type="text/javascript" src="js/compatibility.js"></script>
	
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/Node.js"></script>
	<script type="text/javascript" src="js/Edge.js"></script>
	<script type="text/javascript" src="js/Tree.js"></script>
	<script type="text/javascript" src="js/Panel.js"></script>
	<script type="text/javascript" src="js/Camera.js"></script>
	<script type="text/javascript" src="js/Search.js"></script>
	<script type="text/javascript" src="js/User.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<?php else: ?>
	<script type="text/javascript" src="js/all.min.js"></script>
	<?php endif; ?>
	<style>
	@font-face {
	    font-family: 'Avenir-Book';
	    src: url('<?= \Config\Config::BASE_URL ?>fonts/Avenir-Book.ttf');
	}
	</style>
</head>

<body class="page">
	<div id="wrapper">	
		<header id="header">
			<div id="header-container">
				<?php include("../View/inc/header.php"); ?>
			</div>
		</header>
		<div id="main-content">
			<div id="main-content-container">
				<?php include("../View/pages/" . $page); ?>
			</div>
		</div>
	</div>
	<div id="page-footer">
		<div id="footer-container">
			<a id="footer-logo" href="<?= \Controller\Router::url("home"); ?>" title="Skill Project | Home"><img src="img/logo-small.png" /></a>
			<span class="copyright">Copyright &copy;2014</span>
			<nav id="footer-nav">
				<ul>
					<li><a href="<?= \Controller\Router::url("skillwalk"); ?>" title=""><?= _("SkillWalk"); ?></a></li>
		            <li><a href="<?= \Controller\Router::url("project"); ?>" title=""><?= _("The project"); ?></a></li>
		            <?php if (Utils\SecurityHelper::userIsLogged()): ?>
		                <li><a href="<?= \Controller\Router::url("profile", array("username" => Utils\SecurityHelper::getUser()->getUsername())); ?>" title="Profile"><?= _("Profile"); ?></a></li>
		            <?php else: ?>
		                <li><a class="register-link" href="<?= \Controller\Router::url("register"); ?>" title=""><?= _("Profile"); ?></a></li>
		            <?php endif; ?>
		            <li><a href="<?= \Controller\Router::url("apply"); ?>" title=""><?= _("Apply"); ?></a></li>
		            <li><a href="VANILLA" title=""><?= _("Community"); ?></a></li>
		            <li><a href="mailto:team@skill-project.org" title=""><?= _("Contact"); ?></a></li>
		            <li class="last"><a href="<?= \Controller\Router::url("legal"); ?>" title=""><?= _("Legal terms"); ?></a></li>

			</nav>
		</div>
	</div>

</body>
</html>
