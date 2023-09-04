<script>
	import Banner from './Banner.svelte';
	// import './styles.css';
	// import AfterLogin from './seat/Components/AfterLogin.svelte';
	// import { store } from './hooks/auth';
	import LoginComponent from '../lib/login/LoginComponent.svelte';
	import { token } from './seat/lib/stores';
</script>

<body>
	<div class="wrap">
		<Banner />
		{#if $token != "" }
		<div class="app">

			<main>
				<slot />
			</main>

			<footer>
				<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
			</footer>
		</div>
		{:else }
			<LoginComponent />
		{/if}
	</div>
</body>

<style>
	body{
		font-family: Helvetica, Ariel, sans-serif;
		font-size: 10pt;
	}
	div.wrap{
		max-width: 750px;
		background-color:#f0f0f0;
		margin: 0 auto;
	}
	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	} */

	/* main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	} */

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	} */

	/* footer a {
		font-weight: bold;
	} */

	/* @media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
