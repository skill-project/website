<section>
    <div class="container">
        <img src="img/SKP-page-apply-illus.png" id="apply-illus" class="illus" />
        <h2>Devenir Éditeur</h2>
        <p>Les Éditeurs sur Skill Project ont accès à toutes les fonctionnalités. Une fois que vous êtes Éditeur, vous pourrez effectuer toutes ces opérations sur l’ensemble des compétences et pas uniquement sur celles que vous avez créées depuis moins d'un jour :</p>
        <ul>
            <li>Ajouter une compétence en tant que parent d’une compétence existante</li>
            <li>Renommer une compétence existante</li>
            <li>Traduire une compétence dans une langue que vous connaissez ou corriger une traduction</li>
            <li>Déplacer une compétence à l’intérieur d’une autre</li>
            <li>Supprimer une compétence non conforme</li>
            <li>Surveiller les modifications récentes apportées par d’autres utilisateurs</li>
        </ul>
        <p>Grâce à ces super pouvoirs, vous aurez la possibilité d’aider à maintenir la base de données dans un état propre et cohérent. La communauté de Skill Project est très reconnaissante envers les Éditeurs, car sans eux, il ne serait pas aussi simple pour de nouveaux utilisateurs de repérer l’endroit approprié pour ajouter de nouvelles compétences.</p>

        <p>Chaque candidature pour devenir Éditeur est étudiée attentivement par notre équipe. Par conséquent, merci de prendre quelques minutes pour nous parler un peu de vous et de vos motivations pour devenir Éditeur.</p>
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
                            echo '<p class="emphasis">' . _("Your application has been accepted!") . '</p>';
                            break;
                        case 2:
                            echo '<p class="emphasis">' . _("Your application is beeing reviewed!") . '</p>';
                    }         
                }   
                else {
                    echo '<p class="emphasis">' . _("Your are an Editor!") . '</p>';
                }
            ?>

        <?php else: ?>
        <p class="emphasis">
            Merci de <a class="login-link" href="<?= \Controller\Router::url("login"); ?>" title="Connectez-vous !">vous connecter</a> ou de <a class="register-link" href="<?= \Controller\Router::url("register"); ?>" tile="Enregistez-vous !">créer un compte</a> avant de nous envoyer votre candidature.
        </p>
        <?php endif; ?>
    </div>
</section>