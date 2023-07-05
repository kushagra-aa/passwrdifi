<script>
  import SectionTitle from "./SectionTitle.svelte";
  import Card from "./Card.svelte";
</script>

<section id="features w-full">
  <SectionTitle>functionalities</SectionTitle>
  <div class="cards grid grid-cols-2 gap-5 py-8">
    <Card
      title="Random Password"
      description="Quickly generate random passwords that are strong and unique."
    />
    <Card
      title="Perfect Password"
      description="Specify the number of characters in your password."
    />
    <Card
      title="Password Length"
      description="Specify the number of characters in your password."
    />
    <Card
      title="User-Created Passwords"
      description="Create a password using your own string for a personalized touch."
    />
    <Card
      title="Uppercase Characters"
      description="Determine the number of uppercase letters."
    />
    <Card
      title="Lowercase Characters"
      description="Decide on the number of lowercase letters."
    />
    <Card
      title="Special Characters"
      description="Include special characters for added complexity."
    />
    <Card
      title="Numbers"
      description="Add numeric digits to enhance the strength of your password."
    />
  </div>
</section>
