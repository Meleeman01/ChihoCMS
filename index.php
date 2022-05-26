<?php
define('ROOT_PATH', dirname(__DIR__) . '/');

include 'vendor/autoload.php';
require_once 'config.php';
require_once 'storage/log.php';
//include basic template engine and router
require_once 'lib/renderTemplate.php';
require_once 'lib/router.php';
//include all our models and controllers
require_once 'models/model.php';
require_once 'controllers/controller.php';



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

route('/test/admin',function(){
    var_dump($_SERVER);
    var_dump($_POST);
    return 'multilevel route success!';
});

$action = $_SERVER['REQUEST_URI'];
dispatch($action);
