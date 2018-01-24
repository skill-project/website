
<table>
    <tr>
        <td>User id</td>
        <td><?= Session::get('user')['uuid'] ?></td>
    </tr>
    <tr>
        <td>Username</td>
        <td><?= Session::get('user')['username'] ?></td>
    </tr>
    <tr>
        <td>Email</td>
        <td><?= Session::get('user')['email'] ?></td>
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
