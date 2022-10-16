<?php
require 'models/User.php';
require 'models/Books.php';
require 'models/Chapters.php';
require 'models/ComicImages.php';
require 'models/Pages.php';

//redbean custom ORM code

function chihoFindOne($table,$col,$termToSearch) {
	$pdo = R::getPDO();
    $writer = R::getWriter();
    return R::getRow('Select * from'.$writer->esc($table).' WHERE '.$writer->esc($table).'.'.$writer->esc($col).'= '.$pdo->quote($termToSearch).' LIMIT 1',[]);
}

function chihoWhere(){}