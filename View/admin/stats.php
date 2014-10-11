

    <h1>Here are your STATS!</h1>

    <div>
        <h3>Skill count</h3>
        <?= $skillsCount ?>

        <h3>User count</h3>
        <?= $usersCount ?>

        <h3>Deepest skill at depth</h3>
        <?= $maxDepth ?>

    </div>

    <div class="col" id="latest-changes-container">
        <h2>Latest changes</h2>

        <a class="latest-changes-btn" href="<?= \Controller\Router::url("latestChanges"); ?>">More latest changes</a>

        <table id="latest-changes">
            <tr>
                <th>Date</th>
                <th>User</th>
                <th>Type</th>
                <th>Skill</th>
                <th>Infos</th>
            </tr>

        </table>

        <a class="latest-changes-btn" href="<?= \Controller\Router::url("latestChanges"); ?>">More latest changes</a>
        
        <div class="col" id="power-edit-form-container">
            <h4 id="skill_name"></h4>
            <form id="power-edit-form" action="<?= \Controller\Router::url("powerEdit"); ?>" method="POST">
                
                <label for="skillUuid">Skill Uuid</label>
                <input type="text" id="skillUuid" name="skillUuid" value="" />

                <label for="nameEn">Name in english</label>
                <input type="text" id="nameEn" name="nameEn" value="" />

                <label for="nameFr">Name in french</label>
                <input type="text" id="nameFr" name="nameFr" value="" />

                <input type="submit" value="Save" />
            </form>
        </div>
    </div>

        

    <script>

        var skip = 0;
        var limit = 40;

        function getLatestChanges(e){
            $.ajax({
                url: $(".latest-changes-btn:first").attr("href"),
                data: {
                    skip: skip,
                    limit: limit
                },
                success: function(response){
                    $("#latest-changes").append(response);
                    skip += limit;
                }
            });
        }

        $(".latest-changes-btn").on("click", function(e){
            e.preventDefault();
            getLatestChanges();
        });
        
        getLatestChanges();

        $("#latest-changes").on("click", "tr", function(){
            //fill the form and display it
            $("#skillUuid").val( $(this).data("skilluuid") );
            $("#nameEn").val( $(this).data("skillnameen") );
            $("#nameFr").val( $(this).data("skillnamefr") );
        });

        $("#power-edit-form").on("submit", function(e){
            e.preventDefault();
            var $that = $(this);
            $.ajax({
                url: $that.attr("action"),
                data: $that.serialize(),
                type: "post"
            }).done(function(){
                $(".skill_tr").remove();
                $("#skillUuid, #nameEn, #nameFr").val("");
                skip = 0;
                getLatestChanges();
            });
        }); 
    </script>