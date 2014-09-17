<?php foreach($translations as $trans): ?>
<li>
    <div class="trans-language-name">
        <?= $trans['languageNames']['nativeName'] ?>
        
    </div>
    "<?php echo $trans['name'] ?>"
</li>
<?php endforeach; ?>