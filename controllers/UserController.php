<?php
//maybe use a setup script instead?

function checkIfRegisteredAlready(){
    try {
        $user = R::find('user', 'id = 1');
    }
    catch(PDOException $e) {
        error_log($e);
        return false;
    }
    

    if (!empty($user)) {
        return true;
    }
    else {
        return false;
    }
}

function renderLogin(){
    $isRegisteredAlready = checkIfRegisteredAlready();
    error_log($isRegisteredAlready);
    return render('loginRegister', compact('isRegisteredAlready'));
}

function postLogin() {
    
    var_dump($user);
    return 'nah Bro.';
}

function postRegisterApplication() {
    
}