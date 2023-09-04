<script>
    import SessionButton from "./sessionbutton.svelte";
    export let sessions
    export let button_titles=[]
    // export let timebin
    export let starttime
    export let slot

</script>

<tr class='row'>
    <th class='row'>
        {slot}
    </th>
    {#each sessions as session, i}
    <td class="row">
    <SessionButton title={button_titles[i]} id={session+"-"+("00"+slot).slice(-2)} on:search />
    </td>
    {/each}
    <th class='row'>
        {starttime}
    </th>
</tr>

<style>
    td.row {
        text-align: center;
        padding: 0;
        width: 22px;
    }
</style>
