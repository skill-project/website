<form method="POST" action="<?php echo \Controller\Router::url("deleteSkill", array("id" => $skill->getId())); ?>">
    <input type="hidden" name="skillId" value="<?php echo $skill->getId(); ?>" />
    <div>
        <label for="sureToDelete"><?php echo _("Are you sure ?"); ?></label>
        <input type="checkbox" name="sureToDelete" id="sureToDelete" value="1" />
    </div>
    <input type="submit" value="<?php echo _("DELETE") ?>" />
</form>