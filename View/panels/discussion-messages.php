
    <?php foreach($messages as $message): ?>
    <div class="message">
        <div class="by">
            <?php if ($message['userActive']): ?>
            <?= _("By "); ?><a href="<?= \Controller\Router::url("profile", array("username" => $message['postedBy'])) ?>"><?= $message['postedBy']; ?></a><br />
            <?php else: ?>
            <?= _("By "); ?><?= $message['postedBy']; ?><br />
            <?php endif; ?>
        </div>
        <div class="date">
            <?= $message['date']; ?>
        </div>
        <div class="message-text">
            <?php if (!empty($message['topic'])){ echo "Topic: " . $message['topic'] . "<br /><br />"; } ?>
            <?php
                $message = $message['message'];
                echo $message; 
            ?>
        </div>
    </div>
    <?php endforeach; ?>
