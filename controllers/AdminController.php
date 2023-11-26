<?php
use Carbon\Carbon;
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
    if (!authCheck()) {
        authRedirect();
    }
    $books = R::getAll('select * from books');
    //return json

    return json($books);
}

function getChapters(){
    error_log('made it here to chapters');
}

function getPages() {
    error_log('made it to pages');
    //check for get requests.
    $pageCount=null;
    $sanitized = sanitize($_GET,['book'=>'string','results_count'=>'string','page'=>'string','sort'=>'string']);
    $resultCount = intval($sanitized['results_count']);
    $book = $sanitized['book'];
    $pagination = ['page'=>$sanitized['page'],'results_count'=>$resultCount];
    //get the count of pages from the currently selected book.
    //table, column, search find one term.
    $book_id = chihoFindOne('books','title',$book);
    $pages = chihoWhere('pages','book_id','=',$book_id['id'],
        ['pagination'=>$pagination,'sort'=> $sanitized['sort']]);
    $totalBookPages = chihoWhere('pages','book_id','=',$book_id['id'],['count']);

    //calculate total number of pages to display results
    if ($totalBookPages % $resultCount > 0) {
        $pageCount = ceil($totalBookPages/$resultCount);
    }
    else {
        $pageCount = ($totalBookPages/$resultCount);
    }
    $pages[] = ['pagination' =>['results'=>$totalBookPages,'pages'=> $pageCount]];
    return json($pages);
}

function updatePageFromBookView() {
    if (!authCheck()) {
        authRedirect();
    }
    $request = getJsonRequest();
    $pages = $request;
    $sanitized = [];
    if (!empty($pages)) {
        foreach ($pages as $page) {
            //maybe refactor this later. might be able to use $_POST
            $sanitized[] = sanitize(
                ['id'=> $page['id'],'title'=>$page['title'],'sort_order'=> $page['sort_order']],
                ['id'=>'string','title'=>'string','sort_order'=>'string']);
        }

        foreach ($sanitized as $page) {
            chihoUpdate('pages',
                [
                    'title'=>$page['title'],
                    'sort_order'=> $page['sort_order']
                ]
            ,$page['id']);
        }
    }
    else {error_log('no pages');}
    
    return json(['success' => 'all pages updated']);

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