<div id="skill-settings-panel" class="panel-content">

    @include("panels/subpanel-top")

    <h3><?= _("Skill settings"); ?></h3>
    <form method="POST" action="{{ route('skillSettings') }}" id="skill-settings-form">
        {{ csrf_field() }}
        <input type="hidden" name="skillUuid" id="skillUuid" value="<?= $param['skill']->getUuid(); ?>" />
        <div>
            <h4><?= _("Sub-skill caps"); ?></h4>
            <p><?=_("You can set the maximum number of sub-skills this skill can have. Please do not increase these values without first trying to group the sub-skills together.")?></p>
            
            <label for="skill-capIdealMax"><strong><?=mb_strtoupper(_("Ideal max"), "utf-8")?></strong><br><?= _("Ideally, the maximum number of sub-skills this skill should have must not exceed:"); ?></label>
            <input type="text" name="capIdealMax" id="skill-capIdealMax" maxlength="2" value="<?= $param['skill']->getCapIdealMax(); ?>" />
            <p class="hint"><?=_("IDEAL MAX must be lower than ALERT THRESHOLD")?></p>

            <label for="skill-capAlert"><strong><?= mb_strtoupper(_("Alert threshold"), "utf-8"); ?></strong><br><?=_("Member receives a non-blocking warning when adding a new sub-skill if there already are this many siblings:")?></label>
            <input type="text" name="capAlert" id="skill-capAlert" maxlength="2" value="<?= $param['skill']->getCapAlert(); ?>" />
            <p class="hint"><?=_("ALERT THRESHOLD must be between IDEAL MAX and BLOCKING THRESHOLD - 3")?></p>

            <label for="skill-capNoMore"><strong><?= mb_strtoupper(_("Blocking threshold"), "utf-8"); ?></strong><br><?=_("Maximum number of skills that can be created:")?></label>
            <input type="text" name="capNoMore" id="skill-capNoMore" maxlength="2" value="<?= $param['skill']->getCapNoMore(); ?>" />
            <p class="hint"><?=sprintf(_("BLOCKING THRESHOLD must be between ALERT THRESHOLD and %s"), env('CAP_MAX_CHILD'))?></p>
        </div>
        <div>
            <input type="submit" value="<?= mb_strtoupper(_("Save"), "utf-8") ?>" />
            <span class="message-zone"></span>
        </div>
        <div class="clearfix"></div>
    </form>

    @include("panels.panel-bottom")
</div>