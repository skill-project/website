

    <h1>Here are your STATS!</h1>

    <div>
        <h3>Skill count</h3>
        <?= $skillsCount ?>

        <h3>User count</h3>
        <?= $usersCount ?>

        <h3>Deepest skill at depth</h3>
        <?= $maxDepth ?>

    </div>

    <h2>Latest changes</h2>
    <table id="latest-changes">
        <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Skill</th>
            <th>Infos</th>
            <th>User</th>
        </tr>

    </table>

    <a id="latest-changes-btn" href="<?= \Controller\Router::url("latestChanges"); ?>">More latest changes</a>
    <script>

        var skip = 0;
        var limit = 10;

        function getLatestChanges(e){
            $.ajax({
                url: $("#latest-changes-btn").attr("href"),
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

        $("#latest-changes-btn").on("click", function(e){
            e.preventDefault();
            getLatestChanges();
        });
        
        getLatestChanges();
    </script>