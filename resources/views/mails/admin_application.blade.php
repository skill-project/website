
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
