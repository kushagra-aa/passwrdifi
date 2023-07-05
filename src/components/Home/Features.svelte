<script>
  import SectionTitle from "./SectionTitle.svelte";
  import Card from "./Card.svelte";
</script>

<section id="functionalities w-full">
  <SectionTitle>functionalities</SectionTitle>
  <div class="cards grid grid-cols-2 gap-5 py-8">
    <Card
      title="WhatsApp numbers"
      description="Easily create QR codes and links for WhatsApp numbers, enabling seamless communication with your contacts."
    />
    <Card
      title="Contact Cards"
      description="Create QR codes for contact cards, making it effortless to share your contact information with others."
    />
    <Card
      title="Mobile Numbers"
      description="Create QR codes for contact cards, making it effortless to share your contact information with others."
    />
    <Card
      title="URL/Link"
      description="Generate QR codes for any URL or link, allowing easy access to websites, social media profiles, or other online resources."
    />
  </div>
</section>
