<?php
define('ROOT_PATH', dirname(__DIR__) . '/');

include '../vendor/autoload.php';
R::setup('sqlite:your_database.sqlite3'); // Replace with your own database configuration
function runSeeders($path)
{
    // Get all PHP files in the seeders folder
    $files = glob($path . '/*.php');

    // Iterate over each seeder file and execute it
    foreach ($files as $file) {
        require $file;
    }
}

// Run seeders from the "seeders" folder
$seedersPath = __DIR__ . '/seeders';
runSeeders($seedersPath);
?>
