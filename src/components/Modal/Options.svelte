<script>
  export let title;
  export let value;
  export let isValue;
  export let isWords = false;
  export let length = 0;
  export let classNames = {
    container: "",
    number: "",
    range: "",
  };
</script>

<div class={`${classNames.container} options-container`}>
  <h4>{title}</h4>
  <div class="tickbox-container">
    <input type="checkbox" bind:checked={isValue} />
    <span class="checkmark" />
  </div>
  {#if isWords}
    <input
      class={`${!isValue ? "disabled-input" : "enabled-input"}`}
      disabled={!isValue}
      type="text"
      bind:value
      maxlength={length}
    />
    <p>
      {value.length}
    </p>
  {/if}
  {#if !isWords}
    <input
      class={`${classNames.number} ${
        !isValue ? "disabled-input" : "enabled-input"
      }`}
      disabled={!isValue}
      type="number"
      bind:value
    />
    <input
      class={`${classNames.range} ${
        !isValue ? "disabled-input" : "enabled-input"
      }`}
      disabled={!isValue}
      type="range"
      min="1"
      max="60"
      bind:value
    />
  {/if}
</div>
