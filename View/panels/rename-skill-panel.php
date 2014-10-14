<div id="rename-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("RENAME"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("renameSkill"); ?>" id="rename-skill-form">
        <input type="hidden" name="skillUuid" id="skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <input type="text" name="skillName" id="rename-skillName" maxlength="45" value="<?= $skill->getLocalName(); ?>" />
        </div>
        <div>
            <input type="submit" value="<?= _("OK") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
        
    <?php if (count($previousNames) > 0): ?>
        <hr />
        <div>
            <h4><?php echo _("PREVIOUS NAMES"); ?></h4>
            <ul>
                <?php foreach($previousNames as $name): ?>
                <li>"<?php echo $name; ?>"</li>
                <?php endforeach; ?>
            </ul>
        </div>
    <?php endif; ?>

    <?php include("panel-bottom.php"); ?>
</div>