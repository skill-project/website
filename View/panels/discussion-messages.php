
    <?php foreach($messages as $message): ?>
    <div class="message">
        <div class="by">
            <?= _("By "); ?><a href="<?= \Controller\Router::url("profile", array("username" => $message['postedBy'])) ?>"><?= $message['postedBy']; ?></a><br />
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
