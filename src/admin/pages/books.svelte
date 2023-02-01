<script>
    import SquareEditOutline from 'svelte-material-icons/SquareEditOutline.svelte';
    import ContentSave from 'svelte-material-icons/ContentSave.svelte';
    import { onMount } from 'svelte';
    let books = [];
    let selectedBook;
    let selectedSortStrategy = 'sort_order';
    let edit = false;
    let resultsPerPage = 10;

    let pages;
    //keeping track of selected pagination page so we can click on it later.
    let selectedPage;
    let pagination = [];
    let shownPages = [];
    let totalResults;
    let pagesCopy;

    async function displayBookPages(pageNumber=1,e) {
        //if we are displaying via pagination button
        if (e) {
            let paginationButtons = e.target.parentNode.childNodes;
            for (let b of paginationButtons) {
                if (b.style) {
                    b.style.backgroundColor = '';
                }
            }
            selectedPage = e;
            e.target.style.backgroundColor = 'blue';
            e.target.scrollIntoView({inline:"center",behavior:"smooth"});
        }

        // request the first 10 and get the count, create pagination
        const res = await fetch(`/admin/pages?book=${selectedBook}&results_count=${resultsPerPage}&page=${pageNumber}&sort=${selectedSortStrategy}`);
        try {
            pages = await res.json();
            //to compare later so we only update what we need and not all at once.
            //have to use JSON.stringify hack in order to prevent pagesCopy from being mutated by
            //pages when we directly edit the dom.
            pagesCopy = JSON.stringify(pages);
        }
        catch(err){s
            console.log(err);
        }
        pagination = pages.find((p)=>p.pagination);
        if (pagination.pagination.pages != shownPages.length) {
            shownPages = Array(pagination.pagination.pages).fill().map((x,i)=>i);
            totalResults = parseInt(pagination.pagination.results);
        }
    }
    async function changeOrder(e,page){
        page.sort_order = e.target.value;
    }
    function changeTitle(e,page) {
        page.title = e.target.value;
    }

    async function toggleEditSave(){
        console.log('edit save');
        edit = !edit;
        if (!edit) {
            console.log('saving..');
            let originalPages = JSON.parse(pagesCopy);

            //find the difference betweent the copies, then send it to server.
            let data = pages.filter((page,i)=>{
                if(page.title != originalPages[i].title && page.title != undefined || page.sort_order != originalPages[i].sort_order && page.sort_order != undefined) {
                    console.log(page);
                    return page;
                }
            });
            let res = await fetch('/admin/update-pages',{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });

            console.log(await res.json());
            if (!selectedPage) {
                displayBookPages();
            }
            else selectedPage.target.click();
        }
    }

    onMount(async () => {
        const res = await fetch(`/admin/books`);
        books = await res.json();
        console.log(books);
    });
</script>

<div class="flx(column)" >
    <h2>Books</h2>
    {#if !books}
    <h3>no books yet!</h3>
    <button>Create?</button>
    {:else}
        <select  class="is-half dropdown" bind:value={selectedBook} on:change="{()=>displayBookPages()}">
        <option selected>--choose book--</option>
        {#each books as book}
            <option>{book.title}</option>
        {/each}
        </select>

        {#if pages}
        <!--filter here maybe?-->
        <div class="flx(wrap) middle space-between">
            <div class="flx(wrap) middle center">
                <select class="dropdown" bind:value={selectedSortStrategy} on:change="{()=>displayBookPages()}">
                    <option selected>--Sort--</option>
                    <option value="id">ID</option>
                    <option value="sort_order">Sort Order</option>
                    <option value="title">Title</option>
                </select>
                <select class="dropdown" bind:value={resultsPerPage} on:change="{displayBookPages}">
                    {#each Array(100) as _,index }
                        <option>{index+1}</option>
                    {/each}
                </select>
            </div>

            {#if !edit}
            <button on:click={toggleEditSave} class="btn(normal) is-warning flx middle">
                Quick Edit</button>
            {:else}
            <button on:click={toggleEditSave} class="btn(normal) is-success flx middle"><ContentSave/></button>
            {/if}
        </div>
        <div class="grid-container">
            <div class="flx(wrap) middle center">
                <h4>sort order</h4>
            </div>
            <div class="flx(wrap) middle center">
                <h4>title</h4>
            </div>
            <div>

            </div>
            {#each pages as page}
                {#if !page.pagination}
                    {#if !edit}
                    <div class="flx(wrap) middle center">

                        <span>{page.sort_order}</span>
                    </div>
                    <div class="flx(wrap) middle center">
                        <span>{page.title}</span>
                    </div>
                    {:else}
                        <div class="flx(wrap) middle center">
                            <select on:change|self="{(e)=>changeOrder(e,page)}">
                                {#each Array(totalResults) as _,index }
                                <option value="{index+1}">{index+1}</option>
                                    {#if page.sort_order == index+1}
                                        <option value="{index+1}" selected>{index+1}</option>
                                    {/if}
                                {/each}
                            </select>
                        </div>
                    <div class="flx(wrap) middle center">
                        <input on:input|self={(e)=>changeTitle(e,page)} type="text" name="pageTitle" placeholder="{page.title}"/>
                    </div>
                    {/if}
                    <div class="flx(wrap) middle center">
                        <button class="btn(normal) is-success is-round flx middle"><SquareEditOutline /></button>
                    </div>
                {:else}
                    <div class="info flx(wrap) middle center last-grid-item">
                        <p>out of {page.pagination.results} results</p>
                    </div>
                {/if}

            {/each}

        </div>
        <div style="display: flex; width: 15rem; overflow-x: scroll; align-self: center;">
        {#each shownPages as page, index}
            <button on:click={(e)=>displayBookPages(page+1,e,index)} class="btn(normal) is-info pagination">{page+1}</button>

        {/each}
        </div>


        {/if}
    {/if}
</div>

<style>
    .dropdown {
        height: 2.5rem;
        margin-bottom: 1rem;
    }
    .dropdown > option {
        padding: 10px;
        font-size: 18px;
        height: 2.5rem;
    }
    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-auto-rows: auto;
        grid-row-gap: .5rem;
    }
    .last-grid-item {
        grid-column-start: 1;
        grid-column-end: 4;
    }
    .pagination {
        margin-left: .2rem;
    }
    .pagination:hover {
        background-color: blue;
    }

    input, input[placeholder] {
        font-size: 18px;
        text-align: center;
    }


    /* Works on Firefox */
* {
  scrollbar-width: normal;
  scrollbar-color: hsl(203deg, 77%, 43%) #fefefe;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
    width: 1px;
}

*::-webkit-scrollbar-track {

  background:#fefefe;
}

*::-webkit-scrollbar-thumb {
  background-color:hsl(203deg, 77%, 43%);
  border-radius: 20px;
  border: 2px #fefefe solid;
}

</style>
