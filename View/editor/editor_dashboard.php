<section>
    <div class="container">
        <h2><?= _("Editor Dashboard"); ?></h2>
    </div>
</section>
<hr />
<section>
    <div class="container">
        <h2>Maxed skills</h2>
        <?php if ($maxedSkills): ?>
        <table id="maxeds-skills-table">
            <tr>
                <th>Skill</th>
            </tr>
            <?php foreach($maxedSkills as $ms): ?>
            <tr>
                <td><a href="<?= \Controller\Router::url("goTo", array("slug" => $ms->getSlug())) ?>"><?= $ms->getName(); ?></a></td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php else: ?>
        No skills with maximum number of children.
        <?php endif; ?>
    </div>
</section>