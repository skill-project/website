<div class="editor-dashboard-content" id="recent-activity-content">
    <table>
        <tr>
            <th>Date & Time</th>
            <th>Skill</th>
            <th>User</th>
            <th>Action</th>
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
</div>