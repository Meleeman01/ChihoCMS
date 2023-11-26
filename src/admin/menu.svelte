<script>
    import version from '../../package.json';
    import Logout from 'svelte-material-icons/Logout.svelte';
    import Eye from 'svelte-material-icons/Eye.svelte';

    let title = `Chiho CMS ${version.version}`;

</script>

<div class="menu flx(wrap) middle space-between padme">
    <div class="title is-5">
        <span>{title}</span> 
    </div>

    <div class="is-5 flx middle right">
        <a class="flx(wrap) middle center is-1" href="/"><span class="flx middle"><Eye size="1.25rem" color="black"/></span>View Site</a>
        <a class="flx(wrap) middle center is-1" href="/logout"><span class="flx middle"><Logout size="1.25rem" color="black"/></span>Logout</a>
    </div>
    
</div>

<style>
    .title {
        color: white;
        font-weight: bold;
    }
    .menu {
        background-color: #fca311;

    }
    span {
        margin-right: .25rem;
    }

    a {
        margin-right: 1rem;
    }
</style>