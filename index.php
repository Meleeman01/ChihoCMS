<?php
define('ROOT_PATH', dirname(__DIR__) . '/');

include 'vendor/autoload.php';
require_once 'config.php';

require_once 'storage/log.php';
//include basic template engine and router
require_once 'lib/tokens.php';
require_once 'lib/sanitize.php';
require_once 'lib/renderTemplate.php';
require_once 'lib/router.php';
//include all our models and controllers
require_once 'models/model.php';
require_once 'controllers/controller.php';

session_set_cookie_params([
            'lifetime' => 600,
            'path' => '/',
            'domain' => $_SERVER['HTTP_HOST'],
            'secure' => true,
            'httponly' => false,
            'samesite' => 'lax'
        ]);

session_start();
//define our routes here
route('/',function(){
    return render('main');
});

route('/login',function(){
    //renderLogin
    return renderLogin();
});

route('/login/post',function(){
    return postLogin();
});

route('/logout',function(){
    return logout();
});

route('/register/post',function(){
    return postRegister();
});

route('/admin',function(){
    return index();
});


$action = $_SERVER['REQUEST_URI'];
dispatch($action);
