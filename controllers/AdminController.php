<?php

require_once 'middleware/auth.php';

function index() {
    if (authCheck()) {
        render('admin/adminPanel');
        die();
    }
    else {
        authRedirect();
    }
}

function getBooks() {
    error_log('made it to getbooks');
    if (!authCheck()) {
        authRedirect();
    }
    $books = R::getAll('select * from books');
    //return json
    error_log(json_encode($books));

    return json($books);
}

function createBook() {
    if (!authCheck()) {
        authRedirect();
    }

    validate(['title','description']);
    $request = getJsonRequest();
    error_log($request['title']);
    $sanitized = sanitize($request,['title'=>'string','description'=>'string']);
    
    $book = R::dispense('book');

}