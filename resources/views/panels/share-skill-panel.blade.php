<div id="share-skill-panel" class="panel-content">

    @include("panels/subpanel-top")

    <h3><?= _("SHARE"); ?></h3>

    <label for="skill-permalink-input"><?= _("DIRECT LINK TO THIS SKILL"); ?></label>
    <p>
        <?=sprintf(_('You can copy-paste this link anywhere and it will directly point at "%s".'), $param['skill']->getName());?>
    </p>
    <input id="skill-permalink-input" type="text" value="<?php echo route('goToSlug',['slug'=>$param['skill']->getSlug()]) ?>" />

    @include("panels.panel-bottom")
</div>