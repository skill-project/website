<div class="editor-dashboard-content" id="oversized-skills-content">
    <?php 
        $cap = "noMore";
        $capName = _("Blocking threshold");
        include("oversized_skills_cap.php");
        $cap = "alert";
        $capName = _("Alert threshold");
        include("oversized_skills_cap.php");
        $cap = "idealMax";
        $capName = _("Ideal max");
        include("oversized_skills_cap.php");
    ?>
</div>