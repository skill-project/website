<div id="modal-wrapper">
    <header id="modal-header">
        <img id="modal-logo" src="<?= $GLOBALS['base_url'] ?>/img/logo-header.png" alt="Skill Project" />
        <h2><?= $title ?></h2>
    </header>
    <div id="modal-content">
        <?php include("../View/modals/" . $page); ?>
    </div>
</div>