<form method="POST" action="<?php echo \Controller\Router::url("renameSkill", array("uuid" => $skill->getUuid())); ?>">
    <input type="hidden" name="skillUuid" value="<?php echo $skill->getUuid(); ?>" />
    <div>
        <label for="skillName"><?php echo _("Rename"); ?></label>
        <input type="text" name="skillName" id="skillName" value="<?php echo $skill->getName(); ?>" />
    </div>
    <input type="submit" value="<?php echo _("OK") ?>" />
</form>

<hr />

<h3><?php echo _("Previous names"); ?></h3>
<ul>
    <?php foreach($previousNames as $name): ?>
    <li><?php echo $name; ?></li>
    <?php endforeach; ?>
</ul>