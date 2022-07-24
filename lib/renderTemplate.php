<?php
$settings = array(
    'views' => 'views',
    'template' => 'layouts/default'
);

function set(string $name, $value = null ) {
        global $settings;
        if (func_num_args() == 1)
        {
            // getter
            return array_key_exists($name, $settings)
                ? $settings[$name]
                : null;
        }

        // setter
        $settings[$name] = $value;

        //return $this;
}

function render(string $view, array $locals=null): void
{
    error_log('Application render() called.');
    error_log($view." view according to render");

    if (!empty($locals))
    {
        error_log('
            extracting locals');
        extract($locals);
    }
    $layout = sprintf("%s/%s.php", set("views"), $view);
    $_template = sprintf("%s/%s.php", set("views"), set("template"));
    if (is_file($_template))
    {
        include $_template;
    } else {
        include $layout;
    }
}

// function back(array $locals=null) {
//     if (!empty($locals))
//     {
//         error_log('
//             extracting locals');
//         extract($locals);
//     }
    

//     header('Location: '.$_SERVER['HTTP_REFERER']);
// }

function json(array $data) 
{
    header('Content-type: application/json');
    echo json_encode($data);

    exit();
}