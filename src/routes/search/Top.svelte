<script>
    import { _ } from 'svelte-i18n';
    import Announcements from "./Announcements.svelte";
    import Information from "./information.svelte";
</script>

<div class="panel">
    <h1 class="post-title">{$_("Announcements")}</h1>
    <Announcements />
</div>
<div class="panel">
    <h1 class="post-title">{$_("Overall schedule")}</h1>
    <Information />
</div>


<style>
    .panel {
        background-color: #fff;
        border: 4px solid #fff;
        border-radius: 15px;

        /* for children */
        display: flex;
        flex-flow: row;
        flex-wrap: wrap;
        margin: 5px;
        justify-content: center;
    }
    h1 {
        background-color: #4169E1c0;
        /* #5ab4bd; */
        width: 100%;
        padding: 10px;
        margin: 0px;
        font-size: 120%;
        border-radius: 15px 15px 0px 0px;
        color: white;
    }
</style>
