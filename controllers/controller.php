<?php
//write token to db, then get db token to compare with other token.
function getJsonRequest() {
    $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
        /* Send error to Fetch API, if unexpected content type */
    if ($contentType !== "application/json")
      die(json_encode([
        'value' => 0,
        'error' => 'Content-Type is not set as "application/json"',
        'data' => null,
      ]));

    /* Receive the RAW post data. */
    $content = trim(file_get_contents("php://input"));

    /* $decoded can be used the same as you would use $_POST in $.ajax */
    $decoded = json_decode($content, true);
    //check if a session is set, if so, then generate a new token.


    /* Send error to Fetch API, if JSON is broken */
    if(! is_array($decoded)){
        die(json_encode([
        'value' => 0,
        'error' => 'Received JSON is improperly formatted',
        'data' => null,
      ]));
    }
    else {
        return $decoded;
    }
}


include 'controllers/BookController.php';
include 'controllers/UserController.php';
include 'controllers/AdminController.php';