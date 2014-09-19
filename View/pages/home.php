<div id="preload">
	<img src="img/node-normal.png" id="node-normal" />	
	<img src="img/node-glow-nochildren.png" id="node-glow-nochildren" />
	<img src="img/node-glow-children.png" id="node-glow-children" />
	<img src="img/node-edit.png" id="node-edit" />
	<img src="img/glow-children.png" id="glow-children" />
	<img src="img/glow-nochildren.png" id="glow-nochildren" />
	<p id="avenir-book">Skill Project</p>
</div>
<header id="header">
	<div id="header-container">
		<?php include("../View/inc/header.php"); ?>
	</div>
</header>
<div id="backdrop"></div>
<div id="kinetic"></div>
<div id="panel"></div>
<div id="footer">
	<div id="footer-container">
		<div id="search-tease">
			<h2>SEARCH A SKILL</h2>
			<p>If you don't find it, just add it !</p>
		</div>
		<form id="search-form" method="GET" action="<?= \Controller\Router::url("skillSearch"); ?>">
			<div id="autocomplete-container">
				<div id="search-results"></div>
				<input type="search" name="q" id="kw-input" value="" autocomplete="off" />
			</div>
		</form>

	</div>
</div>
