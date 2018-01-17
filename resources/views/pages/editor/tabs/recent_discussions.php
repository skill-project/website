<div class="editor-dashboard-content" id="recent-discussions-content">
    <table id="recent-discussions-table">
        <tr>
            <th class="date"><?=_("Date & Time")?></th>
            <th class="skill"><?=_("Skill")?></th>
            <th class="user"><?=_("User")?></th>
            <th class="message"><?=_("Message")?></th>
        </tr>
        <?php foreach($recentMessages as $rm): ?>
        <tr>
            <td><?= $rm['date']; ?></td>
            <td>
                <?= $rm["skillContext"]; ?> > <a href="<?= $rm["skillURL"] ?>"><?= $rm["skillName"]; ?>
                </a>
            </td>
            
            <?php
            if (!empty($rm["userProfileURL"])) {
                echo "<td><a href='" . $rm["userProfileURL"] . "'>" . $rm["postedBy"] . "</a></td>";
            }else {
                echo "<td>" . $rm["postedBy"] . "</td>";
            }
            ?>

            <td class="message"><?= $rm["message"]; ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <a href="<?=$route?>" data-skip="<?=$nextSkip?>" data-limit="<?=$nextLimit?>" id="show-more"><?=_("See more messages")?></a>
</div>