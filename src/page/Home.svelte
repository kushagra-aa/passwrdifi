<script>
  import Hero from "./../components/Home/Hero.svelte";
  import "./../styles/home.css";
  import Features from "./../components/Home/Features.svelte";
  import Try from "./../components/Home/Try.svelte";
  import Powered from "./../components/Home/Powered.svelte";
  import MadeBy from "./../components/Home/MadeBy.svelte";

  export let changePage = (path) => {};
</script>

<Hero {changePage} />
<Features />
<Try {changePage} />
<Powered />
<MadeBy />
