<script>
    import { createEventDispatcher,onMount } from 'svelte';
    import { directory, marks } from "../../Components/directory.js";
    import { all_talks } from '../../all_talks.js';
	const dispatch = createEventDispatcher();

    export let id
    export let title=""

    let active = false
    let color = "#888"
    let width = "20px"
    let height = "20px";

    onMount(() => {
        const status = $marks[id]
        if (status){
            color = "#0075ff";
        }
        else{
            color = "#f0f0f0";
        }
        active = all_talks.has(id)
        if ( ! active ){
            color = "#f8f8f8"
        }
	});

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

<button bind:this={directory[id]} disabled={!active} on:click={buttonPressed} style="background-color: {color}">
    {@html title}
</button>

<style>
    button {
        width: 20px;
        height: 20px;
    }
    button:disabled{
        border: 0;
    }
</style>
