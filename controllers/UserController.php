<?php
use Carbon\Carbon;
use Respect\Validation\Validator as v;

//maybe use a setup script instead?

function checkIfRegisteredAlready(){
    try {
        $user = R::load('user', 1);
    }
    catch(PDOException $e) {
        error_log($e);
        return false;
    }
    
    error_log($user);

    if (!empty($user)) {
        return true;
    }
    else {
        return false;
    }
}

function logout() {
    session_destroy();
    header('Location:/login');
        die();
}


function renderLogin(){
    var_dump($_SESSION);
    $isRegisteredAlready = checkIfRegisteredAlready();
    error_log($isRegisteredAlready);
    return render('loginRegister', compact('isRegisteredAlready'));
}

function postLogin() {
    
    $request = getJsonRequest();
    
    error_log($request['username']);
    $sanitized = sanitize($request,['username'=>'string','password'=>'string']);

    if (empty($sanitized['username'])) {
        return json(['error'=>'wow thewes no uwusewrname 0w0']);
    }
    else if (empty($sanitized['password'])) {
        return json(['error'=>'thewes no passwowd 0w0']);
    }
    else {
        
        try {
            $user = R::load('user', 1);
            error_log($user);
        }
        catch(PDOException $err){
            return json(['error'=> $err]);
        }
        error_log(json_encode($user));

        if (!password_verify($sanitized['password'], $user->password)) {
            return json(['error'=>'incowwect passwowd 0w0']);
        }
        else {
            $token = generateToken();
            error_log('usertoken here.');

            $_SESSION['user'] = $token;
            error_log(json_encode($_SESSION));
            return json(['success'=>'welcome user.']);
        }
        error_log('made it here.');

        return json(['success'=>'welcome user.']);

    }


    var_dump($user);
    return 'nah Bro.';
}

function postRegister() {
    
    $isRegisteredAlready = checkIfRegisteredAlready();
    $request = getJsonRequest();
    
    error_log($request['username']);
    $sanitized = sanitize($request,['username'=>'string','password'=>'string','password_confirm'=>'string']);

    if (empty($request['username'])) {
        return json(['error'=>'wow thewes no uwusewrname 0w0']);
    }
    else if (empty($request['password'])) {
        return json(['error'=>'thewes no passwowd 0w0']);
    }
    else if (empty($request['password_confirm'])) {
        return json(['error'=>'thewes no passwowd_confiwm 0w0']);
    }
    else if ($sanitized['password'] != $sanitized['password_confirm']) {
        return json(['error'=>'passwowds don\'t match 0w0']);
    }
    else if ($isRegisteredAlready) {
        return json(['error'=>'awweady wegistered. pwease wogin 0w0']);
    }
    else {
        //TODO make a migration script, to make sure the id is 1.
            $date = new Carbon();

            $user = R::dispense( 'user' );
            $user->username = $sanitized['username'];
            $user->password = password_hash($sanitized['password'], PASSWORD_DEFAULT);
            $user->created_at = $date->toDateTimeString();
            $user->updated_at = $date->toDateTimeString();
            R::store($user);
            error_log(json_encode($user));
            return json(['success'=>'all fields match. redirecting...']);
        }


    

    return 'register endpoint';
}

