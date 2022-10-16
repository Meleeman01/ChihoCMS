<script>
    export let booksa;
    import { onMount } from 'svelte';
    let books = undefined;
        console.log(books);
    let selectedBook;

    async function displayBookPages(e) {
        // request the first 10 and get the count, create pagination
        const res = await fetch(`/admin/pages?book=${selectedBook}&index=1&page=1`);
        console.log(await res.json());
    }

    onMount(async () => {
        const res = await fetch(`/admin/books`);
        books = await res.json();
        console.log(books);
    });
</script>

<div>
    <h2>Books</h2>
    {#if !books}
    <h3>no books yet!</h3>
    {:else}
        <select bind:value={selectedBook} on:change="{()=>displayBookPages()}">
        <option selected>--choose book--</option>
        {#each books as book}
            <option>{book.title}</option>
        {/each}
        </select>
    {/if}
</div>

<style>
    
</style>