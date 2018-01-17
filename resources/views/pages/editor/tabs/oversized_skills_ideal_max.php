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