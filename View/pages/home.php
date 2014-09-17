<div id="preload">
	<img src="img/node-normal.png" id="node-normal" />	
	<img src="img/node-glow-nochildren.png" id="node-glow-nochildren" />
	<img src="img/node-glow-children.png" id="node-glow-children" />
	<img src="img/node-edit.png" id="node-edit" />
	<img src="img/glow-children.png" id="glow-children" />
	<img src="img/glow-nochildren.png" id="glow-nochildren" />
	<p id="avenir-book">Skill Project</p>
</div>
<div id="header">
	<div id="header-container">
		<a href="<?php echo \Controller\Router::url("home"); ?>" title="Skill Project | Home"><img src="img/logo-small.png" /></a>
		<nav id="top-user-nav">
			<ul>
				<?php if (Utils\SecurityHelper::userIsLogged()): ?>
					<li><a href="#" title="Profile"><?= Utils\SecurityHelper::getUser()->getUsername(); ?></a></li>
					<li><a href="<?php echo \Controller\Router::url("logout"); ?>" title="Logout">Logout</a></li>
				<?php else: ?>
					<li><a href="<?php echo \Controller\Router::url("login"); ?>" title="Login">Login</a></li>
					<li><a href="<?php echo \Controller\Router::url("register"); ?>" title="Register">Register</a></li>
				<?php endif; ?>
			</ul>
		</nav>
	</div>
</div>
<div id="backdrop"></div>
<div id="kinetic"></div>
<div id="panel"></div>
<div id="footer">
	<div id="footer-container">
		<form id="search-form" method="GET" action="<?php echo \Controller\Router::url("skillSearch"); ?>">
			<div id="autocomplete-container">
				<div id="search-results"></div>
				<input type="search" name="q" id="kw-input" value="" autocomplete="off" />
			</div>
		</form>

	</div>
</div>
