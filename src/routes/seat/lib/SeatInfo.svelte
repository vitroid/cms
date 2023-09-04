<script lang="ts">
	import { yourseat, yourtable } from './stores';
</script>

<span>
	{#if $yourtable}
	Table {$yourtable} - Seat {$yourseat}
	{:else}
	Seat unspecified
	{/if}
</span>

<style>
	span {
		z-index: 2000;
	}
</style>