<section class="first">
    <div class="container">
        <img src="img/SKP-page-project-illus.png" id="project-illus" class="illus" />
        <h2 class="first"><?= _("THE PROJECT"); ?></h2>
        <h4>Le projet</h4>
        <p>Depuis une fucking lurette, l'humanité apprend à maîtriser, collectivement ou individuellement, de nouvelles compétences. Et jusqu'à aujourd'hui, aucune <b>base de données complète et organisée des compétences</b> n'a été réalisée.</p>
        <p>Grâce aux nouveaux outils sociaux, aux nouvelles technologies, nous croyons fermement qu'il est possible aujourd'hui de construire cette carte des compétences humaines, en prenant appui sur la connaissance collective, et en encourageant la participation la plus massive possible au projet.</p>
        <h4>Notre Mission</h4>
        <p>Notre objectif est de réaliser la plus complète et la plus précise des bases de données de compétences jamais produite, entièrement traduite, en s'appuyant sur <b>une communauté variée et bourrée de savoir-faire</b>, qui contribuera en ajoutant leurs compétences indivuelles, à la carte globale.</p>
        <p>Les données produites par la communauté sont gratuites pour un usage non-commercial. Parce que la base de données est le produit d'un effort collectif, nous ne souhaitons pas en autoriser l'utilisation à des fins commerciales. Par contre, nous pouvons octroyer des licences gratuites à des invidus ou des organismes menant des projets à vocations de recherche ou utile socialement.</p>
        <h4>Comment pouvez-vous aider ?</h4>
        <p>Nous avons imaginé une ontologie volontairement simple où <b>chaque compétece peut être divisée en plusieurs compétences plus spécifique</b>. Tout ce qu'il vous reste à faire est d'ajouter vos propres compétences à l'endroit approprié dans l'arbre ainsi formé.</p>
        <p><a href="<?= \Controller\Router::url("graph"); ?>" alt="<?= _("The skills"); ?>">Vous pouvez parcourir la base de données</a> dès maintenant. Vous n'avez même pas besoin de vous enregistrer pour ce faire.</p>
        <p>Si vous souhaitez ajouter vos propres compétences, vous devez alors <a class="register-link" href="<?= \Controller\Router::url("register"); ?>" title="<?= _("Register!"); ?>">vous inscrire</a>. Une fois inscrit et connecté, vous pouvez commencer à ajouter de nouvelles compétences, et partager vos idées sur celles déjà existantes.</p>
        <p>Pour les opérations plus poussées, comme déplacer les compétences, les effacer ou les renommer, vous devez <a href="<?= \Controller\Router::url("apply"); ?>" title="<?= _("Become an Editor!"); ?>">faire une demande pour devenir éditeur</a>. Les demandes pour devenir éditeur sont traitées quotidiennement afin que vous puissiez rapidement devenir un membre à part entière de notre communauté&nbsp;!</p>
        <p>Si vous souhaitez rencontrer l'équipe ou les autres membres de Skill Project, rendez-vous sur notre <a href="<?= \Config\Config::VANILLA_URL?>" title="<?= _("Skill Project's Community"); ?>">forum communautaire</a> et présentez-vous&nbsp;!</p>    
    </div>
</section>
<hr />
<section>
    <div class="container">
        <h2><?= _("FAQ"); ?></h2>

        <h3><?=_("The Skills")?></h3>
        <div class="faq-q">
            <h4>What is a skill?</h4>
            <div class="faq-a">
                It’s anything you can do and is really important to you, in your daily job or in life in general. Even seemingly trivial skills can be really important for some people.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Are there illegal skills?</h4>
            <div class="faq-a">
                Every country has laws about what people can and cannot do. We do not consider that listing a skill which is illegal to perform in some countries should be illegal itself. However, Skill Project is not a place to promote openly illegal and/or immoral activities through skills so expect the Editors to delete or flag inappropriate skills.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Is there a way to link directly to a skill ?</h4>
            <div class="faq-a">
                Sure! Open the Edit panel for any skill and click on “Share”. You will see an URL address you can copy and paste anywhere. By opening that URL, the tree will automatically expand itself up to the selected skill.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Is it possible for the same skill to be in two (or more) different branches ? </h4>
            <div class="faq-a">
                Yes, absolutely. But as the database is concerned, these will be two different skills (only with the same name). We believe that many skills could have different meanings based on their parent (like “Photo editing”, which could be classified under “Arts” as well as under “Computer Sciences”, or “Technicals”).</p>
            </div>
        </div>

        <div class="faq-q">
            <h4>Is something like “to breathe” or “to walk” considered a skill ?</h4>
            <div class="faq-a">
                Remember what we call a “skill” : It’s anything you can do and is really important to you, in your daily job or in life in general. Even seemingly trivial skills can be really important for some people.<br />
                Ask a Yoga teacher if breathing well may or may not be considered a skill. Sure it is! And what about Racewalking?<br />
                So yes, they are skills. But if it’s not immediately obvious to you, it may be better to not add them because you might not add the to the right branchl. People who actually master the skills themselves are usually better at classifying them.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Is knowledge considered a skill in Skill Project ?</h4>
            <div class="faq-a">
                Generally, yes. Because we have a broad definition of skill that is not limited to physical actions, or DIY skills. For example, we believe “Music” is a skill. A very general one, but still a concept that can relate to something one can learn, teach, master, excel at, etc. Of course, if you “know music”, chances are you also know many sub-skills of Music.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Do skills have to be job/employment related ? </h4>
            <div class="faq-a">
                No, they don’t need to be related to a job. On the other hand, we struggled to think of any skill that was not at least partially connected to a job, if not for you, for someone else somewhere.</p>
            </div>
        </div>

        <h3><?=_("Editing the Skills")?></h3>
        <div class="faq-q">
            <h4>How do I add a skill ? </h4>
            <div class="faq-a">
                First, you must be logged in. If you don’t have an account yet, head over to the Sign up form.<br />
                Then, click on the “+” button onthe skill that is linked to the skill you want to add. This will open a panel with the “Create skill” option.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Why do you limit the number of children a skill can have?</h4>
            <div class="faq-a">
                If we didn’t, some skills would have hundreds or even thousands of sub-skills (think about the spoken languages for example). That wouldn’t make a very nice tree. Nor would it be easy to explore.<br />
                On the other hand, we noticed that it’s always possible to group skills together in such a way that the total number of skills in each group is always relatively small. This becomes obvious for skills you master because you can usually see that they naturally pertain to different groups.<br />
                At the moment, we are limiting at 10 sub-skills, but we might slightly raise this limit in the future if it’s a problem. Do raise the issue on the community forum if it’s bothering you.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Sometimes, I can rename, delete or move a skill around, and sometimes not… What’s going on ?</h4>
            <div class="faq-a">
                You have all the editing rights on the skills you just created, but only for about an hour... so review your work quickly!</p>
            </div>
        </div>

        <div class="faq-q">
            <h4>I need to edit a skill name, but I’m not an Editor… What can I do ?</h4>
            <div class="faq-a">
                If you just created the skill, you should be able to edit it for one hour. Otherwise, you can suggest the new name to an Editor by writing a message in the “Discuss the skill” section of the skill’s panel. Or you can apply to become an Editor yourself!</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Why doesn’t everyone has the Editor rights ? Like on Wikipedia ?</h4>
            <div class="faq-a">
                Unfortunately, sometimes we have to plan for the worse. Wreaking havoc on the tree is just a few clicks away when you have Editor rights. Because our data has an intrinsic hierarchical form, it is very easy to vandalize a few skills (on the top levels) and it will have a very visible effect.<br />
                But we are constantly thinking about new and creative ways to improve and moderation system. If you have any ideas, we’ll be glad to hear it from you on the community forum.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Why is the background pink ?</h4>
            <div class="faq-a">
                It’s not “pink”, it’s “orchid”, you insensitive clod.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Is this shit made in Flash or what ?</h4>
            <div class="faq-a">
                No sir. It’s genuine HTML 5 with a flavour of Canvas and some KineticJS magic on top of it! And let’s not forget the hidden part of the iceberg: the database is powered by the fantastic graph-based database Neo4J.</p>
            </div>
        </div>

        <h3><?=_("The Database")?></h3>
        <div class="faq-q">
            <h4>How many skills is there in your database ?</h4>
            <div class="faq-a">
                Skill Project started a few days ago with a little more than 300 skills. We expect the database to grow quickly into thousands of skills.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Where can I download the data ?</h4>
            <div class="faq-a">
                We are working on it! If it’s important to you, drop us a line so we can speed up the process as fast as we can.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Do you have a REST api ?</h4>
            <div class="faq-a">
                It is on our roadmap but we don’t consider it a priority. If it’s important to you, raise the issue on the community forum so we can discuss it together and see if it would come handy to more people. We will then reconsider our priorities.</p>
            </div>
        </div>

        <h3><?=_("Internationalization")?></h3>
        <div class="faq-q">
            <h4>What happens when I add a skill in french ? Is it “copied” to the english tree ?</h4>
            <div class="faq-a">
                When a skill is added to the tree, it gets automatically translated into all the supported languages. So it will effectively be present in the english tree as well. However, do not think of it as a copied skill because it is actually the exact same skill you added, only with a different (translated name). So if you decide to move it somewhere else, all other languages will be affected as well.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Why is Skill Project not available in my language ?</h4>
            <div class="faq-a">
                We are planning to make Skill Project available to many, many languages. It is actually not so difficult to make the tree available in additional languages. But we also want to make the whole website available in those same languages and this takes a little bit more effort.<br />
                If you can help with the translation drop us a line! We’d be very thankful!</p>
            </div>
        </div>

        <h3><?=_("Our Mission")?></h3>
        <div class="faq-q">
            <h4>What’s the purpose of all this ?</h4>
            <div class="faq-a">
                It is to collectively make the largest and most accurate database of all the human skills we, as humans, have learned in the last few millenias. And have it organized in such a way that we can easily explore it and keep it up to date.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>What is next for Skill Project ?</h4>
            <div class="faq-a">
                We believe our 21st century society is becoming more and more skill-centered, this is why we created Skill Project. We believe there will be many ways to leverage the power of a community curated comprehensive skill database, but have no definite plans as of today. We are definitely eager to read what you think about it! Let’s talk about it in the community forum.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>How do you make money out of this ?</h4>
            <div class="faq-a">
                At the moment, we don’t, but the satisfaction we get by working on a global scale project for humanity is more than enough to keep us focused!<br />
                However, we do hope that a business plan will come out of it one day. We are never going to turn Skill Project into a for profit website. It just wouldn’t make any sense. But we might consider developing some side projects linked with Skill Project in one way or another. Not our priority right now, though.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>I’d like to make my own skill tree… any way I can do that ?</h4>
            <div class="faq-a">
                Not right now, but it’s a feature we have given some thinking to. Care to discuss it on the community forum with us?</p>
            </div>
        </div>

        <div class="faq-q">
            <h4>Is there a mobile Skill Project app available?</h4>
            <div class="faq-a">
                Not yet. Would you like one? Come and tell us on the community forum.</p>
            </div>
        </div>

        <h3><?=_("Becoming an Editor")?></h3>
        <div class="faq-q">
            <h4>How hard is it to become an Editor ? </h4>
            <div class="faq-a">
                It’s definitely not hard, you simple have to take a few minutes to fill the application form. But we will be careful to give Editors rights to people who take their application seriously. We don’t have an upper limit on the number of Editors Skill Project can have, but we will encourage Editorship for branches of the tree that are not yet catered for.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>How many Editors are there ?</h4>
            <div class="faq-a">
                We started Skill Project a few days ago and the only Editors then were the 3 core team members.</p>
            </div>
        </div>

        <script>
            $(".faq-q h4").on("click", function(){
                $(".faq-q h4.selected").not($(this)).removeClass("selected").next(".faq-a").slideToggle(300);
                $(this).toggleClass("selected");
                $(this).next(".faq-a").slideToggle(300);
            });
            $(".faq-a").hide();
        </script>   
    </div>
</section>
<hr />
<section>
    <div class="container">
        <h2><?= _("MEET THE TEAM"); ?></h2>
        <p>Skill Project was brought to you by 3 friends living in Paris, France. We share a passion for learning, teaching and experimenting which has naturally led us to imagine Skill Project. Apart from that, we come from different cultural and gastronomical backgrounds! Come and chat with us in the <a href="<?= \Config\Config::VANILLA_URL?>" title="<?= _("Skill Project's Community"); ?>">community section</a>.
        </p>
        <div class="project-col">
            <div id="dario-pic" class="team-pic"></div>
            <h4>DARIO SPAGNOLO</h4>
            <p>Dario was born in Italy and is a self-taught computer enthusiast since he was 7. He founded and ran a website agency in Paris for 7 years before focusing on Skill Project. He is also the founder of Open du Web, a regular event in Paris where talented people can show off their web-related skills. Dario is also furiously jealous of Guillaume’s nickname.</p>
        </div>
        <div class="project-col">
            <div id="guillaume-pic" class="team-pic"></div>
            <h4>GUILLAUME SYLVESTRE</h4>
            <p>Guillaume was born in Quebec, Canada and is now living in France. Passionate web developper and teacher, he fell in love with PHP and sexy databases some 8 years ago, and is now padding on this flaw through code and courses. He is known as SkillBill on Skill Project.</p>
        </div>
        <div class="project-col">
            <div id="raphael-pic" class="team-pic"></div>
            <h4>RAPHAEL BOUSQUET</h4>
            <p>Raphael is french, but loves to speak latin like that: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        </div>
    </div>
</section>