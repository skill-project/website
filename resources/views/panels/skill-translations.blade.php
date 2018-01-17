<?php foreach($param['skill']->getTranslations() as $code => $name){
    if (env('lang') != $code){ ?>
    <li>
        <div class="trans-language-name">
            <?= $param['languages'][$code]['nativeName'] ?>
        </div>
        "<?php echo $name ?>"
    </li>
<?php }} ?>