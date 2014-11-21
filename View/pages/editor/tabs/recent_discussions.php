<div class="editor-dashboard-content" id="recent-discussions-content">
    <table id="recent-discussions-table">
        <tr>
            <th class="date">Date & Time</th>
            <th>Skill</th>
            <th>User</th>
            <th>Message</th>
        </tr>
        <?php foreach($recentMessages as $rm): ?>
        <tr>
            <td><?= $rm['date']; ?></td>
            <td>
                <a href="<?= \Controller\Router::url("goTo", array("slug" => $rm["skillSlug"])) ?>"><?= $rm["skillName"]; ?>
                </a>
            </td>
            <td><?= _($rm['postedBy']); ?></td>
            <td><?= $rm["message"]; ?></td>
        </tr>
        <?php endforeach; ?>
    </table>

    <a href="<?=$route?>" data-skip="<?=$nextSkip?>" data-limit="<?=$nextLimit?>" id="show-more"><?=_("See more messages")?></a>
</div>