<script>
    export let books;

    
        console.log(books);
    
</script>

<div>
    {#if !books}
    <p>no books yet!</p>
    {:else}
    <p>books here</p>
    {/if}
</div>

<style>
    
</style>