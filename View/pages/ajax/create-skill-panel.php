<div id="create-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("CREATE SKILL"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("addSkill"); ?>" id="create-skill-form">
        <input type="hidden" name="selectedSkillUuid" id="selectedSkillUuid" value="<?= $skill->getUuid(); ?>" />
        <input type="hidden" name="skillParentUuid" id="skillParentUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <label for="skillName"><?= _("NAME YOUR SKILL") ?></label>
            <input type="text" name="skillName" id="rename-skillName" maxlength="45" />
            <p class="hint"><?= _("Hint: "); ?><?= _('Tell yourself "I can" or "I know how to".'); ?><br /><?= _("45 characters max."); ?></p>
        </div>
        <div>
            <label for="creationType"><?= _("WHERE DOES IT GO"); ?></label>
            <input type="hidden" name="creationType" id="creationType" value="child" />
            <div class="img-btn img-btn-l" id="creationTypeParent" data-value="parent" data-parentuuid="<?= $parent->getUuid(); ?>">
                <img src="img/panel-icon-create-before-noborder.png" alt="<?= _("BEFORE (as a parent)"); ?>" />
                <span class="legend"><?= _("BEFORE (as a parent)"); ?></span>
            </div>
            <div class="img-btn img-btn-r selected" id="creationTypeChild" data-value="child" data-parentuuid="<?= $skill->getUuid(); ?>">
                <img src="img/panel-icon-create-after-noborder.png" alt="<?= _("AFTER (as a child)"); ?>" />
                <span class="legend"><?= _("AFTER (as a child)"); ?></span>
            </div>
        </div>
        <div>
            <input type="submit" value="<?= _("CREATE") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
</div>