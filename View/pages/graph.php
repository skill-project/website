<div id="preload">
	<img src="img/node/node-sun.png" id="node-sun" />	

	<img src="img/node/node-normal.png" id="node-normal" />	
	<img src="img/node/node-normal-children.png" id="node-normal-children" />	
	<img src="img/node/node-glow-nochildren.png" id="node-glow-nochildren" />
	<img src="img/node/node-glow-children.png" id="node-glow-children" />
	<img src="img/node/node-edit.png" id="node-edit" />
	<img src="img/node/node-edit-children.png" id="node-edit-children" />

	<img src="img/node/node-normal-t.png" id="node-normal-t" />	
	<img src="img/node/node-normal-children-t.png" id="node-normal-children-t" />	
	<img src="img/node/node-glow-nochildren-t.png" id="node-glow-nochildren-t" />
	<img src="img/node/node-glow-children-t.png" id="node-glow-children-t" />
	<img src="img/node/node-edit-t.png" id="node-edit-t" />

	<?php
	// <img src="img/node-normal-t-on.png" id="node-normal-t-on" />	
	// <img src="img/node-glow-nochildren-t-on.png" id="node-glow-nochildren-t-on" />
	// <img src="img/node-glow-children-t-on.png" id="node-glow-children-t-on" />
	// <img src="img/node-edit-t-on.png" id="node-edit-t-on" />
	?>

	<img src="img/node/glow-children.png" id="glow-children" />
	<img src="img/node/glow-nochildren.png" id="glow-nochildren" />
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
	<div id="loader"></div>
	<div id="debug">
		
	</div>
	<div id="footer-container" class="container">
        <form id="search-form" method="GET" action="<?= \Controller\Router::url("skillSearch"); ?>">
		<div id="autocomplete-container">
			<div id="search-results"></div>
			<input type="search" name="q" id="kw-input" value="" autocomplete="off" placeholder="<?=sprintf(_("SEARCH A SKILL (%s)"), $skillCount); ?>" />
		</div>
		</form>

	</div>
</div>
<ol class='tourbus-legs' id='my-tour-id'>
  <li id="tour-leg1" data-orientation="left" data-arrow="false">
    <p><?=_("Welcome to the Skill Tree!<br>These are the first-level skills. They contain every other skills.<br>Click “Next” to continue the tour or “Skip” to start exploring the skills now.")?></p>
   	<a href='javascript:void(0);' class='tourbus-next'><?=_("Next...")?></a>
    <a href='javascript:void(0);' class='tourbus-stop'><?=_("Skip")?></a>
  </li>

  <li id="tour-leg2">
    <p><?=_("Click on a skill name to see its sub-skills.")?></p>
    <a href='javascript:void(0);' class='tourbus-next'><?=_("Next...")?></a>
    <a href='javascript:void(0);' class='tourbus-stop'><?=_("Skip")?></a>
  </li>

  <li id="tour-leg3">
    <p><?=_("Click on the “pencil” to open the “Edit Skill” panel.")?></p>
    <a href='javascript:void(0);' class='tourbus-next'><?=_("Next...")?></a>
    <a href='javascript:void(0);' class='tourbus-stop'><?=_("Skip")?></a>
  </li>

  <li id="tour-leg4">
    <p><?=_("In the “Edit Skill” panel, you can perform actions on skills,<br />depending on your user status (regular user or Editor).<br />You have Editor rights on a skill for one day after you create it.")?>
  	</p>
    <a href='javascript:void(0);' class='tourbus-next'><?=_("Finish")?></a>
  </li>
</ol>