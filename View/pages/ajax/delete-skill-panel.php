<div id="delete-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("DELETE SKILL"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("deleteSkill"); ?>" id="delete-skill-form">
        <input type="hidden" name="skillUuid" id="delete-skillUuid" value="<?= $skill->getUuid(); ?>" />

        <div>
            <p>
                <?= _("YOU ARE ABOUT TO DELETE THIS SKILL."); ?><br />
                <?= _("ARE YOU SURE ?"); ?>
            </p>
            <label for="yes-sureToDelete"><?= _("YES"); ?></label>
            <input type="radio" class="sureToDeleteRadio" name="sureToDelete" id="yes-sureToDelete" value="yes" />
            <label for="no-sureToDelete"><?= _("NO"); ?></label>
            <input type="radio" class="sureToDeleteRadio" name="sureToDelete" id="no-sureToDelete" value="no" checked="checked" />
        </div>
        <div style="height:70px">
            <input type="submit" id="delete-skill-form-submit" value="<?= _("DELETE") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
    <div>
        <p>
            <?= _("WARNING:"); ?><br />
            <?= _("You cannot delete a skill if it has children."); ?>
        </p>
    </div>
</div>