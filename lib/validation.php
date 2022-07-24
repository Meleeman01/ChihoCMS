<?php 

function validate(array $arrayItemsToValidate, array $POST) {
    $notFound = [];
    foreach ($arrayItemsToValidate as $item) {
        if (!in_array($POST[$item])) {
            $notFound[] = $item;
        }
    }
    return $notFound;
}