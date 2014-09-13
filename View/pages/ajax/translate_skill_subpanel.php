<form method="POST" action="<?php echo \Controller\Router::url("translateSkill", array("uuid" => $skill->getUuid())); ?>">
    <input type="hidden" name="skillUuid" value="<?php echo $skill->getUuid(); ?>" />
    <div>
        <select name="language" id="language">
            <option value=""><?php echo _("Select your language"); ?></option>
            <?php foreach($languages as $code => $names): ?>
            <option value="<?php echo $code; ?>"><?php echo $names['name']; ?> (<?php echo $names['nativeName']; ?>)</option>
            <?php endforeach; ?>
        </select>
    </div>
    <div>
        <input type="text" name="skillTrans" id="skillTrans" />
    </div>
    <input type="submit" value="<?php echo _("OK") ?>" />
</form>

<hr />

<h3><?php echo _("Other translations"); ?></h3>
<ul>
    <?php foreach($translations as $trans): ?>
    <li><?php echo $trans['name'] . " (" . strtolower($trans['languageNames']['name']) . ")"; ?></li>
    <?php endforeach; ?>
</ul>