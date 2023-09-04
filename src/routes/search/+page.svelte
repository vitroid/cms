<script>
    import { _ } from 'svelte-i18n';
    import Schedule from "./schedule.svelte";
    import SearchBox from "./Components/Search/searchbox.svelte";
	import {id, generateId} from "./Components/directory"
    // import Banner from "../Banner.svelte"
    import { data } from "./index.js"

    let search = "";
    function searchHandler(event){
        search = event.detail.text;
    }

	$: {
		// 統計のためのunique id.
		if ($id == ""){
			$id = generateId();
		}
	}

</script>

<!-- <Banner /> -->
<h2>{$_("SEARCH")}</h2>
<div class="search">
	<ul>
		<li>{$_("hint1")}</li>
		<li>{$_("hint2")}</li>
		<li>{$_("hint3")}</li>
		<li>{$_("hint4")}</li>
	</ul>

	<SearchBox {search} {data}/>
	<p>{$_("hint5")}</p>
</div>
<Schedule on:search={searchHandler} />
<noscript>
	<p>{$_("usingjs")}</p>
</noscript>


<style>
	h2 {
		padding: 10px;
        margin: 0;
		text-align: center;
		background-color: #fff;
	}
	div.search {
		margin: 10px;
	}
</style>
