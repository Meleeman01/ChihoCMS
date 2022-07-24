<?php

function generateToken()
{
    $hash = password_hash(bin2hex(openssl_random_pseudo_bytes(16)),PASSWORD_DEFAULT);
    try{
        $securityToken = R::load('token',1);
    }catch(PDOException $err) {
        error_log($err);
    }
    $securityToken->hash = $hash;
    R::store($securityToken);
    return $hash;
}

function regenerateSession() {
    if (isset($_SESSION['user'])) {
        error_log($_SESSION['user']);
        $_SESSION['user'] = generateToken();
        session_regenerate_id();
        error_log($_SESSION['user']);
        //var_dump($_SESSION);
    }
}

function verifyToken($token) {
    try{
        $securityToken = R::load('token',1);
    }catch(PDOException $err) {
        error_log($err);
    }
    

    if ($token == $securityToken->hash) {
        return true;
    }
    else {
        return false;
    }
}