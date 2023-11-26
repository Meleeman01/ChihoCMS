<?php


// Define the schema for the "chapters" table
R::freeze(false); // Unfreeze the schema for modification

// Create the "chapters" table if it doesn't exist
if (!R::testConnection()) {
    R::exec('CREATE TABLE IF NOT EXISTS chapters (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        book_id INTEGER,
        title TEXT,
        description TEXT,
        sort_order INTEGER,
        is_displayed INTEGER
    )');
}

// Seed chapters for books
$chapters = [
    // Book 1
    [
        'book_id' => 1,
        'title' => 'Unchaptered',
        'description' => 'This chapter does not belong to any specific book.',
        'sort_order' => 1,
        'is_displayed' => 1
    ],
    // Book 2
    [
        'book_id' => 2,
        'title' => 'Chapter 1',
        'description' => 'Description of Chapter 1 for Book 2.',
        'sort_order' => 1,
        'is_displayed' => 1
    ],
    [
        'book_id' => 2,
        'title' => 'Chapter 2',
        'description' => 'Description of Chapter 2 for Book 2.',
        'sort_order' => 2,
        'is_displayed' => 1
    ],
    // Book 3
    [
        'book_id' => 3,
        'title' => 'Chapter 1',
        'description' => 'Description of Chapter 1 for Book 3.',
        'sort_order' => 1,
        'is_displayed' => 1
    ],
    [
        'book_id' => 3,
        'title' => 'Chapter 2',
        'description' => 'Description of Chapter 2 for Book 3.',
        'sort_order' => 2,
        'is_displayed' => 1
    ],
    [
        'book_id' => 3,
        'title' => 'Chapter 3',
        'description' => 'Description of Chapter 3 for Book 3.',
        'sort_order' => 3,
        'is_displayed' => 1
    ],
];

foreach ($chapters as $chapterData) {
    $chapter = R::dispense('chapters');
    $chapter->book_id = $chapterData['book_id'];
    $chapter->title = $chapterData['title'];
    $chapter->description = $chapterData['description'];
    $chapter->sort_order = $chapterData['sort_order'];
    $chapter->is_displayed = $chapterData['is_displayed'];
    R::store($chapter);
}

R::freeze(true); // Freeze the schema after modification

echo "Chapter seeder executed successfully.\n";
?>
