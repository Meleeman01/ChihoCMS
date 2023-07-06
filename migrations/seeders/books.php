<?php


// Define the schema for the "books" table
R::freeze(false); // Unfreeze the schema for modification

// Create the "books" table if it doesn't exist
if (!R::testConnection()) {
    R::exec('CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        description TEXT,
        sort_order INTEGER,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        is_finished INTEGER,
        publish_frequency TEXT
    )');
}

// Insert books
$books = [
    [
        'title' => 'Book 1',
        'description' => 'Description 1',
        'sort_order' => 1,
        'is_finished' => 1,
        'publish_frequency' => 'Weekly'
    ],
    [
        'title' => 'Book 2',
        'description' => 'Description 2',
        'sort_order' => 2,
        'is_finished' => 0,
        'publish_frequency' => 'Monthly'
    ],
    [
        'title' => 'Book 3',
        'description' => 'Description 3',
        'sort_order' => 3,
        'is_finished' => 1,
        'publish_frequency' => 'Daily'
    ],
];

foreach ($books as $bookData) {
    $book = R::dispense('books');
    $book->title = $bookData['title'];
    $book->description = $bookData['description'];
    $book->sort_order = $bookData['sort_order'];
    $book->is_finished = $bookData['is_finished'];
    $book->publish_frequency = $bookData['publish_frequency'];
    R::store($book);
}

R::freeze(true); // Freeze the schema after modification

echo "Book seeder executed successfully.\n";
?>
