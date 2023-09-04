<script>
    import AsyncTableColumn from "./asynctablecolumn.svelte";

    export let table
    export let title
    // a list of available (pushable, active) buttons.
    // ボタンを作るのは自由だが、availableに含まれていなければ押せない。
    export let available
    // 上端の時刻. 分単位(時刻は60倍する)の整数
    export let startminute
    </script>



<table>
    <tbody>
        <tr class='header'>
            <th colspan=99 class='corner'>
                {title}
            </th>
        </tr>
        <tr class='header'>
            <slot></slot>
        </tr>
        <tr class='top'>
            {#each table as column, i}
            <td class="column">
                <AsyncTableColumn {column} {available} {startminute} on:search/>
            </td>
            {/each}
        </tr>
    </tbody>
</table>

<style>
    .top {
        vertical-align: top;
        background: repeating-linear-gradient(
            0deg,
            #ffffff,
            #ffffff 120px,
            #e0e0ff 120px,
            #e0e0ff 240px
        );
    }
    table {
        display: flex;
        justify-content: start;
        flex-direction: row;
        border: 0px;
        cellspacing: 0px;
    }
</style>
