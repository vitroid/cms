<script lang="ts">
	// import { fade } from 'svelte/transition';
	import SeatButton from './SeatButton.svelte';
	import { getTableInfo } from './stores';

	export let table_id;
	export let nSeat;

	// import { closeModal } from 'svelte-modals'

	// provided by <Modals />
	// export let isOpen


	// const { close } = getContext('simple-modal');

	$: {
		getTableInfo(table_id);
	}
</script>

<div class="tableicon">
	<div class="container">
		<div class="centered">
		Table<br />{table_id}
		</div>
	</div>
</div>

<section>
	<h1>Choose your seat</h1>
	{#each Array(nSeat+1) as _, seat}
	{#if seat}
	<SeatButton {table_id} {seat} /><br />
	{/if}
	{/each}
</section>

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 1.5rem;
		font-weight: 100;
		line-height: 1.1;
		margin: 1rem auto;
		max-width: 14rem;
	}
	div.tableicon {
		padding: 1em;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		width: 80px;
		height: 80px;
		background: url("../assets/Table7t.png") no-repeat scroll center transparent;
		background-color:  rgba(255, 62, 0, 0.1);
		background-size: 75%;
	}
	.container {
		position: relative;
		/* font-family: inherit;
		font-size: inherit; */
		margin: 0;
		color: #ff3e00;
		/* border: 2px solid rgba(255, 62, 0, 100); */
		outline: none;
		padding: 0;
		width: 100%;
		height: 100%;
		/* background: url("../assets/Table7.png") no-repeat scroll center transparent;
		background-color:  rgba(255, 62, 0, 0.1); */
		/* background-size: 95%; */
	}
	.centered {
		position: absolute;
		top: 30%;
		left: 50%;
		transform: translate(-50%, 0%);
	}

</style>
