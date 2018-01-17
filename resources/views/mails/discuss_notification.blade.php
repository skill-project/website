<?php 
	////////////////
	//English version
	////////////////
	if ($language == "en") { 
?>
<p>Hi <?=$name?>!</p>

<?php if ($type == "owner") { ?>
<p>Just a quick word to let you know that <?=$currentUser?> just commented on one of the skills you created, "<a href='<?=$skillUrl?>'><?=$skillName?></a>".</p>

<?php } elseif ($type == "userInDiscussion") { ?>
<p>Just a quick word to let you know that <?=$currentUser?> is also discussing the skill "<a href='<?=$skillUrl?>'><?=$skillName?></a>".</p>
<?php } ?>



<p>This is <?=$currentUser?>'s comment:</p>

<p>
<em><?=$message?></em>
</p>

<?php 
	////////////////
	//French version
	////////////////
	} elseif ($language == "fr") { 
?>
<p>Bonjour <?=$name?> !</p>

<?php if ($type == "owner") { ?>
<p>Juste un mot rapide pour vous informer que <?=$currentUser?> vient d'ajouter un commentaire à la compétence que vous avez créée, "<a href='<?=$skillUrl?>'><?=$skillName?></a>".</p>

<?php } elseif ($type == "userInDiscussion") { ?>
<p>Juste un mot rapide pour vous informer que <?=$currentUser?> est également en train de commenter la compétence "<a href='<?=$skillUrl?>'><?=$skillName?></a>".</p>
<?php } ?>

<p>Voici le message de <?=$currentUser?> :</p>

<p>
<em><?=$message?></em>
</p>


<?php } ?>