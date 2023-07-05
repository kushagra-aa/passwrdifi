<script>
  import Modal from "./components/Modal/Modal.svelte";
  import Home from "./page/Home.svelte";

  let page =
    window.location.pathname === "" ? "/" : `${window.location.pathname}`;
  const changePage = (path) => {
    page = path;
  };
</script>

<main>
  {#if page === "/"}
    <Home {changePage} />
  {/if}
  {#if page === "/play"}
    <Modal />
  {/if}
</main>

<style>
</style>
