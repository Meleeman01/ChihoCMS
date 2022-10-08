<?php

function authCheck(){
    //var_dump(verifyToken($_SESSION['user']));
    error_log(json_encode($_SESSION));
    if (!empty($_SESSION['user'])) {
        return true;
    }
    else {
        return false;
    }
}

function authRedirect() {
    error_log(json_encode($_SESSION));
    if (empty($_SESSION['user'])) {
        header('Location:/login');
        die();
    }
}