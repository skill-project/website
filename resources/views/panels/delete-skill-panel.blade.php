<div id="delete-skill-panel" class="panel-content">

    @include("panels/subpanel-top")

    <h3><?= _("DELETE SKILL"); ?></h3>
    <form method="POST" action="{{ route('deleteSkill') }}" id="delete-skill-form">
        {{ csrf_field() }}
        <input type="hidden" name="skillUuid" id="delete-skillUuid" value="<?= $param['skill']->getUuid(); ?>" />

        <div id="delete-radio-container">
            <p><?= _("YOU ARE ABOUT TO DELETE THIS SKILL."); ?></p>
            <p><?= _("ARE YOU SURE?"); ?></p>
            
            <input type="radio" class="sureToDeleteRadio" name="sureToDelete" id="yes-sureToDelete" value="yes" />
            <input type="radio" class="sureToDeleteRadio" name="sureToDelete" id="no-sureToDelete" value="no" checked="checked" />
            <label id="yes-sureToDelete-label" for="yes-sureToDelete"><?= _("YES"); ?></label>
            <div id="delete-fake-radio" class="no"></div>
            <label id="no-sureToDelete-label" for="no-sureToDelete"><?= _("NO"); ?></label>
        </div>
        <div id="delete-submit-container">
            <input type="submit" id="delete-skill-form-submit" value="<?= _("DELETE") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
    <div>
        <br>
        <br>
        <p><?= _("WARNING:"); ?></p>
        <p><?= _("You cannot delete a skill if it has children."); ?></p>
    </div>

    @include("panels.panel-bottom")
</div>