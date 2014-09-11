<form method="POST" action="<?php echo \Controller\Router::url("addSkill"); ?>">
    <div>
        <label for="skillParentId"><?php echo _("Skill parent"); ?></label>
        <select name="skillParentId" id="skillParentId">
            <?php foreach($skills as $skill): ?>
                <option value="<?php echo $skill['id']; ?>"><?php echo $skill['name']; ?></option>
            <?php endforeach; ?>
        </select>
    </div>
    <div>
        <label for="skillName"><?php echo _("Skill name") ?></label>
        <input type="text" name="skillName" id="skillName" />
    </div>
    <input type="submit" value="<?php echo _("Add !") ?>" />
</form>