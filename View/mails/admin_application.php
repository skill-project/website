<html>
    <head>
        
    </head>
    <body margin="0" padding="0" style="margin: 0; padding: 0;">
        <center>
        <table cellpadding="0" callmargin="0">
            <tr>
                <td></td>
                <td width="600" style="width: 600px;">
                    <a href="<?= $GLOBALS['base_url']; ?>/" title="SKILL PROJECT">
                        <img src="<?= $GLOBALS['base_url']; ?>/img/SKP-mail-header.png" alt="SKILL PROJECT" />
                    </a>
                    <table cellpadding="0" callmargin="0">
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td width="10" style="width: 10px;"></td>
                            <td width="580" style="width: 580px; font-family: Verdana; font-size: 11px;"> 
                                
                                <table>
                                    <tr>
                                        <td>User id</td>
                                        <td><?= $loggedUser->getUuid() ?></td>
                                    </tr>
                                    <tr>
                                        <td>Username</td>
                                        <td><?= $loggedUser->getUsername() ?></td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td><?= $loggedUser->getEmail() ?></td>
                                    </tr>
                                    <?php
                                        foreach($params as $key => $value):
                                            if (is_string($value)):
                                    ?>
                                    <tr>
                                        <td><?= $key ?></td>
                                        <td><?= $value ?></td>
                                    </tr>
                                    <?php endif; endforeach; ?>
                                    <tr>
                                        <td>Date sent</td>
                                        <td><?= date("Y-m-d H:i:s") ?></td>
                                    </tr>
                                </table>

                            </td>
                            <td width="10" style="width: 10px;"></td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                        </tr>
                    </table>
                    <table cellpadding="0" callmargin="0" width="600" style="width: 600px;">
                        <tr>
                            <td style="background-color: #282828;">
                                <a href="<?= $GLOBALS['base_url']; ?>/" title="SKILL PROJECT">
                                    <img src="<?= $GLOBALS['base_url']; ?>/img/logo-header.png" alt="Skill Project" />
                                <a href="<?= $GLOBALS['base_url']; ?>/" title="SKILL PROJECT">
                            </td>
                        </tr>
                    </table>
                    
                </td>
                <td></td>
            </tr>
        </table>
        </center>
    </body>
</html>