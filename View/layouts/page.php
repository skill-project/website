<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="utf-8">
	<title><?php echo $title; ?></title>
	<meta name="description" content="">
	<base href="<?= \Config\Config::BASE_URL ?>" />
	<link href="css/style.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<style>
	@font-face {
	    font-family: 'Avenir-Book';
	    src: url('<?= \Config\Config::BASE_URL ?>fonts/Avenir-Book.ttf');
	}
	</style>
</head>

<body class="page">
	<div id="wrapper">	
		<header id="header">
			<div id="header-container">
				<?php include("../View/inc/header.php"); ?>
			</div>
		</header>
		<div id="main-content">
			<div id="main-content-container">
				<?php include("../View/pages/" . $page); ?>
			</div>
		</div>
	</div>
	<div id="footer">
		
	</div>

</body>
</html>
