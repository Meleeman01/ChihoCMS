<?php

    //redbean from config
    /*
        id
        -Title 
        -description
        -sort_order
        -date_created
        -date_modified
        -is_finished
        -publish_frequency
    */
    $books = R::dispense('books');
    
    //$books->title = 'fmlftw';
    //error_log(printf($books .'lol'));
    //R::store($books); //test
?>