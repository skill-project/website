<?php
	$pageLangName = str_replace(".php", "", $page);
    $pageName = "graph";
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
