

    <h1>Here are your STATS!</h1>

    <div>

        <table>
            <tr>
                <th>Skill count </th>
                <th>User count </th>
                <th>Deepest skill </th>
            </tr>
            <tr>
                <td><?= $skillsCount ?></td>
                <td><?= $usersCount ?></td>
                <td><?= $maxDepth ?></td>
            </tr>
        </table>

    </div>


    <div class="col" id="maxed-skills">
        <h2>Maxed skills</h2>
        <?php if ($maxedSkills): ?>
        <table id="maxeds-skills-table">
            <tr>
                <th>Skill</th>
            </tr>
            <?php foreach($maxedSkills as $ms): ?>
            <tr>
                <td><a href="<?= \Controller\Router::url("goTo", array("slug" => $ms->getSlug())) ?>"><?= $ms->getName(); ?></a></td>
            </tr>
            <?php endforeach; ?>
        </table>
        <?php else: ?>
        No skills with maximum number of children.
        <?php endif; ?>
    </div>
        

    <div>
        <h2>Users</h2>
        <table>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Ip</th>
                <th>Applied ?</th>
                <th>Actions</th>
            </tr>
        <?php foreach($users as $user): ?>
        <tr <?php if ($user->getApplicationStatus() === 2){ echo 'style="background-color: #89BEED"'; } ?>>
            <td><?= $user->getUsername(); ?></td>
            <td><?= $user->getEmail(); ?></td>
            <td><?= $user->getRole(); ?></td>
            <td><?= $user->getIpAtRegistration(); ?></td>
            <td><?php
                if ($user->getApplicationStatus() === 2){
                    echo "waiting !";
                } elseif ($user->getApplicationStatus() === 1){
                    echo "accepted !";
                } elseif ($user->getApplicationStatus() === 0){
                    echo "denied !";
                } else {
                    echo "...";
                }

             ?></td>
            <td>
                <a href="<?= \Controller\Router::url("setAsEditor", array("uuid" => $user->getUuid())); ?>" onclick="return confirm('Sure to set <?= $user->getUsername() ?> as an Editor ?')">Set as Editor</a>
                <a href="<?= \Controller\Router::url("deactivateAccount", array("uuid" => $user->getUuid())); ?>" onclick="return confirm('Sure to deactivate <?= $user->getUsername() ?> account ?')">deactivate</a>
            </td>
        </tr>
        <?php endforeach; ?>
    </table>
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