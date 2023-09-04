<script lang="ts">
  import { onMount } from "svelte";
  import FrontIcon from "./FrontIcon.svelte";
  import GuestInfo from "./GuestInfo.svelte";
  import Index from "./Index.svelte";
  // import Modals from "./Modals.svelte";
  import { getGuestInfo, getHallInfo } from "./stores";
  import TableButton from "./TableButton.svelte";

  onMount(async () => {
    getGuestInfo()
    getHallInfo()
  });

	setInterval(() => {
    getGuestInfo()
    getHallInfo()
	}, 60*1000)  // 60*1000 every one minute

</script>

<GuestInfo />
<main>
  <h1>Banquet hall layout</h1>
    <div class="secondrow">
    <FrontIcon />
  </div>
    <div class="container">
      <TableButton table_id={1} nSeat={7} />
      <TableButton table_id={2} nSeat={7} />
      <TableButton table_id={3} nSeat={7} />
      <TableButton table_id={4} nSeat={7} />
      <TableButton table_id={5} nSeat={7} />
    </div>
    <div class="container">
      <TableButton table_id={6} nSeat={7} />
      <TableButton table_id={7} nSeat={7} />
      <TableButton table_id={8} nSeat={7} />
      <TableButton table_id={9} nSeat={7} />
      <TableButton table_id={10} nSeat={7} />
    </div>
    <div class="container">
      <TableButton table_id={11} nSeat={7} />
      <TableButton table_id={12} nSeat={7} />
      <TableButton table_id={13} nSeat={7} />
      <TableButton table_id={14} nSeat={7} />
      <TableButton table_id={15} nSeat={7} />
    </div>
    <div class="container">
      <TableButton table_id={16} nSeat={7} />
      <TableButton table_id={17} nSeat={7} />
      <TableButton table_id={18} nSeat={7} />
      <TableButton table_id={19} nSeat={7} />
      <TableButton table_id={20} nSeat={7} />
    </div>
    <div class="container">
      <TableButton table_id={21} nSeat={7} />
      <TableButton table_id={22} nSeat={7} />
      <TableButton table_id={23} nSeat={7} />
      <TableButton table_id={24} nSeat={7} />
    </div>
  <p>
    The layout may change without notice depending on the number of attendees at the reception.
  </p>
  <Index />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    max-width: 420px;
    text-align: center;
    padding: 0;
    margin: 0 auto;
  }

  /* img {
    height: 16rem;
    width: 16rem;
  } */

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 100px auto 0;
    max-width: 20rem;
  }

  /*p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  } */

  .container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
  }

  div.secondrow {
    max-width: 420px;
    /* display: flex;
    flex-wrap: nowrap; */
  }

</style>
