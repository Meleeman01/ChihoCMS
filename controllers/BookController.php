<?php


function BookController($req,$res) {
    if ($req) {
        error_log('request is here');
    }
    if ($res) {
        error_log('response is here');
    }
    return [$req , $res];
}