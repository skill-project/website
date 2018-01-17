<a id="main-logo" href="" title="Skill Project | Home"><img src="img/skill-project.png" /></a>

<div id="header-right">
    <nav id="top-user-nav">
        <ul>
            <?php
            $role_arr = array('admin','superadmin');
            if(!Session::has('user')):
            ?>
            <li><a class="white-link register-link" href="/register" title="Register"><?= _("Sign up"); ?></a></li>
            | <li><a class="login-link" href="/login" title="Login"><?= _("Sign in"); ?></a></li>
            <?php
                else:?>
                <li><a class="white-link" href="/profile/<?=Session::get('user')['username']?>" title="Profile"><?= Session::get('user')['username'] ?></a></li>
                | <li>
                    <a href="{{ route('logout') }}"
                       onclick="event.preventDefault();
				document.getElementById('logout-form').submit();">
                        Logout(<?=Session::get('user')['username']?>)
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </li>
            <?php endif; ?>
        </ul>
    </nav>

    <nav id="top-main-nav">
        <ul>
            <li><a class="" href="/skills" title="<?= _("THE SKILLS"); ?>"><?= _("THE SKILLS"); ?></a></li>
            <li><a class="" href="/project" title="<?= _("THE PROJECT"); ?>"><?= _("THE PROJECT"); ?></a></li>
            <li><a class="" href="/apply" title="<?= _("Become an Editor!"); ?>"><?= _("APPLY"); ?></a></li>
            <li class="last"><a href="https://t.me/skill_project" title="<?= _("Skill Project's Community"); ?>"><?= _("Community"); ?></a></li>
        </ul>
    </nav>
</div>