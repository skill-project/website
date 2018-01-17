@extends('layouts.default')
@section('content')
<section>
    <div class="container">
        <h2><?= _("LET'S TALK"); ?></h2>
        <p>We would love to hear from you. Feel free to use the form below to share what's on your mind, we answer every message quickly.</p>
        <p>If you would rather discuss with the Skill Project community, <a href="https://t.me/skill_project" title="Skill Project Community">head over there !</a></p>
        <p>You can also contact us directly by using our email address: <a href="mailto:helpdesk@skill-project.org" title="<?= _("LET'S TALK"); ?>">helpdesk@skill-project.org</a>.</p>
    </div>
</section>
<hr />
<section>
    <div class="container">
<?php
if($params['contact_message_sent'] == false):
?>
@include('inc/contact_form')
<?php
else:
    echo '<p class="emphasis">' . _("Message sent! Thanks!") . '</p>';
endif;
?>
</div>
</section>
@endsection()