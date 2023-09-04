<script>
    import PosterTableRow from "./postertablerow.svelte";

    export let title;
    export let sessions;
    // 大部屋用ポスター表
</script>

<div>
    <table>
        <tbody>
            <tr class='header'>
                <th colspan='99' class='corner'>
                    {title}
                </th>
            </tr>
            {#each sessions as session}
            <tr>
                <PosterTableRow prefix={session.prefix} items={session.items} on:search />
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    div {
        padding: 5px;
        margin: 0px;
        /* border: solid 1px #888;
        border-radius: 10px; */
    }
    table {
        margin: 0px;
        /* background-color: #ddd; */
    }
    tr.header{
        background-color: #fff;
    }
    th.corner {
        width: 64px;
        font-size: 120%;
        /* padding: 10px 10px 0; */
    }
    tr:nth-child(even) {
        background-color: #e0e0ff;
        /* color: #fff; */
    }
</style>
