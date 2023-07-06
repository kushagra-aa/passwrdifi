<section id="made-by">
  <h2>Built With 🤍 by:</h2>
  <img
    src="https://avatars.githubusercontent.com/u/68841296?v=4"
    alt="kushagra agnihotri"
  />
  <p class="name">kushagra agnihotri</p>
  <p class="desc">
    Creating amazing Websites and Applications with whatever I've got and
    more✌️.
    <span>Always Trying to be</span>
    <span class="tagline"> Fullstack and Beyond💫. </span>
  </p>
  <a target="_blank" href="https://github.com/kushagra-aa/passwrdifi"
    >Contribute</a
  >
</section>

<style>
  #made-by {
    @apply grid w-full;
    grid-template-columns: 0.5fr 1.5fr;
    grid-template-rows: 0.5fr 2fr 0.5fr;
    grid-template-areas:
      "head head"
      "img desc"
      "name link";
    align-items: center;
    justify-items: center;
    gap: 0.5rem 1.5rem;
  }
  #made-by > h2 {
    @apply font-semibold capitalize text-secondary text-2xl underline underline-offset-4;
    justify-self: start;
    width: max-content;
    grid-area: head;
  }
  #made-by > img {
    @apply rounded-full;
    width: 150px;
    height: 150px;
    grid-area: img;
  }
  #made-by > p.name {
    @apply capitalize text-accent text-3xl;
    grid-area: name;
  }
  #made-by > p.desc {
    @apply text-lg;
    grid-area: desc;
    justify-self: start;
  }
  #made-by > p.desc > span {
    @apply text-secondary;
    display: inline-block;
  }
  #made-by > p.desc > span.tagline {
    @apply text-accent;
  }
  #made-by > a {
    @apply bg-accent text-primary text-lg px-2 py-1 rounded-sm;
    grid-area: link;
    justify-self: start;
    transition: filter 0.2s ease-in-out;
  }
  #made-by > a:hover {
    filter: brightness(80%);
  }
  @media screen and (max-width: 620px) {
    #made-by {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 0.5rem;
    }
  }
</style>
