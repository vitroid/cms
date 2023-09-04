<script>
    import PosterButton from "./posterbutton.svelte";
    export let prefix;
    export let items;

</script>

<th>
    {prefix}
</th>
<td>
    <div class="container">
        {#each items as item}
            <PosterButton {prefix} {item} on:search />
        {/each}
    </div>
</td>

<style>
    .container {
        display: flex;
        justify-content: start;
        flex-direction: row;
        flex-wrap: wrap;
        /* margin: 5px; */
    }
    th {
        background-color: #ccc8;
    }
    td {
        width: auto;
    }
</style>
