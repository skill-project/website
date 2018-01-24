<meta charset="utf-8">
<title><?php echo "Skill-Project"; ?></title>
<meta name="description" content="Explore all the human skills. Map them out.">
<base href="/" />
<meta name="viewport" content="width=1050">
<link rel="shortcut icon" href="/img/favicon.png">

<script>
    var baseUrl = "/";
    var gaC = 'UA-50434381-9';
    var pageName = 'graph';
    var rootNodeId = '5430126ba0a292f58144425';
    var doTour = false;
    var skillCount = 2185;
    var wsUrl = '2185';

    //Do dinosaurs still exist ?
    var ie = (function() {
        var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');
        while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0])
            ;
        return v > 4 ? v : undef;
    }());
    if (ie < 9) {
        alert("Your browser is too old for this modern app. Please use a recent one!");
        window.location.href = "/";
    }
    AUTOBAHN_DEBUG = true;
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', gaC, 'auto');
    ga('send', 'pageview');
</script>

<script>
    function loadJSTranslations() {
        $.get("/js-translations");
    }
</script>

<link href="{{ asset('css/all.css') }}" rel="stylesheet">
<script src="{{ asset('js/jquery-2.1.1.min.js')}}"></script>
<script src="{{ asset('js/jquery-ui.min.js') }}"></script>
<script src="{{ asset('js/jquery.mousewheel.min.js') }}"></script>
<script src="{{ asset('js/jquery.highlight.js') }}"></script>
<script src="{{ asset('js/jquery.simplemodal-1.4.4.js') }}"></script>
<script src="{{ asset('js/jquery.tourbus.js') }}"></script>
<script src="{{ asset('js/jquery.tinyscrollbar.js') }}"></script>
<script src="{{ asset('js/kinetic-v5.1.0.custom.min.js') }}"></script>
<script src="{{ asset('js/canvas-loader.min.js') }}"></script>
<script src="{{ asset('js/autobahn.js') }}"></script>
<script src="{{ asset('js/jquery.waypoints.js') }}"></script>
<script src="{{ asset('js/countUp.js') }}"></script>
<script src="{{ asset('js/compatibility.js') }}"></script>
<script src="{{ asset('js/functions.js') }}"></script>
<script src="{{ asset('js/Site.js') }}"></script>
<script src="{{ asset('js/Node.js') }}"></script>
<script src="{{ asset('js/Node.prototypes.js') }}"></script>
<script src="{{ asset('js/Edge.js') }}"></script>
<script src="{{ asset('js/Tree.js') }}"></script>
<script src="{{ asset('js/Panel.js') }}"></script>
<script src="{{ asset('js/Camera.js') }}"></script>
<script src="{{ asset('js/Search.js') }}"></script>
<script src="{{ asset('js/User.js') }}"></script>
<script src="{{ asset('js/Tour.js') }}"></script>
<script src="{{ asset('js/Loader.js') }}"></script>
<script src="{{ asset('js/FPSCounter.js') }}"></script>
<script src="{{ asset('js/Editor.js') }}"></script>
<script src="{{ asset('js/script.js') }}"></script>

