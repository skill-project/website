<section>
    <div class="container">
        <img src="img/SKP-page-apply-illus.png" id="apply-illus" class="illus" />
        <h2><?= _("APPLY"); ?></h2>
        <h4><?= _("JOIN SKILL PROJECT"); ?></h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <h4><?= _("YOUR MISSION"); ?></h4>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis rturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massparturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    </div>
</section>
<hr />
<section>
    <div class="container">
        <?php if (!empty($loggedUser)): ?>

            <?php 
                if ($loggedUser->getRole() != "admin"){
                    switch ($loggedUser->getApplicationStatus()){
                        case 0:
                            include("../View/inc/apply_form.php");
                            break;
                        case 1:
                            break;
                        case 2:
                            echo '<p class="emphasis">' . _("Your application is beeing reviewed !") . '</p>';
                    }         
                }   
            ?>

        <?php else: ?>
        <p class="emphasis">
            <?= ("Please"); ?> <a class="login-link" href="<?= \Controller\Router::url("login"); ?>" title="<?= _("Sign in !"); ?>"><?= _("sign in"); ?></a> <?= _("or"); ?> <a class="register-link" href="<?= \Controller\Router::url("register"); ?>" tile="<?= _("Create an account !"); ?>"><?= _("sign up"); ?></a> <?= _(" before applying !"); ?>
        </p>
        <?php endif; ?>
    </div>
</section>