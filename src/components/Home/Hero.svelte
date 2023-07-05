<script>
  import HeroImage from "./../../assets/Logo.png";
</script>

<section id="hero" class="flex items-center justify-between w-full">
  <div class="flex flex-col w-2/5 items-start gap-8">
    <h1 class="text-secondary text-6xl capitalize font-bold">
      <span class="text-accent"> not</span>
      a simple
      <span class="text-accent underline underline-offset-4"> password</span>
      Generator.
    </h1>
    <p class="text-secondary font-light text-2xl">
      Generate Strong and Secure Passwords.
    </p>
    <div class="flex gap-8">
      <a
        href="#features"
        class="btn cursor-pointer capitalize bg-accent text-primary text-lg font-medium px-8 py-2 rounded-sm"
      >
        know more
      </a>
      <a
        href="/play"
        class="btn cursor-pointer capitalize border-b border-accent text-accent text-lg font-medium px-8 py-2 rounded-sm"
      >
        try it out !!
      </a>
    </div>
  </div>
  <div class="hero-image">
    <img class="" src={HeroImage} alt="hero qr" />
  </div>
</section>

<style>
</style>
