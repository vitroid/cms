<script>
    import { _ } from 'svelte-i18n';
    import LocaleSelector from '../lib/i18n/localeselector.svelte';
    import LogoutComponent from '../lib/login/LogoutComponent.svelte';

    let conf_url = "https://sites.google.com/g.ibaraki.ac.jp/sakuto73"

</script>



<div class="banner">
    <div class="left">
        <LogoutComponent /><br />
        <!-- <Index /> -->
    </div>
    <div>
        <!-- <a href={conf_url} target="_blank" > -->
        <h2>
            <a href="/">{$_("JSCC")}</a>
        </h2>    
        <!-- </a> -->
    </div>
    <div class="right">
        <LocaleSelector />
    </div>
</div>


<style>
	a {
		padding: 0px 5;
        font-size: 150%;
        color: white;
        text-decoration: none;
    }
    h2 {
        color: white;
    }
    /* a:link, a:visited {
        color: white;
    }
    a:hover {
        opacity: 75%;
        transition-duration: 500ms;
    } */
    .banner {
        background-color: #4169E1;
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        padding: 10px;
    }
    /* .left {
        text-align: left;
    }
    .right {
        text-align: right;
    } */
</style>