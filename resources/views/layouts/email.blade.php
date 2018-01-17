<html>
    <head>
        <style>
            a, a:hover, a:active, a:visited {
                color: #14AFB7;
                text-decoration: none;
            }
        </style>
    </head>
    <body margin="0" padding="0" style="margin: 0; padding: 0; background-color: #F9F9F9">
        <br />
        <center>
            <table style="width: 600px; border: 1px solid #B5DFE5; background-color: #FFFFFF">
                <tr><td height="20" style="height: 20px;"></td><td></td><td></td></tr>
                <tr>
                    <td width="40" style="width: 40px;"></td>
                    <td width="520" style="width: 520px; text-align: center; font-size: 13px;">
                            <a href="<?= $GLOBALS['base_url']; ?>" title="Skill Project" style="outline: none; color: #14AFB7; text-decoration: none;">
                                <img src="<?= $GLOBALS['base_url']; ?>/img/SKP-logo-email.png" alt="Skill Project" />
                            </a>
                    </td>
                    <td width="40" style="width: 40px;"></td>
                </tr>
                <tr><td height="20" style="height: 20px;"></td><td></td><td></td></tr>
                <tr>
                    <td width="40" style="width: 40px;"></td>
                    <td width="520" style="width: 520px; font-family: Tahoma, Verdana, Arial; text-align: justify; font-size: 13px;">
                        @include('mails.'.$contentFile)
                        <?php include ("../View/mails/".$contentFile); ?>
                        <br /><br />
                        See you soon on <a style="color: #14AFB7;" href="<?= $GLOBALS['base_url']; ?>">Skill Project</a>,<br />
                        The Skill Project Team
                    </td>
                    <td width="40" style="width: 40px;"></td>
                </tr>
                <tr><td height="40" style="height: 40px;"></td><td></td><td></td></tr>

            </table>
        </center>
    </body>
</html>