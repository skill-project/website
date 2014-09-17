<div id="discuss-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("DISCUSS THE SKILL"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("discussSkill"); ?>" id="discuss-skill-form">
        <input type="hidden" name="skillUuid" id="discuss-skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            In english please !
            <select name="topic" id="topic-select">
                <option value="">WHAT DO YOU WANT TO TALK ABOUT ?</option>
                <?php foreach ($topics as $topic): ?>
                <option value="<?= $topic; ?>"><?= $topic; ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div>
            <textarea name="message" id="discuss-message"></textarea>
        </div>
        <input type="submit" id="trans-form-submit" value="<?= _("SAY IT") ?>" />
    </form>
        
    <hr />
    
    <div class="discuss-prev-messages">
        <?php foreach($messages as $message): ?>
        <div class="message">
            <?= _("By "); ?><a href="#"><?= $message['postedBy']; ?></a><br />
            <?= $message['date']; ?><br /><br />
            <?php if ($topic){ echo "Topic: " . $message['topic'] . "<br /><br />"; } ?>
            <?php
                $message = $message['message'];
                echo $message; 
            ?>
        </div>
        <?php endforeach; ?>
    </div>

</div>