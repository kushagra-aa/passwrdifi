<script>
  import Modal from "./components/Modal/Modal.svelte";
  import Home from "./page/Home.svelte";

  let page =
    window.location.href.split("://")[1].split("/")[1] === ""
      ? "/"
      : `/${window.location.href.split("://")[1].split("/")[1]}`;
  console.log(page);
  const changePage = () => {
    page = "/play";
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
