<div id="rename-skill-panel" class="panel-content">

    @include("panels/subpanel-top")

    <h3><?= _("RENAME"); ?></h3>
    <form method="POST" action="{{ route('renameSkill') }}" id="rename-skill-form">
        {{ csrf_field() }}
        <input type="hidden" name="skillUuid" id="skillUuid" value="<?= $param['skill']->getUuid(); ?>" />
        <div>
            <input type="text" name="skillName" id="rename-skillName" maxlength="45" value="<?= $param['skill']->getLocalName(); ?>" />
        </div>
        <div>
            <input type="submit" value="<?= _("OK") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>

    <?php if (count($param['previousNames']) > 0): ?>
        <hr />
        <div>
            <h4><?php echo _("PREVIOUS NAMES"); ?></h4>
            <ul>
                <?php foreach($param['previousNames'] as $name): ?>
                <li>"<?php echo $name; ?>"</li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    @include("panels.panel-bottom")
</div>