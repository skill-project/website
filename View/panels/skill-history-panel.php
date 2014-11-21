<div id="skill-history-panel" class="panel-content">

    <?php include("subpanel-top.php") ?>

    <h3><?= _("History"); ?></h3>
    <form method="GET" action="<?= \Controller\Router::url("skillHistory"); ?>" id="skill-history-form">
        <input type="hidden" name="skillUuid" id="history-skillUuid" value="<?= $skill->getUuid(); ?>" />
    </form>
    
    <div id="skill-history-content"></div>

    <?php include("panel-bottom.php"); ?>
</div>