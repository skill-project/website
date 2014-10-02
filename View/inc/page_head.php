<meta charset="utf-8">
<title><?php echo $title; ?></title>
<meta name="description" content="Explore all the human skills. Map them out.">
<base href="<?= $GLOBALS['base_url'] ?>/" />
<link rel="shortcut icon" href="img/favicon.png">

<?php if (\Config\Config::DEBUG): ?>
<link href="css/all.css" type="text/css" rel="stylesheet" />
<?php else: ?>
<link href="css/all.min.css" type="text/css" rel="stylesheet" />
<?php endif; ?>
<script>
    <?php if (!empty($rootNode)){ ?>var rootNodeId="<?= $rootNode->getUuid(); ?>";<?php } ?>
    var baseUrl="<?= $GLOBALS['base_url'] ?>/";  
    <?php if (!empty($action)){ ?>var action="<?= $action; ?>";<?php } ?>
    <?php if (!empty($jsonTest)){ echo "var jsonTest = " . $jsonTest . ";"; } ?>
    <?php if (!empty($jsonAutoLoad)) echo "var jsonAutoLoad = " . $jsonAutoLoad . ";"; ?>
    <?php
        if (empty($_SESSION["tourDone"]) or true) {
            $_SESSION["tourDone"] = true;
            echo "var doTour = true;";
        }
    ?>
</script>
<script>
    var ie = (function(){
        var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
        while ( div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0] );
        return v > 4 ? v : undef;
    }());
    if (ie < 9){
        alert("<?= _("Your browser is too old for this modern app. Please use a recent one !"); ?>");
        window.location.href = "/";
    }
</script>
<script src="scripts/js-translations.js"></script>
<?php if (\Config\Config::DEBUG): ?>
<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/jquery.mousewheel.min.js"></script>
<script src="js/jquery.highlight.js"></script>
<script src="js/jquery.simplemodal-1.4.4.js"></script>
<script src="js/jquery.tourbus.js"></script>
<script src="js/jquery.tinyscrollbar.js"></script>
<script src="js/kinetic-v5.1.0.custom.min.js"></script>
<script src="js/canvas-loader.min.js"></script>
<script src="js/compatibility.js"></script>

<script src="js/functions.js"></script>
<script src="js/Node.js"></script>
<script src="js/Node.prototypes.js"></script>
<script src="js/Edge.js"></script>
<script src="js/Tree.js"></script>
<script src="js/Panel.js"></script>
<script src="js/Camera.js"></script>
<script src="js/Search.js"></script>
<script src="js/User.js"></script>
<script src="js/Tour.js"></script>
<script src="js/Loader.js"></script>
<script src="js/script.js"></script>
<?php else: ?>
<script src="js/all.min.js"></script>
<?php endif; ?>
<?php include("../View/inc/analytics.js"); ?>
