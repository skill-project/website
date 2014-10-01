<div id="preload">
	<img src="img/node-sun.png" id="node-sun" />	

	<img src="img/node-normal.png" id="node-normal" />	
	<img src="img/node-glow-nochildren.png" id="node-glow-nochildren" />
	<img src="img/node-glow-children.png" id="node-glow-children" />
	<img src="img/node-edit.png" id="node-edit" />

	<img src="img/node-normal-t.png" id="node-normal-t" />	
	<img src="img/node-glow-nochildren-t.png" id="node-glow-nochildren-t" />
	<img src="img/node-glow-children-t.png" id="node-glow-children-t" />
	<img src="img/node-edit-t.png" id="node-edit-t" />

	<img src="img/node-normal-t-on.png" id="node-normal-t-on" />	
	<img src="img/node-glow-nochildren-t-on.png" id="node-glow-nochildren-t-on" />
	<img src="img/node-glow-children-t-on.png" id="node-glow-children-t-on" />
	<img src="img/node-edit-t-on.png" id="node-edit-t-on" />

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
	<div id="loader"></div>
	<div id="debug">
		
	</div>
	<div id="footer-container" class="container">
        <form id="search-form" method="GET" action="<?= \Controller\Router::url("skillSearch"); ?>">
		<label id="search-tease" for="kw-input">
			<h2><?=_("SEARCH A SKILL"); ?></h2>
			<p><?=_("If you don't find it, just add it !");?></p>
		</label>
			<div id="autocomplete-container">
				<div id="search-results"></div>
				<input type="search" name="q" id="kw-input" value="" autocomplete="off" />
			</div>
		</form>

	</div>
</div>
<ol class='tourbus-legs' id='my-tour-id'>
  <li id="tour-leg1" data-orientation="left">
    <p>The skills ! First-level skills contain every other skill<br>Your walk among the skills starts here.</p>
    <a href='javascript:void(0);' class='tourbus-next'>Next...</a>
    <a href='javascript:void(0);' class='tourbus-stop'>Skip</a>
  </li>

  <li id="tour-leg2">
    <p>You can expand a skill to see<br>by clicking on its name</p>
    <a href='javascript:void(0);' class='tourbus-next'>Next...</a>
    <a href='javascript:void(0);' class='tourbus-stop'>Skip</a>
  </li>

  <li id="tour-leg3">
    <p>If you want to add a new skill as a child<br >or as a parent, you can just click<br>on the "+" button.</p>
    <a href='javascript:void(0);' class='tourbus-next'>Next...</a>
    <a href='javascript:void(0);' class='tourbus-stop'>Skip</a>
  </li>

  <li id="tour-leg4">
    <p>This is where you edit all the skills.<br>
    	You need to create an account in order to perfom these actions.<br>
    	Have fun!
  	</p>
    <a href='javascript:void(0);' class='tourbus-next'>Finish</a>
  </li>
</ol>