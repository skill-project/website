<form method="POST" action="<?php echo \Controller\Router::url("renameSkill", array("id" => $skill->getId())); ?>">
    <input type="hidden" name="skillId" value="<?php echo $skill->getId(); ?>" />
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