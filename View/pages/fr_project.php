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
        <h4>Comment pouvez-vous participer&nbsp;?</h4>
        <p>Nous avons imaginé une ontologie volontairement simple où <b>chaque compétece peut être divisée en plusieurs compétences plus spécifiques</b>. Tout ce que vous avez à faire est d'ajouter vos propres compétences à l'endroit approprié dans l'arbre.</p>
        <p>Vous pouvez <a href="<?= \Controller\Router::url("graph"); ?>" alt="<?= _("The skills"); ?>">parcourir la base de données</a> dès maintenant. Vous n'avez même pas besoin de vous enregistrer pour ce faire.</p>
        <p>Si vous souhaitez ajouter vos propres compétences, vous devez alors <a class="register-link" href="<?= \Controller\Router::url("register"); ?>" title="<?= _("Register!"); ?>">vous inscrire</a>. Une fois inscrit et connecté, vous pouvez commencer à ajouter de nouvelles compétences, et partager vos idées sur celles déjà existantes.</p>
        <p>Pour les opérations plus poussées, comme déplacer les compétences, les effacer ou les renommer, vous devez <a href="<?= \Controller\Router::url("apply"); ?>" title="<?= _("Become an Editor!"); ?>">faire une demande pour devenir éditeur</a>. Ces demandes sont traitées quotidiennement afin que vous puissiez rapidement devenir un membre à part entière de notre communauté&nbsp;!</p>
        <p>Si vous souhaitez rencontrer l'équipe ou les autres membres de Skill Project, rendez-vous sur notre <a href="<?= \Config\Config::VANILLA_URL?>" title="<?= _("Skill Project's Community"); ?>">forum communautaire</a> et présentez-vous&nbsp;!</p>    
    </div>
</section>
<hr />
<section>
    <div class="container">
        <h2><?= _("FAQ"); ?></h2>

        <h3><?=_("The Skills")?></h3>
        <div class="faq-q">
            <h4>Qu'est-ce qu'une compétence&nbsp;?</h4>
            <div class="faq-a">
                <p>C'est tout ce que vous pouvez faire et qui est important pour vous, dans votre travail ou votre vie quotidienne. Même des compétences en apparence futile peuvent être cruciales pour quelqu'un d'autre.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Y a-t-il des compétences interdites&nbsp;?</h4>
            <div class="faq-a">
                <p>Tous les pays ont des lois à propos de ce que les gens peuvent ou ne peuvent pas faire. Nous ne considérons pas que le fait de cartographier ou d'afficher une compétence illégale dans certains pays devrait être lui-même interdit. Par contre, Skill Project n'est pas un lieu où promouvoir des activités illégales ou immorales par le biais de l'arbre de compétences : les éditeurs peuvent supprimer ou signaler toutes compétences innappropriées.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Est-il possible de faire un lien directement vers une compétence&nbsp;?</h4>
            <div class="faq-a">
                <p>Bien sûr ! Ouvrez le panneau d'édition de n'importe quelle compétence, puis cliquez sur "Partager". Vous verrez l'URL de ce lien, que vous pouvez copier et coller n'importe où. En vous rendant sur cette URL, l'arbre des compétences va se déployer jusqu'à la compétence sélectionnée.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Est-il possible qu'une même compétence se retrouve dans deux branches différentes&nbsp;?</h4>
            <div class="faq-a">
                <p>Oui, tout à fait. Mais du point de vue de la base de données, ce seront deux compétences complètement distinctes (tout en ayant le même nom). Nous croyons que plusieurs compétences peuvent avoir des sens différents en fonction de leur parent (comme "Édition photo", qui peut être catégorisée sous "Arts" mais également sous "Informatique", ou "Techniques").</p>
            </div>
        </div>

        <div class="faq-q">
            <h4>Est-ce que "respirer" ou "marcher" sont considérés comme étant des compétences&nbsp;?</h4>
            <div class="faq-a">
                <p>Souvenez-vous de ce que nous appelons une "compétence"&nbsp;: C'est tout ce que vous pouvez faire et qui est important pour vous, dans votre travail ou votre vie quotidienne. Même des compétences en apparence futile peuvent être cruciales pour quelqu'un d'autre.<br />
                Demandez à un professeur de yoga si "respirer" n'est pas une compétence importante ! Et que dire de la "marche athélique" ?<br />
                Donc oui, ce sont des compétences. Mais si ce n'est pas évident pour vous, il est sans doute préférable de ne pas les ajouter vous-même, car vous pourriez ne pas les ajouter à l'endroit le plus approprié. Ceux qui possèdent les compétences sont souvent les mieux placés pour les classifier.
                </p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Les connaissances sont-elles des compétences sur Skill Project&nbsp;?</h4>
            <div class="faq-a">
                <p>Globalement, oui. Puisque nous avons une définition très large des compétences, qui n'est pas limitée aux actions physiques. Par exemple nous croyons que "Musique" est une compétence. Une compétence très générale, mais tout de même un concept qu'on peut apprendre, enseigner, maîtriser, etc. Bien sûr, si vous "connaissez la musique", il y a de fortes chances pour que vous connaissiez des sous-compétences de "Musique".</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Est-ce que les compétences doivent être reliées au monde du travail&nbsp;?</h4>
            <div class="faq-a">
                <p>Non. Ceci dit, nous avons beaucoup de mal à trouver des compétences qui ne sont pas, au moins en partie, reliée à un travail (si ce n'est pour vous, pour quelqu'un d'autre).</p>
            </div>
        </div>

        <h3><?=_("Editing the Skills")?></h3>
        <div class="faq-q">
            <h4>Comment puis-je ajouter une compétence&nbsp;?</h4>
            <div class="faq-a">
                <p>D'abord, vous devez être connecté. Si vous n'avez pas encore de compte, rendez-vous au formulaire d'inscription.<br />
                Ensuite, cliquez sur le bouton "+" situé sur la compétence depuis laquelle vous voulez ajouter une nouvelle compétence. Ceci ouvrira le panneau, où vous trouverez l'option "Ajouter une compétence".
                </p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Pourquoi limiter le nombre d'enfants que peut avoir une compétence&nbsp;?</h4>
            <div class="faq-a">
                <p>Si nous ne le faisions pas, une compétence pourrait avoir des centaines, voir des milliers de sous-compétences (pensez aux langues parlées par exemple). Ceci aurait pour effet de créer un arbre très difficile à consulter.<br />
                Mais aussi, nous nous sommes aperçus qu'il était toujours possible de regrouper les compétences entre elles, afin d'obtenir un nombre relativement restreint de compétences par niveau, ceci étant particulièrement évident pour les compétences que vous maîtrisez, car vous pouvez les classifier très naturellement.<br />
                Actuellement, nous limitions le nombre de sous-compétences à 10, mais nous pourrons augmenter légèrement cette limite si cela devient un problème. N'hésitez pas à en discuter sur notre forum si ça vous semble être un problème !</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Parfois, je peux déplacer, renommer ou effacer des compétences, et parfois non. C'est normal&nbsp;?</h4>
            <div class="faq-a">
                <p>C'est normal ! Vous possédez tous les droits d'éditions sur une compétence que vous venez tout juste de créer, et ce pour une heure seulement ! Alors réviser votre travail rapidement !</p>
            </div>
        </div>

        <div class="faq-q">
            <h4>Je dois modifier une compétence, mais je ne suis pas un éditeur... Que puis-je faire&nbsp;?</h4>
            <div class="faq-a">
                <p>Si vous venez de créer la compétence il y a moins d'une heure, vous devriez pouvoir la modifier vous-même. Sinon, vous pouvez suggérer des modifications dans le panneau de cette compétence, sous "Discuter". Ou vous pouvez faire la demande pour devenir éditeur vous-même !</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Pourquoi est-ce que tout le monde n'a pas les droits d'éditions&nbsp;?</h4>
            <div class="faq-a">
                <p>Malheureusement, nous devons parfois prévoir le pire. Avec des droits d'éditeurs, il est relativement simple de détruire l'arbre, justement parce qu'il possède cette structure hiérarchique. Une modificataion sur quelques compétences haut-placées aura des effets très visible sur toutes ses branches.<br />
                Mais nous réfléchissons en permanence à de nouvelles manières créatives d'améliorer ce système de modération. Si vous avez des idées, nous serons ravis de les lire dans le forum !</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Pourquoi le fond est-il rose&nbsp;?</h4>
            <div class="faq-a">
                <p>Il n'est pas "rose", il est "orchidée". Oh.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Est-ce que l'arbre est fait en Flash ou bien&nbsp;?</h4>
            <div class="faq-a">
                <p>Non ! C'est du HTML 5 pur sang avec une touche de Canvas et un brin de magie KineticJS ! Et n'oublions pas la partie cachée de l'iceberg : la base de données est propulsée par le fantastique Neo4J, une base NOSQL de graph.</p>
            </div>
        </div>

        <h3><?=_("The Database")?></h3>
        <div class="faq-q">
            <h4>Combien y-a-il de compétence dans la base de données&nbsp;?</h4>
            <div class="faq-a">
                <p>Skill Project a démarré il y a quelques jours avec quelques 300 compétences en base. Nous prévoyons que la base de données dépassera rapidement les milliers de compétences.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Où puis-je télécharger les données&nbsp;?</h4>
            <div class="faq-a">
                <p>Nous travaillons là-dessus ! Si c'est important pour vous, faites-nous signe et nous tenterons d'accélérer le processus</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Avez-vous une API REST&nbsp;?</h4>
            <div class="faq-a">
                <p>C'est dans nos plan, mais nous ne le considérons pas comme une priorité. Si c'est important pour vous, parlez-en sur le forum pour que nous puissions en discutez ensemble, et pour vous si d'autres utilisateurs ressentent ce besoin. Nous reverrons alors nos priorités !</p>
            </div>
        </div>

        <h3><?=_("Internationalization")?></h3>
        <div class="faq-q">
            <h4>Que se passe-t-il quand j'ajoute une compétence en français ? Est-elle copiée à l'arbre anglais&nbsp;?</h4>
            <div class="faq-a">
                <p>Quand une compétence est ajoutée à l'arbre, elle est alors automatiquement traduite dans toutes les langues supportées. Elle sera donc présente dans l'arbre anglais aussi ! Par contre, ne croyez pas qu'elle est copiée : c'est bel et bien la même compétence, mais avec un autre nom (traduit). Donc si vous faites un déplacement dans une langue, les autres langues suivront.
                </p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Pourquoi Skill Project n'est-il pas disponible dans ma langue&nbsp;?</h4>
            <div class="faq-a">
                <p>Nous souhaitons rendre Skill Project disponible dans beaucoup, beaucoup de langues. C'est pour l'instant assez simple de rendre l'arbre disponible dans d'autres langues, mais nous souhaitons également que le site complet soit traduit pour les langues que nous proposons. Et ça, ça demande un peu plus de temps.<br />
                Si vous pouvez nous aider avec la traduction, contactez-nous ! Nous serons plus que reconnaissant !</p>
            </div>
        </div>

        <h3><?=_("Our Mission")?></h3>
        <div class="faq-q">
            <h4>Quel est le but réel de tout ça&nbsp;?</h4>
            <div class="faq-a">
                <p>C'est de réaliser collectivement la plus complète et la plus précise des base de données des compétences humaines. Et organiser celle-ci afin qu'elle soit simple et agréable à explorer, et à maintenir à jour.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Quelle est la suite pour Skill Project&nbsp;?</h4>
            <div class="faq-a">
                <p>Nous croyons que notre société du 21ème siècle devient de plus en plus centrée sur les compétences, et c'est en partie pourquoi nous avons créé Skill Project. Nous croyons que les possibilités seront nombreuses de tirer tous les bénéfices d'une base de données de compétences, mais nous n'avons aucun plan pour le moment. Si vous avez une idée sur la question, parlez-en sur le forum !</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Comment faites-vous de l'argent avec ceci&nbsp;?</h4>
            <div class="faq-a">
                <p>Actuellement, nous n'en faisons pas, mais la satisfaction de travailler sur un projet à grande échelle est plus que suffisant pour nous motiver !<br />
                Ceci dit, nous espérons qu'un plan d'affaire pourra un jour se dégager. Nous ne transformerons jamais Skill Project en un projet à but lucratif, ça n'aurait aucun sens. Mais nous pourrions un jour développer des projets parallèles, liés à Skill Project, mais ce n'est pas notre priorité pour le moment.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>J'aimerais réaliser mon propre arbre de compétences... c'est possible&nbsp;?</h4>
            <div class="faq-a">
                <p>Pas pour le moment, mais c'est une possibilité que nous avons fortement envisagée. Vous souhaitez en discuter sur le forum ?</p>
            </div>
        </div>

        <div class="faq-q">
            <h4>Y a-t-il une application mobile&nbsp;?</h4>
            <div class="faq-a">
                <p>Pas encore!</p>
            </div>
        </div>

        <h3><?=_("Becoming an Editor")?></h3>
        <div class="faq-q">
            <h4>Est-ce vraiment difficile de devenir éditeur&nbsp;?</h4>
            <div class="faq-a">
                <p>Ce n'est vraiment pas difficile, vous devez simplement prendre quelques minutes pour remplir le formulaire de demande. Mais nous ne souhaitons donner des droits d'éditions qu'aux personnes prenant leur rôle au sérieux.<br />Il n'y a pas de limite au nombre d'éditeur sur Skill Project, mais nous préférons accueillir de nouveaux éditeurs sur les branches qui ne sont pas encore sous supervision.</p>
            </div>
        </div>
        <div class="faq-q">
            <h4>Combien y a-t-il d'éditeurs&nbsp;?</h4>
            <div class="faq-a">
                <p>Skill Project a démarré il y a quelques jours avec seulement les 3 membres de l'équipe en tant qu'éditeurs.</p>
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
        <p>Skill Project vous est présenté par 3 amis habitant Paris, France. Nous partageons une passion pour l'apprentissage, la formation et l'innovation qui nous a naturellement mené vers Skill Project. Et sinon, nous provenons de cultures et de backgrounds gastronomiques différents ! Venez nous rencontrer dans la <a href="<?= \Config\Config::VANILLA_URL?>" title="<?= _("Skill Project's Community"); ?>">section communautaire</a>.
        </p>
        <div class="project-col">
            <div id="dario-pic" class="team-pic"></div>
            <h4>DARIO SPAGNOLO</h4>
            <p>Dario was born in Italy and is a self-taught computer enthusiast since he was 7. He founded and ran a website agency in Paris for 7 years before focusing on Skill Project. He is also the founder of Open du Web, a regular event in Paris where talented people can show off their web-related skills. Dario is also furiously jealous of Guillaume’s nickname.</p>
        </div>
        <div class="project-col">
            <div id="guillaume-pic" class="team-pic"></div>
            <h4>GUILLAUME SYLVESTRE</h4>
            <p>Guillaume est né au Québec, Canada. Développeur et formateur web passionné, il est tombé en amour avec PHP et les bases de données sexy, il y a de ça 8 ans. Il est connu sous le nom de SkillBill sur Skill Project.</p>
        </div>
        <div class="project-col">
            <div id="raphael-pic" class="team-pic"></div>
            <h4>RAPHAEL BOUSQUET</h4>
            <p>Raphael est français, mais il adore parler latin comme ça : Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        </div>
    </div>
</section>