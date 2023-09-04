<script lang="ts">
    // import { mount_component } from 'svelte/internal';
    import Hall from '../lib/Hall.svelte'
    import { offline } from "../lib/stores";
    import Modal from 'svelte-simple-modal';
</script>

<Modal>
    <Hall />
</Modal>
{#if $offline}
<div>
    <h1>OFFLINE</h1>
    <p>Please wait a moment</p>
</div>
{/if}


<style>
    div {
        content: " ";
        z-index: 4000;
        display: block;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);    
    }
    h1 {
        font-size: 200%;
        font-weight: bold;
        text-align: center;
        color: white;
    }
    p {
        font-size: 150%;
        color: white;
        text-align: center;
    }
</style>
