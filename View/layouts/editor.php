<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Editor Dashboard</title>
    <base href="<?= $GLOBALS['base_url'] ?>/" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/editor.css" />
</head>

<body>
	<h1><?=_("Editor Dashboard");?></h1>
    <?php include("../View/editor/" . $page); ?>
</body>
</html>