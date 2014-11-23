<div class="editor-dashboard-content" id="recent-activity-content">
    <table id="recent-activity-table">
        <tr>
            <th class="date"><?=_("Date & Time")?></th>
            <th class="skill"><?=_("Skill")?></th>
            <th class="user"><?=_("User")?></th>
            <th class="action"><?=_("Action")?></th>
        </tr>
        <?php
        foreach ($latestChanges as $change) {
            echo "<tr>";
                echo "<td>" . date("d/m/Y", $change["timestamp"]) . "&nbsp;" . date("H:i:s", $change['timestamp']) . "</td>";
                echo "<td>" . $change["skillFormatted"] . "</td>";

                if (!empty($change["userProfileURL"])) {
                    echo "<td><a href='" . $change["userProfileURL"] . "'>" . $change["userProps"]["username"] . "</a></td>";
                }else {
                    echo "<td>" . $change["userProps"]["username"] . "</td>";
                }

                echo "<td>" . $change["actionDetails"] . "</td>";
            echo "</tr>";
        }
        ?>
    </table>

    <a href="<?=$route?>" data-skip="<?=$nextSkip?>" data-limit="<?=$nextLimit?>" id="show-more"><?=_("See more activities")?></a>
</div>