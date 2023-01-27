
<script>
    import Menu from './menu';
    import Sidebar from './sidebar';
    import Books from './pages/books';

    let books;
    let showBooks;

    async function getBooks(e) {
        // body...
        showBooks = !showBooks;
        books = undefined;
        console.log('lol getbooks ig.');
    }

</script>

<main>
    <div class="banner flx middle" style="background-image: url('storage/704375.png');">
        <h1 >Welcome to your webcomic backend!</h1>
    </div>
    <Menu />
    <div class="flx is-12">
        <Sidebar on:getBooks={getBooks} />
        <div style="width:100%; padding:1rem;">
            {#if !showBooks}
            <Books />
            {/if}

        </div>
    </div>
</main>

<style>
    main {
        margin: 0 auto;
        max-width: 90vw;
        box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.14) , 0px 1px 10px 0px rgba(0,0,0,0.12) , 0px 2px 4px -1px rgba(0,0,0,0.2);
    }
    .banner {
        padding: 1rem;
        min-height: 15rem;
        background-position: 0rem -16rem;
    }
    .banner h1 {
        font-family: monospace;
        color: white;
        text-shadow: -2px 2px 0 #000,
        2px 2px 0 #000,
                 2px -2px 0 #000;
    }
    .hidden {
        display: none;
        visibility: hidden;
    }
</style>
