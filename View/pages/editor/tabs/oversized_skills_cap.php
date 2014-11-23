<h4><?= sprintf(_("Skills with more sub-skills than their %s setting"), $capName); ?></h4>
<?php if ($cappedSkills[$cap]): ?>
<table id="capped-skills-table">
    <tr>
        <th><?=_("Skill")?></th>
        <th><?=_("Sub-skills")?></th>
        <th><?=_("Ideal max")?></th>
        <th><?=_("Alert threshold")?></th>
        <th><?=_("Blocking threshold")?></th>
    </tr>
    <?php foreach($cappedSkills[$cap] as $uuid => $ms): ?>
    <tr>
        <td>
           <?=$ms["context"]?> > 
           <a href="<?= \Controller\Router::url("goTo", array("slug" => $ms["skill"]->getSlug()), true) ?>"><?= $ms["skill"]->getLocalName(); ?>
            </a>
        </td>
        <td><?= $ms['child_num']; ?></td>
        <td><?= $ms["skill"]->getCapIdealMax(); ?></td>
        <td><?= $ms["skill"]->getCapAlert(); ?></td>
        <td><?= $ms["skill"]->getCapNoMore(); ?></td>
    </tr>
    <?php endforeach; ?>
</table>
<?php else: ?>
<p><?=_("No skills in this section.")?></p>
<?php endif; ?>