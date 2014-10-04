
            <?php foreach($latestChanges as $la): ?>
                <?php
                    $infos = "";
                    $color = "#FFF";
                    switch ($la['action']){
                        case "CREATED":
                            break;
                        case "MODIFIED":
                            $infos = "was ". $la['relProps']['fromName'];
                            break;
                        case "DELETED":
                            $color = "#FFA5A5";
                            break;
                        case "MOVED":
                            $color = "#F9E9A7";
                            break;
                        case "TRANSLATED":
                            $infos = $la['relProps']['name'] . " (" . $la['relProps']['to'] . ")";
                            break;
                        case "AUTO_TRANSLATED":
                            $color = "#89BEED";
                            $infos = $la['relProps']['name'] . " (" . $la['relProps']['to'] . ")";
                            break;
                    }
                ?>
                <tr style="background-color: <?= $color ?>">
                    <td><?= date(_("m-d H:i"), $la['timestamp']); ?></td>
                    <td><?= ucfirst(strtolower(_($la['action']))); ?></td>
                    <td><a href="<?= \Controller\Router::url("goTo", array("slug" => $la['skillProps']['slug'])); ?>"><?= $la['skillName']; ?></a></td>
                    <td><?= $infos ?></td>
                    <td><a href="<?= \Controller\Router::url("viewProfile", array("username" => $la['userProps']['username'])); ?>"><?= $la['userProps']['username']; ?></a></td>                
                </tr>
            <?php endforeach; ?>