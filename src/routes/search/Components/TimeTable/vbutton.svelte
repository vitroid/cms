<script lang="ts">
    import { createEventDispatcher,onMount } from 'svelte';
    import { directory, marks, votes } from "../directory.js";
	const dispatch = createEventDispatcher();

    export let id
    export let label
    export let height
    export let available

    let active = false
    let bgcolor = "#888"
    let color = "#000"

    onMount(() => {
        const status = $marks[id]
        if (status){
            bgcolor = "#0075ff";
            color="#fff"
        }
        else{
            bgcolor = "#fff8";
            color="#000"
        }
        active = available.has(id)
        if ( ! active ){
            bgcolor = "#ccc8"
            color="#666"
        }
	});

	function buttonPressed() {
        // console.log(id, "dispatch")
        // invoke signal
		dispatch('search', {
			text: id
		});
	}

    // export function mark() {
    //     console.log(id, "marked")
    // }
</script>

{#if label}
<button bind:this={directory[id]} 
    disabled={!active} 
    on:click={buttonPressed} 
    style="background-color: {bgcolor}; color: {color}; height: {height*2-6}px; box-shadow: 1px 3px 5px 0px rgba(0,0,0,{$votes[id]});" >
    {label}
</button>
{:else}
<div style="height: {height*2}px" >
</div>
{/if}

<style>
    button {
        padding: 0px 4px 0px 4px;

        /* gap to impress the shadows. Subtract it from the height of the button */
        margin: 3px; 
        
        box-shadow: 1px 3px 5px 0px rgba(0, 0, 0, 0.2);
    }
</style>
