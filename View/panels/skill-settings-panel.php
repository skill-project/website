<div id="skill-settings-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("SKILL SETTINGS"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("skillSettings"); ?>" id="skill-settings-form">
        <input type="hidden" name="skillUuid" id="skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <h4><?= _("CHILDREN CAPS"); ?></h4>
            
            <label for="skill-capIdealMax"><strong><?=strtoupper(_("Ideal max"))?></strong><br><?= _("Ideally, the maximum number of sub-skills this skill should have must not exceed:"); ?></label>
            <input type="text" name="capIdealMax" id="skill-capIdealMax" maxlength="2" value="<?= $skill->getCapIdealMax(); ?>" />
            <p class="hint"><?=_("IDEAL MAX must be lower than ALERT THRESHOLD")?></p>

            <label for="skill-capAlert"><strong><?= strtoupper(_("Alert threshold")); ?></strong><br><?=_("Member receives a non-blocking warning when adding a new sub-skill if there already are this many siblings:")?></label>
            <input type="text" name="capAlert" id="skill-capAlert" maxlength="2" value="<?= $skill->getCapAlert(); ?>" />
            <p class="hint"><?=_("ALERT THRESHOLD must be between IDEAL MAX and BLOCKING THRESHOLD - 3")?></p>

            <label for="skill-capNoMore"><strong><?= strtoupper(_("Blocking threshold")); ?></strong><br><?=_("Maximum number of skills that can be created:")?></label>
            <input type="text" name="capNoMore" id="skill-capNoMore" maxlength="2" value="<?= $skill->getCapNoMore(); ?>" />
            <p class="hint"><?=sprintf(_("BLOCKING THRESHOLD must be between higher than ALERT THRESHOLD and lower than %s"), \Config\Config::CAP_MAX_CHILD)?></p>
        </div>
        <div>
            <input type="submit" value="<?= _("OK") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
        
    <?php include("panel-bottom.php"); ?>
</div>