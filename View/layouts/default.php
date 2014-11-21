<?php
	$pageLangName = str_replace(".php", "", $page);
	$pageName = preg_replace("#^[a-z]{2}_#", "", $pageLangName);
	$htmlClasses = ($pageLangName == $pageName) ? $pageName : $pageName . " " . $pageLangName;

	$pageNames = explode("/", $pageName);
	$lastPageName = $pageNames[count($pageNames) - 1];
?>
<!DOCTYPE html>
<html lang="fr" class="page <?= $htmlClasses ?>">
<head>
<?php include("../View/inc/page_head.php"); ?>
</head>	
<body class="page">
	<div id="wrapper">	
		<header id="header">
			<div id="header-container">
				<?php include("../View/inc/header.php"); ?>
			</div>
		</header>
		<div id="main-content">
			<?php include("../View/pages/" . $page); ?>
		</div>
	</div>
	<div id="page-footer">
		<div id="footer-container" class="container">
			<a id="footer-logo" href="<?= \Controller\Router::url("home"); ?>" title="Skill Project | Home"><img src="img/logo-small.png" /></a>
			<span class="copyright">Copyright &copy;2014</span>
			<nav id="footer-nav">
				<ul>
					<li><a href="<?= \Controller\Router::url("graph"); ?>" title=""><?= _("The Skills"); ?></a></li>
		            <li><a href="<?= \Controller\Router::url("project"); ?>" title=""><?= _("The project"); ?></a></li>
		            <?php if (Utils\SecurityHelper::userIsLogged()): ?>
		                <li><a href="<?= \Controller\Router::url("profile", array("username" => Utils\SecurityHelper::getUser()->getUsername())); ?>" title="Profile"><?= _("Profile"); ?></a></li>
		            <?php else: ?>
		                <li><a class="register-link" href="<?= \Controller\Router::url("register"); ?>" title="<?= _("Register!"); ?>"><?= _("Profile"); ?></a></li>
		            <?php endif; ?>
		            <li><a href="<?= \Controller\Router::url("apply"); ?>" title="<?= _("Become part of the project!"); ?>"><?= _("Apply"); ?></a></li>
		            <li><a href="http://vanilla.skill-project.org/" title="The Skill Project Community"><?= _("Community"); ?></a></li>
		            <li><a href="<?= \Controller\Router::url("contact"); ?>" title="<?= _("Contact us"); ?>"><?= _("Contact"); ?></a></li>
		            <li class="last"><a href="<?= \Controller\Router::url("legal"); ?>" title=""><?= _("Terms of Use"); ?></a></li>
				</ul>
			</nav>
		</div>
	</div>

</body>
</html>
