<script>
  import CopyIcon from "./../../assets/Copy.svg";
  import RefreshIcon from "./../../assets/Refresh.svg";
  import Options from "./Options.svelte";
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
    <h3>custom:</h3>
    <Options title="length" value={length} isValue={isLength} />
    <Options title="uppercase" value={upper} isValue={isUpper} />
    <Options title="lowercase" value={lower} isValue={isLower} />
    <Options title="numbers" value={numbers} isValue={isNumbers} />
    <Options title="symbols" value={symbols} isValue={isSymbols} />
    <Options
      title="word"
      value={word}
      isValue={isWord}
      isWords={true}
      {length}
      classNames={{
        container: "words-option-container",
        number: "",
        range: "",
      }}
    />
  </div>
</div>
