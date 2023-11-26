<?php

// Create the "users" table if it doesn't exist
if (!R::testConnection()) {
	echo 'creating table...';
    R::freeze(false);
    R::exec('CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT,
        password TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )');
    R::freeze(true);
}

// Check if the user already exists
$user = R::findOne('users', 'username = ?', ['asdf']);
if ($user === null) {
    // User doesn't exist, create a new one
    $user = R::dispense('users');
    $user->username = 'asdf';
    $user->password = password_hash('asdf', PASSWORD_BCRYPT);
    R::store($user);
    echo "User seeded successfully.";
} else {
    echo "User already exists.";
}
?>

