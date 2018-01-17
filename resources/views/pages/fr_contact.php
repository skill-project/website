<section>
    <div class="container">
        <h2><?= _("LET'S TALK"); ?></h2>
        <p>Nous voulons vraiment vous lire ! N'hésitez pas à utiliser le formulaire de contact ci-dessous pour nous partager vos réfléxions: nous répondons aux messages rapidement !</p>
        <p>Si vous préférez discuter directement avec la communauté Skill Project, <a href="<?= \Config\Config::VANILLA_URL ?>" title="Skill Project Community">c'est par là !</a></p>
        <p>Vous pouvez également nous contacter directement en utilisant notre adresse email : <a href="mailto:helpdesk@skill-project.org" title="<?= _("LET'S TALK"); ?>">helpdesk@skill-project.org</a>. Nous parlons français, anglais, italien et latin.</p>
    </div>
</section>
<hr />
<section>
    <div class="container">
        <?php 
            if (!$contact_message_sent){
                include("../View/inc/contact_form.php");
            }
            else {
                echo '<p class="emphasis">' . _("Message sent! Thanks!") . '</p>';
            }
        ?>

    </div>
</section>