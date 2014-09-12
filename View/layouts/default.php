<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
	<link href="css/style.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/kinetic-v5.1.0.js"></script>
	<script>var rootNodeId=<?php echo $rootNode->getId(); ?>;</script>
	<script type="text/javascript" src="js/Node.js"></script>
	<script type="text/javascript" src="js/Edge.js"></script>
	<script type="text/javascript" src="js/Tree.js"></script>
	<script type="text/javascript" src="js/Panel.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
</head>

<body>
	<?php include("../View/pages/" . $page); ?>
</body>
</html>
