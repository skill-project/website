<div id="discuss-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("DISCUSS THE SKILL"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("discussSkill"); ?>" id="discuss-skill-form">
        <input type="hidden" name="skillUuid" id="discuss-skillUuid" value="<?= $skill->getUuid(); ?>" />
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
        <?php include("discussion-messages.php"); ?>
    </div>

    <?php include("panel-bottom.php"); ?>
</div>