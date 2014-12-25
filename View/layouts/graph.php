<?php
	$pageLangName = str_replace(".php", "", $page);
    $pageName = "graph";

    $pageNames = explode("/", $pageName);
	$lastPageName = $pageNames[count($pageNames) - 1];
?>
<!DOCTYPE html>
<html lang="fr" class="graph">
<head>
	<?php include("../View/inc/page_head.php"); ?>
</head>
<body class="<?= $userClass . " " . $pageLangName ?>">
	<?php include("../View/pages/" . $page); ?>
</body>
</html>
