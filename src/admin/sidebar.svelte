<script>
    import BookMultiple from 'svelte-material-icons/BookMultiple.svelte';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

</script>

<div class="lol flx(column) is-3 padme">
    <div>
        <h3>comic pages</h3>
        <p on:click={()=>dispatch('getBooks')} class="flx middle"><span class="flx(wrap) middle"><BookMultiple size="1.25rem" color="black"/></span>Book View</p>
    </div>
    
    <div>asdf</div>
    <div>archive Settings</div>
</div>

<style>
    .lol {
        border-right: orange dotted 3px;

    }
    p {
        margin-left: 1rem;
        cursor: pointer;
    }
</style>