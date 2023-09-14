<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
    import { _ } from 'svelte-i18n';
    import Information from "./information.svelte";
	import Menu from "./Menu.svelte";

    let abstract_book =        "http://www.chem.okayama-u.ac.jp/~reg/jscc73/AbstractBook0901.pdf"
    let abstract_book_light =  "http://www.chem.okayama-u.ac.jp/~reg/jscc73/AbstractBook0901_light.pdf"
    let program_book =         "http://www.chem.okayama-u.ac.jp/~reg/jscc73/Program0901.pdf"
    let program_book_light =   "http://www.chem.okayama-u.ac.jp/~reg/jscc73/Program0901_light.pdf"
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="JSCC Member Page" />
</svelte:head>

<Menu />
<section>

	<h1>{$_("JSCCAS")}</h1>
	<h2>{$_("Program book")}</h2>
    <ul>
        <!-- これらのファイルは別の場所(/Users/matto/Unison/00Priority/2022錯討/AbstBook)からインストール。 -->
        <li>
            <a href={program_book}>{$_("Program book")} (93 MBytes)</a>
        </li>
        <li>
            <a href={program_book_light}>{$_("Program book")} {$_("(lightweight)")} (10 MBytes)</a>
        </li>
    </ul>
    <h2>{$_("Abstract book")}</h2>
    {$_("msg1")}
    <ul>
        <li>
            <a href={abstract_book}>{$_("Abstract book")} (566 MBytes)</a>
        </li>
        <li>
            <a href={abstract_book_light}>{$_("Abstract book")} {$_("(lightweight)")} (285 MBytes)</a>
        </li>
    </ul>
    <h2 class="post-title">{$_("Overall schedule")}</h2>
    <Information />

	<!-- <Counter /> -->
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		flex: 0.6;
		padding: 10px;
	}

	h1 {
		width: 100%;
	}
	h2 {
		font-size: 120%;
	}
</style>
