<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
	<base href="<?= \Config\Config::BASE_URL ?>" />
	<link rel="shortcut icon" href="img/favicon.png">

	<?php if (\Config\Config::DEBUG): ?>
	<link href="css/all.css" type="text/css" rel="stylesheet" />
	<?php else: ?>
	<link href="css/all.min.css" type="text/css" rel="stylesheet" />
	<?php endif; ?>
	<script>
		var rootNodeId="<?= $rootNode->getUuid(); ?>";
		var baseUrl="<?= \Config\Config::BASE_URL ?>";	
		<?php if (!empty($action)){ ?>var action="<?= $action; ?>";<?php } ?>
		<?php if (!empty($jsonTest)){ echo "var jsonTest = " . $jsonTest; } ?>
		<?php if (!empty($jsonAutoLoad)) echo "var jsonAutoLoad = " . $jsonAutoLoad; ?>

	</script>
	<?php if (\Config\Config::DEBUG): ?>
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="js/jquery.highlight.js"></script>
	<script type="text/javascript" src="js/jquery.simplemodal.1.4.4.min.js"></script>
	<script type="text/javascript" src="js/kinetic-v5.1.0.custom.min.js"></script>
	<script type="text/javascript" src="js/compatibility.js"></script>
	
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/Node.js"></script>
	<script type="text/javascript" src="js/Node.prototypes.js"></script>
	<script type="text/javascript" src="js/Edge.js"></script>
	<script type="text/javascript" src="js/Tree.js"></script>
	<script type="text/javascript" src="js/Panel.js"></script>
	<script type="text/javascript" src="js/Camera.js"></script>
	<script type="text/javascript" src="js/Search.js"></script>
	<script type="text/javascript" src="js/User.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<?php else: ?>
	<script type="text/javascript" src="js/all.min.js"></script>
	<?php endif; ?>
	<style>
	@font-face {
	    font-family: 'Avenir-Book';
	    src: url('<?= \Config\Config::BASE_URL ?>fonts/Avenir-Book.ttf');
	}
	</style>
</head>
<body>
	<?php include("../View/pages/" . $page); ?>
</body>
</html>
