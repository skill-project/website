<?php
	$pageLangName = str_replace(".php", "", $page);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<?php include("../View/inc/page_head.php"); ?>
</head>
<body class="<?= $userClass . " " . $pageLangName ?>">
	<?php include("../View/pages/" . $page); ?>
</body>
</html>
