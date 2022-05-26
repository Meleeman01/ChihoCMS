<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="public/css/main.css">
    <title></title>
</head>
<body>

    <h1>Login Page ig.</h1>

    <?php if (!$isRegisteredAlready) : ?>
        <h2>Register Your Application</h2>
    <div class="flx(wrap) center middle is-half" >
        <form class="flx(wrap,column) is-2" action="login/post" method="POST" style="background: #ccc; border-radius: 2rem; padding: 1rem 2rem;">
            <label>UserName</label>
            <input class="padme marginme" type="text" name="username" value="test">
            <label>Password</label>
            <input class="padme marginme" type="password" name="password" value="test">
            <label>Password Confirm</label>
            <input class="padme marginme" type="password" name="password_confirm" value="test">
            <button class="btn is-primary" type="submit">submit</button>
        </form>
    </div>
    <?php else :?>
        <h2>login</h2>
        <div class="flx(wrap) center middle is-half" >
        <form class="flx(wrap,column) is-2" action="login/post" method="POST" style="background: #ccc; border-radius: 2rem; padding: 1rem 2rem;">
            <label>UserName</label>
            <input class="padme marginme" type="text" name="username" value="test">
            <label>Password</label>
            <input class="padme marginme" type="password" name="password" value="test">
            <button class="btn is-primary" type="submit">submit</button>
        </form>
    </div>
    <?php endif ;?>
    <script src="public/js/main.js"></script>
</body>
</html>