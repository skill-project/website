<section>
    <div class="container editor">
        <h2><?= _("Editor Dashboard"); ?></h2>
    
        <div id="editor-tabs">
            <nav id="editor-tabs-nav">
                <ul>
                    <li class="selected"><a href="<?= \Controller\Router::url('editorDashboardRecentActivities') ?>" data-tab="recent-activity-content" title="<?= _("Recent activity"); ?>"><?= _("Recent activity"); ?></a></li>
                    <li><a href="<?= \Controller\Router::url('editorDashboardRecentDiscussions') ?>" data-tab="recent-discussions-content" title="<?= _("Recent discussions"); ?>"><?= _("Recent discussions"); ?></a></li>
                    <li><a href="<?= \Controller\Router::url('editorDashboardOversizedSkills') ?>" data-tab="oversized-skills-content" title="<?= _("Oversized skills"); ?>"><?= _("Oversized skills"); ?></a></li>
                </ul>
                <div class="clearfix"></div>
            </nav>
            <div id="tab-content">
                <?php //include("tabs/recent_activities.php"); ?>
            </div>
            <div id="loader"></div>

        </div>

    </div>
</section>