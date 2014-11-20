<section>
    <div class="container">
        <h2><?= _("Editor Dashboard"); ?></h2>
        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
    </div>
</section>
<hr />
<section>
    <div class="container">
        <h2><?= _("Total skills number"); ?></h2>
        <?= $skillsCount ?> 
    </div>
</section>
<hr />
<section>
    <div class="container">
        <h2><?= _("Oversized Skills"); ?></h2>
        <h3><?= _("Skills with more sub-skills than their 'Ideal' setting"); ?></h3>
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
        No skills with maximum number of children.
        <?php endif; ?>

        
    </div>
</section>