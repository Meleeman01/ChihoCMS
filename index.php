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
error_log(session_status());

//Sometimes this doesn't start so calling session start once helps.
if (session_status() == PHP_SESSION_NONE) {
    error_log('starting session..');
    session_start();
}

session_set_cookie_params([
    'lifetime' => 600,
    'path' => '/',
    'domain' => $_SERVER['HTTP_HOST'],
    'secure' => true,
    'httponly' => false,
    'samesite' => 'lax'
]);

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
//admin routes here
route('/admin',function(){
    return index();
});

route('/admin/books', function(){
    return getBooks();
});

route('/admin/pages',function(){
    return getPages();
});

route('/admin/update-pages',function(){
    return updatePageFromBookView();
});


$action = $_SERVER['REQUEST_URI'];
dispatch($action);
