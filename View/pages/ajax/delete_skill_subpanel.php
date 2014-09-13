<form method="POST" action="<?php echo \Controller\Router::url("deleteSkill", array("uuid" => $skill->getUuid())); ?>">
    <input type="hidden" name="skillUuid" value="<?php echo $skill->getUuid(); ?>" />
    <div>
        <label for="sureToDelete"><?php echo _("Are you sure ?"); ?></label>
        <input type="checkbox" name="sureToDelete" id="sureToDelete" value="1" />
    </div>
    <input type="submit" value="<?php echo _("DELETE") ?>" />
</form>