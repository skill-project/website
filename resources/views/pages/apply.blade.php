@extends('layouts.default')
@section('content')
<section>
    <div class="container">
        <img src="img/SKP-page-apply-illus.png" id="apply-illus" class="illus" />
        <h2><?= _("JOIN SKILL PROJECT"); ?></h2>
        <p>Skill Project Editors can access restricted features. You can amend skills, not just those you created in the last hour. You can:</p>
        <ul>
            <li>Add a skill as a parent of an existing skill</li>
            <li>Rename an existing skill</li>
            <li>Translate a skill into a language you know or fix an existing translation</li>
            <li>Move a skill under another one</li>
            <li>Delete an inappropriate skill</li>
            <li>Watch recent changes made by other users</li>
        </ul>
        <p>With these super powers, you can help keep the skills database clean and tidy. The Skill Project Community owes a lot to the Editors, who make sure new members can always find the right place to add new skills.</p>

        <p>Every Editor application is carefully reviewed by our team, so please take a few minutes to tell us a little bit about you and your motivations to become an Editor.</p>
    </div>
</section>
<hr />
<section>
    <div class="container">
        <?php if (Session::has('user')): ?>
            <?php
            if (Session::get('user')['role'] != "admin"){
                switch (\App\Helpers\SecurityHelper::getApplicationStatus()){
                    case 0:?>
                        @include('inc.apply_form');
                        <?php
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
            Please <a class="login-link" href="/login" title="Log in!"> sign in </a> or <a class="register-link" href="/register" tile="Create an account">sign up</a> before applying!
        </p>
        <?php endif; ?>
    </div>
</section>
@endsection