<?php

// Define the schema for the "pages" table
R::freeze(false); // Unfreeze the schema for modification

// Create the "pages" table if it doesn't exist
if (!R::testConnection()) {
    R::exec('CREATE TABLE IF NOT EXISTS pages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        book_id INTEGER,
        chapter_id INTEGER,
        images_comic_id INTEGER,
        sort_order INTEGER,
        title TEXT,
        author_post_title TEXT,
        author_post TEXT,
        author_img TEXT,
        transcript TEXT,
        rating TEXT,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_published TEXT,
        is_paywalled INTEGER
    )');
}

// Generate pages
$pages = [];

$books = R::findAll('books');

// Generate pages for each book
foreach ($books as $book) {
    $bookId = $book->id;

    $chapters = R::find('chapters', 'book_id = ?', [$bookId]);

    // Generate pages for each chapter
    foreach ($chapters as $chapter) {
        $chapterId = $chapter->id;

        // Generate 50 pages for each chapter
        for ($i = 0; $i < 50; $i++) {
            $page = R::dispense('pages');
            $page->user_id = 1; // Replace with your logic for user_id
            $page->book_id = $bookId;
            $page->chapter_id = $chapterId;
            $page->sort_order = $i + 1;
            $page->title = "Page Title $i";
            $page->author_post_title = "Author Post Title $i";
            $page->author_post = "Author Post Content $i"."Attack feet behind the x3 couch destwoy couch fwop uvw give attitude hide *cries* when *notices buldge* guests come uvw hopped up on g-g-goofbawws hunt anything that muvs  intentwy snyiff hand  intentwy s-s-stawe at the x3 same spot,  wub face on evewything *looks at you* sweet beast undew the x3 bed chase imaginyawy bugs OwO weave *screams* dead ^w^ anyimaws as gifts chase mice nyeed t-to chase taiw  shake tweat  fwop uvw,  intwigued by the x3 showew c-c-chew ipad powew cowd  make muffins behind the x3 couch make muffins hopped up on g-g-goofbawws chase mice c-c-chew ipad powew cowd .-.-. Weave dead ^w^ anyimaws as gifts attack feet fwop uvw make muffins shake tweat  nyeed t-to chase taiw hunt anything that muvs sweet beast undew the x3 bed chase mice , c-c-chew ipad powew cowd  intentwy s-s-stawe at the x3 same spot  intwigued by the x3 showew give attitude behind the x3 couch hopped up on g-g-goofbawws destwoy couch  intentwy snyiff hand   wub face on evewything, chase imaginyawy bugs OwO hide *cries* when *notices buldge* guests come uvw fwop uvw sweet beast undew the x3 bed hopped up on g-g-goofbawws fwop uvw  wub face on evewything *looks at you* shake tweat .-.-. ";
            $page->author_img = "https://placekitten.com/200/300";
            $page->transcript = "Transcript $i"."Fwop uvw behind the x3 couch give attitude nyeed t-to chase taiw chase mice hopped up on g-g-goofbawws chase imaginyawy bugs OwO weave *screams* dead ^w^ anyimaws as gifts hide *cries* when *notices buldge* guests come uvw, destwoy couch  intentwy snyiff hand  sweet beast undew the x3 bed shake tweat  c-c-chew ipad powew cowd  intentwy s-s-stawe at the x3 same spot fwop uvw make muffins, attack feet  wub face on evewything *looks at you*   intwigued by the x3 showew hunt anything that muvs attack feet c-c-chew ipad powew cowd .-.-. Weave dead ^w^ anyimaws as gifts hopped up on g-g-goofbawws  intentwy snyiff hand  c-c-chew ipad powew cowd  nyeed t-to chase taiw attack feet chase mice  wub face on evewything *looks at you* shake tweat  fwop uvw intentwy s-s-stawe at the x3 same spot,  destwoy couch hunt anything that muvs chase imaginyawy bugs OwO give attitude hide *cries* when *notices buldge* guests come uvw  intwigued by the x3 showew sweet beast undew the x3 bed make muffins fwop uvw, behind the x3 couch give attitude fwop uvw make muffins nyeed t-to chase taiw c-c-chew ipad powew cowd  intentwy s-s-stawe at the x3 same spot  wub face on evewything *looks at you* chase mice. Attack feet hunt anything that muvs nyeed t-to chase taiw behind the x3 couch   intwigued by the x3 showew give attitude  wub face on evewything *looks at you* hopped up on g-g-goofbawws weave *screams* dead ^w^ anyimaws as gifts c-c-chew ipad powew cowd , sweet beast undew the x3 bed chase mice shake tweat  destwoy couch chase imaginyawy bugs OwO hide *cries* when *notices buldge* guests come uvw  intentwy snyiff hand  fwop uvw intentwy s-s-stawe at the x3 same spot. *sweats* Behind the x3 couch  give attitude make muffins c-c-chew ipad powew cowd  shake tweat  destwoy couch intentwy s-s-stawe at the x3 same spot  intwigued by the x3 showew, hopped up on g-g-goofbawws hunt anything that muvs  intentwy snyiff hand  hide *cries* when *notices buldge* guests come uvw weave *screams* dead ^w^ anyimaws as gifts  wub face on evewything *looks at you* chase imaginyawy bugs, nyeed t-to chase taiw attack feet fwop uvw chase mice sweet beast undew the x3 bed fwop uvw hide *cries* when *notices buldge* guests come uvw.";
            $page->rating = "Rating $i";
            $page->date_published = "2023-07-01"; // Replace with your desired date
            $page->is_paywalled = random_int(0, 1);
            $pages[] = $page;
        }
    }
}

// Store all generated pages
R::storeAll($pages);

R::freeze(true); // Freeze the schema after modification

echo "Page seeder executed successfully.\n";
?>
