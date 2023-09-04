<script>
    import { createEventDispatcher,onMount } from 'svelte';
    import { directory, marks } from "../../Components/directory.js";
	const dispatch = createEventDispatcher();

    export let prefix;
    export let row;
    export let order;
    export let items;

    let label
    let active = true;
    let bgcolor = "#888";
    let color = "#000"
    let id;

    onMount(() => {
        const status = $marks[id]
        if (status){
            bgcolor = "#0075ff";
            color = "#fff";
        }
        else{
            bgcolor = "#f0f0f0";
            color = "#000";
        }
        let item = row*10+order;
        active = items.has(item);
        if ( ! active ){
            bgcolor = "#f8f8f8";
            color = "#ddd";

        }
	});

    $: {
        id=prefix + row + order;
        let item = row*10+order;
        active = items.has(item);
        label = "" + row + order
        // const status = $marks[id]

        // if (status){
        //     directory[id].style.backgroundColor = "#0075ff";
        //     directory[id].style.bgcolor = "#fff";
        // }
        // else{
        //     directory[id].style.backgroundColor = "#f0f0f0";
        //     directory[id].style.bgcolor = "#000";
        // }
    }

	function buttonPressed() {
        // invoke signal
		dispatch('search', {
			text: id
		});
	}

    export function mark() {
        console.log(id, "marked")
    }

</script>

<button 
    bind:this={directory[id]} 
    disabled={!active} 
    on:click={buttonPressed} 
    style="background-color: {bgcolor}; color: {color};">
    {label}
</button>

<style>
    button:disabled{
        border: 0;
    }
</style>
