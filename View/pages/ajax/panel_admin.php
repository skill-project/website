<div id="panels-container">
    <div id="first-panel">
        <div class="panel-content">
            <div class="panel-top panel-btn">
                <h3><?= _("EDIT SKILL") ?></h3>
                <a href="#" title="<?= _("Close this panel"); ?>" id="close-panel-btn"><img src="../img/panel-icon-close.png" alt="X" /></a>
                <p class="skillName">"<?= $skill->getName(); ?>"</p>
            </div>

            <a data-panel="create-skill-panel" class="panel-btn" href="#" title="<?= _("CREATE SKILL"); ?>"><?= _("CREATE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="../img/panel-icon-arrow-right.png" alt=">" /></span></a>

            <a data-panel="rename-skill-panel" class="panel-btn" href="#" title="<?= _("RENAME"); ?>"><?= _("RENAME"); ?><span class="arrow-btn arrow-btn-r"><img src="../img/panel-icon-arrow-right.png" alt=">" /></span></a>

            <a data-panel="translate-skill-panel" class="panel-btn" href="#" title="<?= _("TRANSLATE"); ?>"><?= _("TRANSLATE"); ?><span class="arrow-btn arrow-btn-r"><img src="../img/panel-icon-arrow-right.png" alt=">" /></span></a>

            <a data-panel="move-skill-panel" class="panel-btn" href="#" title="<?= _("MOVE / DUPLICATE"); ?>"><?= _("MOVE / DUPLICATE"); ?><span class="arrow-btn arrow-btn-r"><img src="../img/panel-icon-arrow-right.png" alt=">" /></span></a>

            <a data-panel="delete-skill-panel" class="panel-btn" href="#" title="<?= _("DELETE"); ?>"><?= _("DELETE"); ?><span class="arrow-btn arrow-btn-r"><img src="../img/panel-icon-arrow-right.png" alt=">" /></span></a>

            <a data-panel="discuss-skill-panel" class="panel-btn last" href="#" title="<?= _("DISCUSS THE SKILL"); ?>"><?= _("DISCUSS THE SKILL"); ?><span class="arrow-btn arrow-btn-r"><img src="../img/panel-icon-arrow-right.png" alt=">" /></span></a>

            <div class="panel-bottom panel-btn">
                <?= _("You are not logged in !") ?>
                <br />
                <a id="login-in-btn" href="#" title="<?= _("Log in") ?>"><?= _("Log in") ?></a> or <a id="register-btn" href="#" title="<?= _("create an account") ?>"><?= _("create an account") ?></a>
            </div>
        </div>
    </div>

    <div id="subpanel">
        <div id="create-skill-panel" class="panel-content">

            <?php include("subpanel-top.php") ?>

            <h3><?= _("CREATE SKILL"); ?></h3>
            <form method="POST" action="<?= \Controller\Router::url("addSkill"); ?>" id="create-skill-form">
                <input type="hidden" name="skillParentUuid" id="skillParentUuid" value="<?= $skill->getUuid(); ?>" />
                <div>
                    <label for="skillName"><?= _("NAME YOUR SKILL") ?></label>
                    <input type="text" name="skillName" id="skillName" maxlength="45" />
                    <p class="hint"><?= _("Hint: "); ?><?= _('Tell yourself "I can" or "I know how to".'); ?><br /><?= _("45 characters max."); ?></p>
                </div>
                <div>
                    <label for="creationType"><?= _("WHERE DOES IT GO"); ?></label>
                    <input type="hidden" name="creationType" id="creationType" value="child" />
                    <div class="img-btn img-btn-l" id="creationTypeParent" data-value="parent" data-parentuuid="<?= $parent->getUuid(); ?>">
                        <img src="img/panel-icon-create-before-noborder.png" alt="<?= _("BEFORE (as a parent)"); ?>" />
                        <span class="legend"><?= _("BEFORE (as a parent)"); ?></span>
                    </div>
                    <div class="img-btn img-btn-r selected" id="creationTypeChild" data-value="child" data-parentuuid="<?= $skill->getUuid(); ?>">
                        <img src="img/panel-icon-create-after-noborder.png" alt="<?= _("AFTER (as a child)"); ?>" />
                        <span class="legend"><?= _("AFTER (as a child)"); ?></span>
                    </div>
                </div>
                <div>
                    <input type="submit" value="<?= _("CREATE") ?>" />
                    <span class="message-zone"></span>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    $(".panel-btn").hover(
        function(e){ $(this).find(".arrow-btn-r").stop(true).animate({"margin-left": 36}, 150); }, 
        function(e){ $(this).find(".arrow-btn-r").stop(true).animate({"margin-left": 24}, 100); }
    );

    function loadSubpanel(e){
        var $panelToLoad = $("#" + $(this).data("panel"));
        $("#subpanel .panel-content").addClass("panel-hidden");
        $panelToLoad.removeClass("panel-hidden");
        console.log($("#first-panel"));
        $("#panels-container").animate({left: $("#panel").width()*-1});
    }

    function backToFirstPanel(e){
        $("#panels-container").animate({left: 0});
    }

    $("#first-panel .panel-btn").on("tap click", loadSubpanel);

    $("#close-panel-btn").on("tap click", function(){

    });

    $(".back-to-panel-btn").on("tap click", backToFirstPanel);

    //creation
    $("#create-skill-panel .img-btn").on("tap click", function(){
        $("#creationType").val($(this).data("value"));
        $("#skillParentUuid").val($(this).data("parentuuid"));
        $("#create-skill-panel .img-btn").toggleClass("selected");
    });
    $("#create-skill-form").on("submit", function(e){
        e.preventDefault();
        $.ajax({
            url: $("#create-skill-form").attr("action"),
            type: $("#create-skill-form").attr("method"),
            data: $("#create-skill-form").serialize(),
            success: function(response){
                if (response.status == "ok"){
                    $("#skillName").val("");
                    $("#create-skill-panel .message-zone").html(response.message);
                }
            }
        });
    });

</script>