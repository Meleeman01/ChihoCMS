<?php

function authCheck(){
    //var_dump(verifyToken($_SESSION['user']));
    if (!empty($_SESSION['user'])) {
        return render('admin/adminPanel');
    }
    else {
        header('Location:/login');
        die();
    }
}

function index() {
    authCheck();
}
