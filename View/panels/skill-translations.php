<?php foreach($skill->getTranslations() as $code => $name){
    if ($GLOBALS['lang'] != $code){ ?>
    <li>
        <div class="trans-language-name">
            <?= $languages[$code]['nativeName'] ?>
        </div>
        "<?php echo $name ?>"
    </li>
<?php }} ?>