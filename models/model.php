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

function chihoWhere($table,$col,$op='=',$termToCheck,$options=[]) {
	$pdo = R::getPDO();
    $writer = R::getWriter();
    //check that op is = > or < 
    $operations = ['=','<','>'];
    $sort = '';
    if (!in_array($op, $operations)) {
    	error_log('operation is not valid. use < = or >');
    	return;
    }

    if (!empty($options)) {
        $results = null;
        if (array_key_exists('pagination',$options)) {
            error_log(json_encode($options['pagination']));
            $offset = ($options['pagination']['page']-1)*$options['pagination']['results_count'];
            $resultCount = $options['pagination']['results_count'];
            error_log($offset);

            if (array_key_exists('sort',$options) and $options['sort'] != 'undefined') {
                error_log($options['sort']);
                try{
                    $results =  R::getAll('Select * from'.$writer->esc($table).' WHERE '.$writer->esc($col).$op.$pdo->quote($termToCheck).'ORDER BY '.$writer->esc($options['sort']).'LIMIT '.$pdo->quote($resultCount).' offset '.$pdo->quote($offset));
                }
                catch(Exception $err){
                    error_log($err);
                }
                return $results;
            }
            else {
                try{
                    $results =  R::getAll('Select * from'.$writer->esc($table).' WHERE '.$writer->esc($col).$op.$pdo->quote($termToCheck).'ORDER BY id '.'LIMIT '.$pdo->quote($resultCount).' offset '.$pdo->quote($offset));
                }
                catch(Exception $err){
                    error_log($err);
                }
                return $results;
            }
            
        }
        else if (in_array('count',$options)) {
            $count = R::getAll('Select Count(*) from'.$writer->esc($table).' WHERE '.$writer->esc($col).$op.$pdo->quote($termToCheck));
            return $count[0]['Count(*)'];
        }
    }

    return R::getAll('Select * from'.$writer->esc($table).' WHERE '.$writer->esc($col).$op.$pdo->quote($termToCheck));
}


function chihoUpdate($table,$cols = [],$id) {
    error_log($id);
    error_log($table);
    error_log(json_encode($cols));
    $pdo = R::getPDO();
    $writer = R::getWriter();

    $colString = '';
    foreach($cols as $k=>$v) {
        error_log($k);
        $colString .= $writer->esc($k).'='. $pdo->quote($v).',';
    }
    $colString = rtrim($colString,',');

    error_log($colString);
    

    return R::exec('Update '.$writer->esc($table).' SET '.$colString.' where id='.$pdo->quote($id));
}