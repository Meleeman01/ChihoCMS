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

function getChapters(){
    error_log('made it here to chapters');
}
function getPages() {
    error_log('made it to pages');
    //error_log(json_encode($_GET));
    //check for get requests.
    $sanitized = sanitize($_GET,['book'=>'string','index'=>'string','page'=>'string']);
    $book = $sanitized['book'];
    //get the count of pages from the currently selected book.
    //table, column, search find one term.
    $book_id = chihoFindOne('books','title',$book);

    $pages = chihoWhere('pages','book_id','=',$book_id->id);
    error_log(json_encode($pages));
    error_log(json_encode($book_id));
    //R::exec('SELECT * from pages where ')
    error_log(json_encode($sanitized));
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