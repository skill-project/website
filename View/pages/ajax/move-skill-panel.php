<div id="move-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("MOVE SKILL"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("moveSkill"); ?>" id="move-skill-form">
        <input type="hidden" name="selectedSkillUuid" id="selectedSkillUuid" value="<?= $skill->getUuid(); ?>" />
        <input type="hidden" name="destinationUuid" id="destinationUuid" value="" />
        <div>
            <label for="moveType"><?= _("1.&nbsp;CHOOSE THE WAY YOU MOVE"); ?></label>
            <input type="hidden" name="moveType" id="moveType" value="copy" />
            <div class="img-btn img-btn-l" id="moveTypeMove" data-value="move">
                <img src="img/panel-icon-move-noborder.png" alt="<?= _("MOVE"); ?>" />
                <span class="legend"><?= _("MOVE"); ?></span>
            </div>
            <div class="img-btn img-btn-r selected" id="moveTypeCopy" data-value="copy">
                <img src="img/panel-icon-duplicate-noborder.png" alt="<?= _("COPY"); ?>" />
                <span class="legend"><?= _("COPY"); ?></span>
            </div>
        </div>
        <div>
            <p class="clearfix"><?= _("2.&nbsp;CHOOSE A DESTINATION"); ?><br />
            Select a skill as a new parent, then click the button.</p>
        </div>
        <div>
            <input type="submit" id="move-form-submit" value="<?= _("COPY") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
</div>