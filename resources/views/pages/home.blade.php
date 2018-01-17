
@extends('layouts.default')
@section('content')
<div id="home-top-panel">
    <div class="container">
        <div class="left-content">
            <h1>We are mapping every human skill out there.<br />And we need your help.</h1>
            <p id="tagline">What are your skills? Join us. Think with us. Map them out.</p>

            <div id="home-btn-go" class="home-btn"><a href="/skills">Enter Skill Project</a></div>
            <div id="home-btn-learn" class="home-btn"><a href="/project">Learn more</a></div>
        </div>

        <img src="img/SKP-page-home-sun.png" id="home-sun" />
        {{--<div id="skillCount ">--}}
            {{--Skills so far--}}
            {{--<span id="skillCountNum">000000</span>--}}
        {{--</div>--}}
    </div>
</div>

<section id="home-main-panel">
    <div class="container">
        <img class="home-illus brain-illus" alt="" src="img/SKP-page-home-brain.png" />
        <h2>Welcome to Skill Project! What can you do?</h2>
        <p>At Skill Project, we believe everyone has a unique share of humanity's skills.<br />Become part of our skill-loving community and share what you can do!</p>

        <img class="home-illus network-illus" alt="" src="img/SKP-page-home-network.png" />
        <h2>Every skill is connected to another one</h2>
        <p>So you know how to play music? Well, this is definitely a skill!<br />And "Play Guitar" or "Play Piano" are sub-skills of "Play music".<br />"Flamenco Guitar" or "Bottleneck Guitar" are sub-skills of "Play Guitar".
            <br />You get the picture?</p>

        <img class="home-illus circle-illus" alt="" src="img/SKP-page-home-circle.png" />
        <h2>Spread the word</h2>
        <p>By joining Skill Project you are contributing your unique understanding of your skills. The only way we can meet our goal is to create a large and diverse community of people who are willing to do the same.<br />Go tell your friends!</p>
    </div> 
</section>
<section id="home-bottom-panel" class="green">
    <div class="container">
        <h2>Ready to go?</h2>
        <p>Start exploring skills and add your own!</p>
        <div id="home-btn-go-bottom" class="home-btn"><a href="/skills">Enter Skill Project</a></div>
        <p>
        <h5><b>To download the Skill Database:</b></h5>
            <br>
            <script async="async" id="button_b5cea20f-35cc-45f6-8249-b6b6792dff17" src="//www.paywithatweet.com/embeds/b5cea20f-35cc-45f6-8249-b6b6792dff17" charset="utf-8"></script>
    </div> 
</section>
@endsection