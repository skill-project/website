
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
                <tr data-skilluuid="<?= $la['skillProps']['uuid'] ?>" data-skillnameen="<?= $la['skillName'] ?>" data-skillnamefr="<?= $la['skillProps']['l_fr'] ?>" class="skill_tr <?= strtolower(_($la['action'])); ?>" style="background-color: <?= $color ?>">
                    <td><?= date(_("m-d H:i"), $la['timestamp']); ?></td>
                    <td><a href="<?= \Controller\Router::url("viewProfile", array("username" => $la['userProps']['username'])); ?>"><?= $la['userProps']['username']; ?></a></td>                
                    <td><?= ucfirst(strtolower(_($la['action']))); ?></td>
                    <td><a href="<?= \Controller\Router::url("goTo", array("slug" => $la['skillProps']['slug'])); ?>"><?= $la['skillName']; ?></a></td>
                    <td><?= $infos ?></td>
                </tr>
            <?php endforeach; ?>