<div id="discuss-skill-panel" class="panel-content">

    @include("panels/subpanel-top")

    <h3><?= _("DISCUSS THE SKILL"); ?></h3>
    <form method="POST" action="{{ route('discussSkill') }}" id="discuss-skill-form">
        {{ csrf_field() }}
        <input type="hidden" name="skillUuid" id="discuss-skillUuid" value="<?= $param['skill']->getUuid(); ?>" />
        <div>
            <?=_("In english please!");?>
            <?php
            /*
            <select name="topic" id="topic-select">
                <option value=""><?= _("What do you want to talk about?"); ?></option>
                <?php foreach ($topics as $topic): ?>
                <option value="<?= $topic; ?>"><?= $topic; ?></option>
                <?php endforeach; ?>
            </select>
            */
            ?>
        </div>
        <div>
            <textarea name="message" id="discuss-message"></textarea>
        </div>
        <input type="submit" id="trans-form-submit" value="<?= _("SAY IT") ?>" />
    </form>
        
    <hr />
    <div class="discuss-prev-messages">
        @include("panels.discussion-messages")
    </div>

    @include("panels.panel-bottom")

</div>