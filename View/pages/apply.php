<section>
    <div class="container">
        <img src="img/SKP-page-apply-illus.png" id="apply-illus" class="illus" />
        <h2><?= _("JOIN SKILL PROJECT"); ?></h2>
        <p>Skill Project Editors have access to restricted features. Once you become an Editor, you will be able :</p>
        <ul>
            <li>Add a skill as a parent of an existing skill</li>
            <li>Rename an existing skill</li>
            <li>Translate a skill in a language you know or fix an existing translation</li>
            <li>Move a skill under another one</li>
            <li>Delete an inappropriate skill</li>
            <li>Watch recent changes made by other users</li>
        </ul>
        <p>With those super powers you will be in a position to help maintaining the skill database in a clean and coherent state. The Skill Project Community owes a lot to the Editors without whom it wouldn’t be easy for new members to find the right place to add new skills.</p>

        <p>Every Editor application is carefully reviewed by our team, so please take a few minutes to tell us a little bit about you and your motivations to become an Editor.</p>
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
            <?= ("Please"); ?> <a class="login-link" href="<?= \Controller\Router::url("login"); ?>" title="<?= _("Sign in!"); ?>"><?= _("sign in"); ?></a> <?= _("or"); ?> <a class="register-link" href="<?= \Controller\Router::url("register"); ?>" tile="<?= _("Create an account!"); ?>"><?= _("sign up"); ?></a> <?= _(" before applying !"); ?>
        </p>
        <?php endif; ?>
    </div>
</section>