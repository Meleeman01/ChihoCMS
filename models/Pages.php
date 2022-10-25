<?php
//redbean from config
/*
    id
    -user_id
    -book_id
    -chapter_id
    -images_comic_id
    -sort_order
    -title
    -author_post_title
    -author_post
    -author_img
    -transcript
    -rating
    -date_created
    -date_modified
    -date_published
    -is-paywalled
*/

$pages = R::dispense('pages');

$pages->user_id = '1';
$pages->book_id = '1';
$pages->chapter_id = '1';
$pages->images_comic_id = '1';
$pages->sort_order = '1';
$pages->title = 'firstPage!';
$pages->author_post_title = 'first Author post!';
$pages->author_post = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
$pages->author_img = 'https://placekitten.com/200/200';
$pages->transcript = 'a description of the web comic goes here. its usually good for robots looking for relevant content and search results';
$pages->rating = '{username:5,userName2:3,usernam3:4,username34:5}'; //show ratings?
$pages->date_created = '';
$pages->date_modified = '';
$pages->date_published = '';
$pages->is_paywalled = '0'
//R::store($pages);