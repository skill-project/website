<div id="translate-skill-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("TRANSLATE"); ?></h3>
    <form method="POST" action="<?= \Controller\Router::url("translateSkill"); ?>" id="translate-skill-form">
        <input type="hidden" name="skillUuid" id="translate-skillUuid" value="<?= $skill->getUuid(); ?>" />
        <div>
            <select name="language" id="language-select" required>
                <option value=""><?= _("SELECT YOUR LANGUAGE"); ?></option>
                <?php foreach($languages as $code => $names): ?>
                <option value="<?= $code; ?>"><?= $names['nativeName']; ?></option>
                <?php endforeach; ?>
            </select>
        </div>
        <div>
            <input type="text" name="skillTrans" id="skillTrans" required />
        </div>
        <div>
            <input type="submit" id="trans-form-submit" value="<?= _("OK") ?>" />
            <span class="message-zone"></span>
        </div>
    </form>
        
    <hr />

    <h4><?= _("OTHER TRANSLATIONS"); ?></h4>
    <ul id="other-translations-list">
        <?php include("skill-translations.php"); ?>
    </ul>

    <?php include("panel-bottom.php"); ?>
</div>