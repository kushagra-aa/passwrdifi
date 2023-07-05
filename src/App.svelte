<script>
  import Modal from "./components/Modal/Modal.svelte";
  import Home from "./page/Home.svelte";

  let page =
    window.location.pathname === "" ? "/" : `${window.location.pathname}`;
</script>

<main>
  {#if page === "/"}
    <Home />
  {/if}
  {#if page === "/play"}
    <Modal />
  {/if}
</main>

<style>
</style>
