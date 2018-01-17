<!DOCTYPE html>
<?php $page = Route::getFacadeRoot()->current()->uri();
if ($page == '/')
    $page = 'home';
else if ($page == 'profile/{username}')
    $page = 'profile';
?>
<html class="page <?= $page?>">
<head>
@include('inc/page_head')
</head>
<body class="page" onload="loadJSTranslations()">
<div id="wrapper">
    <header id="header">
        <div id="header-container">
            @include("inc.header")
        </div>
    </header>
    <div id="main-content">
        @yield('content')
    </div>
</div>
<div id="page-footer">
    <div id="footer-container" class="container">
        <a id="footer-logo" href="<?= "/" ?>" title="Skill Project | Home"><img src="img/skill-project.png" /></a>
        <span class="copyright">Copyright &copy;<?php echo date('Y'); ?></span>
        <nav id="footer-nav">
            <ul>
                <li><a href="/skills" title="The Skills"><?= _("The Skills"); ?></a></li>
                <li><a title="The Project" href="/project"><?= _("The Project"); ?></a></li>
                <?php
                        if(Session::has('user'))
                            {?>
                                <li><a href="/profile/<?=Session::get('user')['username']?>" title="<?= _("Profile"); ?>"><?= _("Profile"); ?></a></li>
                            <?php
                            }
                ?>
                <li><a href="/apply" title="<?= _("Become part of the project!"); ?>"><?= _("Apply"); ?></a></li>
                <li><a href="https://t.me/skill_project" title="The Skill Project Community"><?= _("Community"); ?></a></li>
                <li><a href="/contact" title="<?= _("Contact us"); ?>"><?= _("Contact"); ?></a></li>
                <li class="last"><a href="/legal" title=""><?= _("Terms of Use"); ?></a></li>
            </ul>
        </nav>
    </div>
</div>
{{--<script src="{{asset('js/app.js')}}"></script>--}}
</body>
</html>
