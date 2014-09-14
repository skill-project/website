<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
	<base href="<?= \Config\Config::BASE_URL ?>" />
	<link href="css/style.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/jquery.mousewheel.min.js"></script>
	<script type="text/javascript" src="js/kinetic-v5.1.0.js"></script>
	<script type="text/javascript" src="js/compatibility.js"></script>
	<script>
		var rootNodeId="<?php echo $rootNode->getUuid(); ?>";
		var baseUrl="<?= \Config\Config::BASE_URL ?>";
		<?php if (!empty($action)){ ?>var action="<?php echo $action; ?>";<?php } ?>
		<?php
			echo "var jsonTest = " . json_encode($skillManager->findNodePathToRoot($slug)); 
		?>
	</script>
	
	<script type="text/javascript" src="js/Node.js"></script>
	<script type="text/javascript" src="js/Edge.js"></script>
	<script type="text/javascript" src="js/Tree.js"></script>
	<script type="text/javascript" src="js/Panel.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
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
