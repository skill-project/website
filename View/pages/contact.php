<section>
    <div class="container">
        <h2><?= _("LET'S TALK"); ?></h2>
        <p>We would love to hear from you. Feel free to use the form below to share what's on your mind, we answer every message quickly.</p>
        <p>If you would rather discuss with the Skill Project community, <a href="<?= \Config\Config::VANILLA_URL ?>" title="Skill Project Community">head over there !</a></p>
        <p>You can also contact us directly by using our email address: <a href="mailto:helpdesk@skill-project.org" title="<?= _("LET'S TALK"); ?>">helpdesk@skill-project.org</a>. We speak english, french, italian and latin.</p>
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