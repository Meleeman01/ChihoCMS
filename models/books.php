<?php
    include 'config.php';

    $books = R::dispense('books');
    error_log(printf($books));

?>