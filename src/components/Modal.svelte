<script>
  import CopyIcon from "./../assets/Copy.svg";
  import RefreshIcon from "./../assets/Refresh.svg";
  let password =
    "afsdnbahsdjkflbghkfasdbghjkfvdbavlhjkbhdjklsgbfhjlkadsgfhjkgbsdakjhfbfkhjdsbflhjkdsbfdlhsjkvbhj";
  let length = 10;
  let upper = 0;
  let lower = 0;
  let numbers = 0;
  let symbols = 0;
  let isLength = false;
  let isUpper = false;
  let isLower = false;
  let isNumbers = false;
  let isSymbols = false;
  let isWord = false;
  let word = "";
  $: if (length) {
    console.log(length);
  }
  $: if (upper) {
    console.log(upper);
  }
  $: if (lower) {
    console.log(lower);
  }
  $: if (numbers) {
    console.log(numbers);
  }
  $: if (symbols) {
    console.log(symbols);
  }
  $: if (word) {
    console.log(word);
  }
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password);
  };
</script>

<div class="modal-container">
  <div class="title-container">
    <h1>generate a random password</h1>
    <h2>Use this Amzing tool create Fun, Secure and Random passwords</h2>
  </div>
  <div class="password-box">
    <p>{password}</p>
    <div class="pass-buttons">
      <button on:click={copyToClipBoard}><CopyIcon /></button>
      <button><RefreshIcon /></button>
    </div>
  </div>
  <div class="presets-container">
    <h3>presets:</h3>
    <button>perfect</button>
    <button>random</button>
    <button>minimum</button>
    <button class="genreate-btn">generate</button>
  </div>
  <div class="custom-container">
    <div class="">
      <h4>length</h4>
      <input type="checkbox" bind:checked={isLength} />
      <input
        class={!isLength ? "disabled-input" : "enabled-input"}
        disabled={!isLength}
        type="number"
        bind:value={length}
      />
      <input
        class={!isLength ? "disabled-input" : "enabled-input"}
        disabled={!isLength}
        type="range"
        min="1"
        max="60"
        bind:value={length}
      />
    </div>
    <div class="">
      <h4>uppercase</h4>
      <input type="checkbox" bind:checked={isUpper} />
      <input
        class={!isUpper ? "disabled-input" : "enabled-input"}
        disabled={!isUpper}
        type="number"
        bind:value={upper}
      />
      <input
        class={!isUpper ? "disabled-input" : "enabled-input"}
        disabled={!isUpper}
        type="range"
        min="1"
        max="60"
        bind:value={upper}
      />
    </div>
    <div class="">
      <h4>lowercase</h4>
      <input type="checkbox" bind:checked={isLower} />
      <input
        class={!isLower ? "disabled-input" : "enabled-input"}
        disabled={!isLower}
        type="number"
        bind:value={lower}
      />
      <input
        class={!isLower ? "disabled-input" : "enabled-input"}
        disabled={!isLower}
        type="range"
        min="1"
        max="60"
        bind:value={lower}
      />
    </div>
    <div class="">
      <h4>numbers</h4>
      <input type="checkbox" bind:checked={isNumbers} />
      <input
        class={!isNumbers ? "disabled-input" : "enabled-input"}
        disabled={!isNumbers}
        type="number"
        bind:value={numbers}
      />
      <input
        class={!isNumbers ? "disabled-input" : "enabled-input"}
        disabled={!isNumbers}
        type="range"
        min="1"
        max="60"
        bind:value={numbers}
      />
    </div>
    <div class="">
      <h4>symbols</h4>
      <input type="checkbox" bind:checked={isSymbols} />
      <input
        class={!isSymbols ? "disabled-input" : "enabled-input"}
        disabled={!isSymbols}
        type="number"
        bind:value={symbols}
      />
      <input
        class={!isSymbols ? "disabled-input" : "enabled-input"}
        disabled={!isSymbols}
        type="range"
        min="1"
        max="60"
        bind:value={symbols}
      />
    </div>
    <div class="">
      <h4>word</h4>
      <input type="checkbox" bind:checked={isWord} />
      <input
        class={!isWord ? "disabled-input" : "enabled-input"}
        disabled={!isWord}
        type="text"
        bind:value={word}
      />
      <p>
        {word.length}
      </p>
    </div>
  </div>
</div>
