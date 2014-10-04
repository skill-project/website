        <ul class="latest-activity">
            <?php foreach($latestChanges as $la): ?>
                <li><?= date(_("Y-m-d H:i"), $la['timestamp']); ?>: <?= ucfirst(strtolower(_($la['action']))); ?> <span class="skill-name">"<?= $la['skillName']; ?>"</span> by <?= $la['by']['username'] . " (" . $la['by']['uuid'] . ")" ?></li>
            <?php endforeach; ?>
        </ul>