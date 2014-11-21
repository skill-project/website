<div class="editor-dashboard-content" id="recent-activity-content">
    <table id="recent-activity-table">
        <tr>
            <th class="date">Date & Time</th>
            <th class="skill">Skill</th>
            <th class="user">User</th>
            <th class="action">Action</th>
        </tr>
        <?php
        foreach ($latestChanges as $change) {
            echo "<tr>";
                echo "<td>" . date("d/m/Y", $change["timestamp"]) . "&nbsp;" . date("H:i:s", $change['timestamp']) . "</td>";
                echo "<td>" . $change["skillFormatted"] . "</td>";
                echo "<td><a href='" . $change["userProfileURL"] . "'>" . $change["userProps"]["username"] . "</a></td>";
                echo "<td>" . $change["actionDetails"] . "</td>";
            echo "</tr>";
        }
        ?>
    </table>

    <a href="<?=$route?>" data-skip="<?=$nextSkip?>" data-limit="<?=$nextLimit?>" id="show-more"><?=_("See more activities")?></a>
</div>