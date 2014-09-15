<div id="rename-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("RENAME"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("addSkill"); ?>" id="rename-skill-form">
        <input type="hidden" name="skillUuid" id="skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <input type="text" name="skillName" id="skillName" maxlength="45" />
        </div>
        <div>
            <label for="creationType"><?= _("WHERE DOES IT GO"); ?></label>
            <input type="hidden" name="creationType" id="creationType" value="child" />
        </div>
        <div>
            <input type="submit" value="<?= _("CREATE") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
</div>