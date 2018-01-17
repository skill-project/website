<form method="POST" action="{{route('pages.edit_profile', Auth::user()->id)}}" enctype="multipart/form-data">
    {{csrf_field()}}
    <div class="profile-section">
        <h3 class="first special"><?= _("PERSONAL INFORMATION"); ?></h3>
        <div class="row">
            <div>
                <label for="username"><?= _("Username") ?></label>
                <input type="text" disabled name="username" id="username" value="<?php echo Auth::user()->username?>" required />
            </div>
            <div class="r">
                <label for="email"><?= _("Email") ?></label>
                <input type="email" disabled name="email" id="email" value="<?php echo Auth::user()->email ?>" required />
            </div>
        </div>
        <div class="row">
            <div>
                <label for="language_ip"><?= _("Languages-s (Comma separated please)") ?></label>
                <input type="text" name="language_ip" id="language_ip" value="" />
            </div>
            <div class="r">
                <label for="country"><?= _("Country") ?></label>
                <input type="text" name="country" id="country" value="" />
            </div>
        </div>
    </div>
    <div class="profile-section">
        <div>
            <label for="interests"><?= _("SKILLS OF INTEREST") ?></label>
            <input type="text" name="interests" id="interests" value="" />
        </div>
    </div>
    <div class="profile-section">
        <label for="job"><?= _("SAY SOMETHING ABOUT YOURSELF"); ?></label>
        <textarea name="job" id="job"></textarea>
    </div>
    <div class="submit-container">
        
        <input class="pink-submit" type="submit" value="<?= _("Save") ?>" />
        <?php
            if (!empty($errors)):
            echo '<div class="errors">';
            foreach($errors as $name => $message){
                echo $message . "<br />";
            }
            echo '</div>';
            endif;
        ?>
    </div>

</form>
