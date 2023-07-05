<script>
  import SectionTitle from "./SectionTitle.svelte";
</script>

<section id="try" class="w-full flex flex-col gap-8">
  <SectionTitle>try it out !!</SectionTitle>
  <div class="flex flex-col gap-5 w-[90%] self-end">
    <p class="text-teal-100 text-xl w-5/6">
      <span class="text-teal-400">Click</span>
      on the link to try out the app for yourself. You can generate QR codes, download
      them, and copy the links for convenient sharing.
    </p>
    <div class="con flex gap-2 items-center">
      <p class="text-teal-100 text-2xl">Unlock the Power of QR Codes Today!</p>
      <a
        href="/play"
        class="btn cursor-pointer capitalize bg-teal-400 text-gray-950 text-lg font-medium px-8 py-2 rounded-sm hover:bg-teal-600"
      >
        try it out !!
      </a>
    </div>
  </div>
</section>
