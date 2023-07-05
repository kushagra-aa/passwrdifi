<script>
  import SectionTitle from "./SectionTitle.svelte";
  import Svelte from "./../../assets/svelte-logo.png";
  import Tailwind from "./../../assets/tailwindcss-logo.png";
  import Vite from "./../../assets/vitejs-logo.png";
</script>

<section id="powered" class="w-full flex flex-col gap-8">
  <SectionTitle>powered by</SectionTitle>
  <div class="tech flex gap-5 items-center justify-between px-16">
    <img src={Svelte} alt="Svelte" />
    <img src={Vite} alt="Vite JS" />
    <img src={Tailwind} alt="Tailwind Css" />
  </div>
</section>
