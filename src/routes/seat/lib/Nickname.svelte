<script lang="ts">
	import { nickname } from './stores';
</script>

<input type="text" bind:value={$nickname} placeholder="Your nickname" />

<style>
	input {
		z-index: 2000;
	}
</style>
