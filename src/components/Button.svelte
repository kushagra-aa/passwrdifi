<script>
  export let classNames;
  export let clickFunction = () => {};
  export let content = "";
  export let component = "";
</script>

<button class={classNames} on:click={clickFunction}>
  {#if component}
    <svelte:component this={component} />
  {/if}
  {content}
</button>
