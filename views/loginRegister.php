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
    <div class="flx(wrap,column) center middle is-half" >
        <form class="flx(wrap,column) is-2" style="background: #ccc; border-radius: 2rem; padding: 1rem 2rem;">
            <label>UserName</label>
            <input class="padme marginme" type="text" name="username" placeholder="Chiho Sasaki">
            <label>Password</label>
            <input class="padme marginme" type="password" name="password" placeholder="Maou-kun">
            <label>Password Confirm</label>
            <input class="padme marginme" type="password" name="password_confirm" placeholder="Maou-kun" >
            <button id="submit" class="btn is-primary marginme" >submit</button>
        </form>
        <div class="hidden error" style="margin-top:2rem;">
            <div class="btn is-error is-round"></div>
        </div>
    </div>
    <?php else :?>
        <h2>login</h2>
        <div class="flx(wrap,column) center middle is-half" >
        <form class="flx(wrap,column) is-2" style="background: #ccc; border-radius: 2rem; padding: 1rem 2rem;">
            <label>UserName</label>
            <input class="padme marginme" type="text" name="username" placeholder="Chiho">
            <label>Password</label>
            <input class="padme marginme" type="password" name="password" placeholder="Maou-kun">
            <button id="submit" class="btn is-primary marginme">submit</button>
        </form>
        <div class="hidden error" style="margin-top: 2rem;">
            <div class="btn is-error is-round"></div>
        </div>
    </div>
    <?php endif ;?>
    <script>
        let submit = document.querySelector('#submit');
        let form = document.querySelector('form');

        async function postData(url = '',data = {}) {
            const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        

        submit.addEventListener('click',async function(e) {
            e.preventDefault();

            let data = {};
            let inputs = form.querySelectorAll('input');
            let errorMessage = document.querySelector('.error');
            errorMessage.classList.add('hidden');
            for (let input of inputs) {
                data[input.name] = input.value;
            }
            <?php if (!$isRegisteredAlready) : ?>
            const response = await postData('register/post',data);
            console.log(response);
            if (response.success) {
                errorMessage.classList.remove('hidden');
                errorMessage.innerHTML =`<div class="btn is-info is-round"><span>${response.success}</span></div>`;
                setTimeout(function() {
                    window.location.reload();
                },1500);
            }
            <?php else :?>
                const response = await postData('login/post',data);
                console.log(response);
                if (response.success) {
                errorMessage.classList.remove('hidden');
                errorMessage.innerHTML =`<div class="btn is-info is-round"><span>${response.success}</span></div>`;
                setTimeout(function() {
                    window.location.href = '/admin';
                    errorMessage.classList.add('hidden');
                },500);
            }
            <?php endif ;?>
            if (response.error ) {
                console.log(errorMessage);
                errorMessage.classList.remove('hidden');
                errorMessage.querySelector('.is-error').innerHTML =`<span>${response.error}</span>`;
            }

            
        });
    </script>
    <script src="public/js/main.js"></script>
</body>
</html>