<div id="translate-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("TRANSLATE"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("translateSkill"); ?>" id="translate-skill-form">
        <input type="hidden" name="skillUuid" id="translate-skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <select name="language" id="language-select">
                <option value=""><?= _("SELECT YOUR LANGUAGE"); ?></option>
                <?php foreach($languages as $code => $names): ?>
                <option value="<?= $code; ?>"><?= $names['nativeName']; ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div>
            <input type="text" name="skillTrans" id="skillTrans" />
        </div>
        <input type="submit" id="trans-form-submit" value="<?= _("OK") ?>" />
    </form>
        
    <hr />

    <p><?= _("OTHER TRANSLATIONS"); ?></p>
    <ul id="other-translations-list">
        <?php foreach($translations as $trans): ?>
        <li>
            <div class="trans-language-name">
                <?= $trans['languageNames']['nativeName'] ?>
                
            </div>
            "<?php echo $trans['name'] ?>"
        </li>
        <?php endforeach; ?>
    </ul>
</div>