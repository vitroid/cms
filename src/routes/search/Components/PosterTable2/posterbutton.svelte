<script>
    import { createEventDispatcher,onMount } from 'svelte';
    import { directory, marks, votes } from "../directory.js";
	const dispatch = createEventDispatcher();

    export let prefix;
    export let item;

    let bgcolor = "#888";
    let color = "#000"
    let id
    let twodigit

    onMount(() => {
        const status = $marks[id]
        if (status){
            bgcolor = "#0075ff";
            color = "#fff";
        }
        else{
            bgcolor = "#fff8";
            color = "#000";
        }
	});

    $: {
        twodigit = item
        if (twodigit < 10){
            twodigit = "0"+twodigit
        }
        id=prefix + twodigit;
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
    on:click={buttonPressed} 
    style="background-color: {bgcolor}; color: {color}; box-shadow: 1px 3px 5px 0px rgba(0,0,0,{$votes[id]});">
    {twodigit}
</button>

<style>
    button:disabled{
        border: 0;
    }
    button {
        padding: 6px;
        margin: 3px;
        box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
    }
</style>
