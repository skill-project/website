<section>
    <div class="container editor">
        <h2><?= _("Editor Dashboard"); ?></h2>
    
        <div id="editor-tabs">
            <nav id="editor-tabs-nav">
                <ul>
                    <li class="selected"><a href="#" data-tab="recent-activity-content" title="<?= _("Recent activity"); ?>"><?= _("Recent activity"); ?></a></li>
                    <li><a href="#" data-tab="recent-discussions-content" title="<?= _("Recent discussions"); ?>"><?= _("Recent discussions"); ?></a></li>
                    <?php /* <li><a href="#" data-tab="notifications-content" title="<?= _("Notifications"); ?>"><?= _("Notifications"); ?></a></li> */ ?>
                    <li><a href="#" data-tab="oversized-skills-content" title="<?= _("Oversized skills"); ?>"><?= _("Oversized skills"); ?></a></li>
                </ul>
                <div class="clearfix"></div>
            </nav>
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


            <div class="editor-dashboard-content" id="recent-discussions-content">
                <table id="recent-discussions-table">
                    <tr>
                        <th>Date & Time</th>
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
            </div>


            <?php /*
            <div class="editor-dashboard-content" id="notifications-content">
                
            </div>
            */
            ?>



            <div class="editor-dashboard-content" id="oversized-skills-content">
                <h4><?= _("Skills with more sub-skills than their 'Ideal' setting"); ?></h4>
                <?php if ($cappedSkills['idealMax']): ?>
                <table id="capped-skills-table">
                    <tr>
                        <th>Skill</th>
                        <th>Sub-skills</th>
                        <th>Ideal</th>
                        <th>Alert</th>
                        <th>Max</th>
                    </tr>
                    <?php foreach($cappedSkills['idealMax'] as $uuid => $ms): ?>
                    <tr>
                        <td>
                            <?php if (!empty($ms["gp"])): ?>
                                <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["gp"]->getSlug())) ?>"><?= $ms["gp"]->getName(); ?>
                                </a>&nbsp;>&nbsp;
                            <?php endif; ?>
                            <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["parent"]->getSlug())) ?>"><?= $ms["parent"]->getName(); ?>
                            </a>&nbsp;>&nbsp;
                            <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["skill"]->getSlug())) ?>"><?= $ms["skill"]->getName(); ?>
                            </a>
                        </td>
                        <td><?= _($ms['child_num']); ?></td>
                        <td><?= $ms["skill"]->getCapIdealMax(); ?></td>
                        <td><?= $ms["skill"]->getCapAlert(); ?></td>
                        <td><?= $ms["skill"]->getCapNoMore(); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </table>
                <?php else: ?>
                <p>No skills with maximum number of children.</p>
                <?php endif; ?>


                <h4><?= _("Skills with more sub-skills than their 'Alert' setting"); ?></h4>
                <?php if ($cappedSkills['alert']): ?>
                <table id="capped-skills-table">
                    <tr>
                        <th>Skill</th>
                        <th>Sub-skills</th>
                        <th>Ideal</th>
                        <th>Alert</th>
                        <th>Max</th>
                    </tr>
                    <?php foreach($cappedSkills['alert'] as $uuid => $ms): ?>
                    <tr>
                        <td>
                            <?php if (!empty($ms["gp"])): ?>
                                <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["gp"]->getSlug())) ?>"><?= $ms["gp"]->getName(); ?>
                                </a>&nbsp;>&nbsp;
                            <?php endif; ?>
                            <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["parent"]->getSlug())) ?>"><?= $ms["parent"]->getName(); ?>
                            </a>&nbsp;>&nbsp;
                            <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["skill"]->getSlug())) ?>"><?= $ms["skill"]->getName(); ?>
                            </a>
                        </td>
                        <td><?= _($ms['child_num']); ?></td>
                        <td><?= $ms["skill"]->getCapIdealMax(); ?></td>
                        <td><?= $ms["skill"]->getCapAlert(); ?></td>
                        <td><?= $ms["skill"]->getCapNoMore(); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </table>
                <?php else: ?>
                <p>No skills with maximum number of children.</p>
                <?php endif; ?>


                <h4><?= _("Skills with more sub-skills than their 'No more' setting"); ?></h4>
                <?php if ($cappedSkills['noMore']): ?>
                <table id="capped-skills-table">
                    <tr>
                        <th>Skill</th>
                        <th>Sub-skills</th>
                        <th>Ideal</th>
                        <th>Alert</th>
                        <th>Max</th>
                    </tr>
                    <?php foreach($cappedSkills['noMore'] as $uuid => $ms): ?>
                    <tr>
                        <td>
                            <?php if (!empty($ms["gp"])): ?>
                                <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["gp"]->getSlug())) ?>"><?= $ms["gp"]->getName(); ?>
                                </a>&nbsp;>&nbsp;
                            <?php endif; ?>
                            <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["parent"]->getSlug())) ?>"><?= $ms["parent"]->getName(); ?>
                            </a>&nbsp;>&nbsp;
                            <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["skill"]->getSlug())) ?>"><?= $ms["skill"]->getName(); ?>
                            </a>
                        </td>
                        <td><?= _($ms['child_num']); ?></td>
                        <td><?= $ms["skill"]->getCapIdealMax(); ?></td>
                        <td><?= $ms["skill"]->getCapAlert(); ?></td>
                        <td><?= $ms["skill"]->getCapNoMore(); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </table>
                <?php else: ?>
                <p>No skills with maximum number of children.</p>
                <?php endif; ?>
            </div>

        </div>


    </div>
</section>

<script>
    $("#editor-tabs-nav a").on("click tap", function(e){
        e.preventDefault();
        $(".editor-dashboard-content").hide();
        $( "#"+$(this).data("tab") ).show();
        $("#editor-tabs-nav li").removeClass("selected");
        $(this).parent().addClass("selected");
    });

    $(".editor-dashboard-content").not(":first").hide();
</script>