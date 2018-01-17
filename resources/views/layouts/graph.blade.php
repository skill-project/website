<?php
$page = Route::getFacadeRoot()->current()->uri();
if ($page == '/skills')
    $page = 'graph';
    $pageName = "graph";
?>
<!DOCTYPE html>
<html lang="en" class="graph">
<head>
    @include("inc.page_head")
</head>
<body class="<?= $data['userClass'] . " graph" ?> " style="height: 715px; cursor: default;" onload="loadJSTranslations()">
    @yield('content')
</body>
</html>

{{--// Simple default -> yeild content -> alag page -> pages.graph-> section & end section and define layout at top.--}}