
<?php
$routes = [];
/**
 * Register a new route
 *
 * @param $action string
 * @param \Closure $callback Called when current URL matches provided action
 */
function route($action, Closure $callback)
{
    global $routes;
    $action = trim($action, '/');
    $routes[$action] = $callback;
}



/**
 * Dispatch the router
 *
 * @param $action string
 */
function dispatch($action)
{
    global $routes;
    //trim action from server $request uri
    $action = trim($action, '/');
    if (!array_key_exists($action, $routes)) {
        //if the none of the defined routes are found, return 404
        error_log('not in arry.');
        echo call_user_func($routes['404']);
    }
    else {
        $callback = $routes[$action];
        echo call_user_func($callback);
    }
}

//default route 404
route('404',function(){return '404 not found.';});