<div style="background-color: powderblue; padding: 20px;">
    <hr />
    <h2>Debug</h2>
    <a href="<?php echo \Controller\Router::url("home"); ?>">Accueil</a> | 
    <a href="<?php echo \Controller\Router::url("dummyData"); ?>">Insert Dummy data</a> | 
    <a href="<?php echo \Controller\Router::url("deleteNode", array("id" => 1)); ?>">Efface le noeud #id 1</a> |

    <div style="clear:both"> </div>
    <div style="width:50%; float: left;">
        <h4>ROUTES</H4>
        <?php
            \Controller\Router::showRoutes();
        ?>
        <h4>GET</h4>
        <pre><?php print_r($_GET); ?></pre>
        <h4>POST</h4>
        <pre><?php print_r($_POST); ?></pre>
    </div>
    <div style="width:50%; float: left;">
        <h4>SESSION</h4>
        <pre><?php print_r($_SESSION); ?></pre>
        <h4>Server</h4>
        <pre><?php print_r($_SERVER); ?></pre>
    </div>
    <div style="clear:both"> </div>
</div>