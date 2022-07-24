<?php



/*
$fields = [
    'name' => 'string',
    'email' => 'email',
    'age' => 'int',
    'weight' => 'float',
    'github' => 'url',
    'hobbies' => 'string[]'
];
*/
/*
    $inputs could be $_POST or $_GET
*/
function sanitize(array $inputs,array $fields = []) : array {
    $filters = [
        'string' => FILTER_SANITIZE_STRING,
        'string[]' => [
            'filter' => FILTER_SANITIZE_STRING,
            'flags' => FILTER_REQUIRE_ARRAY
        ],
        'email' => FILTER_SANITIZE_EMAIL,
        'int' => [
            'filter' => FILTER_SANITIZE_NUMBER_INT,
            'flags' => FILTER_REQUIRE_SCALAR
        ],
        'int[]' => [
            'filter' => FILTER_SANITIZE_NUMBER_INT,
            'flags' => FILTER_REQUIRE_ARRAY
        ],
        'float' => [
            'filter' => FILTER_SANITIZE_NUMBER_FLOAT,
            'flags' => FILTER_FLAG_ALLOW_FRACTION
        ],
        'float[]' => [
            'filter' => FILTER_SANITIZE_NUMBER_FLOAT,
            'flags' => FILTER_REQUIRE_ARRAY
        ],
        'url' => FILTER_SANITIZE_URL,
    ];

    if ($fields) {
        $options = array_map(fn($field) => $filters[$field], $fields);
        return filter_var_array($inputs,$options);
    }
}

