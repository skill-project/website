<div id="skill-settings-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("SKILL SETTINGS"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("skillSettings"); ?>" id="skill-settings-form">
        <input type="hidden" name="skillUuid" id="skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <h4><?= _("CHILDREN CAPS"); ?></h4>
            <label for="skill-capIdealMax"><?= _("Ideal Max Cap"); ?></label>
            <input type="text" name="capIdealMax" id="skill-capIdealMax" maxlength="2" value="<?= $skill->getCapIdealMax(); ?>" />
            <label for="skill-capAlert"><?= _("Alert Cap"); ?></label>
            <input type="text" name="capAlert" id="skill-capAlert" maxlength="2" value="<?= $skill->getCapAlert(); ?>" />
            <label for="skill-capNoMore"><?= _("No More Cap"); ?></label>
            <input type="text" name="capNoMore" id="skill-capNoMore" maxlength="2" value="<?= $skill->getCapNoMore(); ?>" />
        </div>
        <div>
            <input type="submit" value="<?= _("OK") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
        
    <?php include("panel-bottom.php"); ?>
</div>