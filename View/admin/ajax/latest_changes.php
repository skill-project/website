
            <?php foreach($latestChanges as $la): ?>
                <?php
                    $infos = "";
                    $color = "#FFF";
                    switch ($la['action']){
                        case "CREATED":

                            break;
                        case "MODIFIED":
                            $infos = $la['relProps']['fromName'];
                            break;
                        case "DELETED":
                            $color = "#FFA5A5";
                            break;
                        case "MOVED":
                            $color = "#F9E9A7";
                            break;
                        case "RENAMED":
                            $infos = $la['relProps']['from'];
                            break;
                        case "TRANSLATED":
                            $infos = $la['relProps']['name'] . " (" . $la['relProps']['to'] . ")";
                            break;
                        case "AUTO_TRANSLATED":

                            break;
                    }
                ?>
                <tr style="background-color: <?= $color ?>">
                    <td><?= date(_("m-d H:i"), $la['timestamp']); ?></td>
                    <td><?= ucfirst(strtolower(_($la['action']))); ?></td>
                    <td><?= $la['skillName']; ?></td>
                    <td><?= $infos ?></td>
                    <td><?= $la['userProps']['username']; ?></td>                
                </tr>
            <?php endforeach; ?>