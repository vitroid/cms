<script lang="ts">
    import Nickname from './Nickname.svelte';
    import SeatInfo from './SeatInfo.svelte';
// import Index from "./Index.svelte";
    import { stored_time } from "./stores";

</script>

<section>
    <div class="container">
        <div class="right">
            <Nickname />
            <br />
            <span>{$stored_time}</span>
            <SeatInfo />
        </div>
    </div>
</section>

<style>
    section {
        /* position: fixed;
        width: 100%;
        left:0;
        top: 0; */
        text-align:center;
        /* font-weight: bold; */
        color: #fff;
        /* color: #f00; */
        background-color: #f88d;
        z-index: 2000;
        padding: 12px 0 12px 0;
        display: flex;
        justify-content: center;
    }
    div.container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
    }
    .right {
        text-align: right;
    }
    span {
        font-size: 50%;
        color: #22c;
    }
    @media (min-width: 420px) {
        div.container {
            width: 420px;
        }
    }
    @media (max-width: 420px) {
        div.container {
            width: 100%;
        }
    }
</style>
