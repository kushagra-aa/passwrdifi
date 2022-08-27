<script>
  import Button from "../Button.svelte";
  import CopyIcon from "./../../assets/Copy.svg";
  import RefreshIcon from "./../../assets/Refresh.svg";
  import Options from "./Options.svelte";
  let password =
    "afsdnbahsdjkflbghkfasdbghjkfvdbavlhjkbhdjklsgbfhjlkadsgfhjkgbsdakjhfbfkhjdsbflhjkdsbfdlhsjkvbhj";
  let length = 6;
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
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password);
  };
  const makePerfect = () => {
    length = 10;
    upper = 2;
    lower = 2;
    numbers = 2;
    symbols = 2;
  };
  const makeRandom = () => {};
  const makeMinimum = () => {
    upper = 1;
    lower = 1;
    numbers = 1;
    symbols = 1;
  };
  const generatePassword = () => {};
  const refreshPassword = () => {};
</script>

<div class="modal-container">
  <div class="title-container">
    <h1>generate a random password</h1>
    <h2>Use this Amzing tool create Fun, Secure and Random passwords</h2>
  </div>
  <div class="password-box">
    <p>{password}</p>
    <div class="pass-buttons">
      <Button
        classNames=""
        clickFunction={copyToClipBoard}
        component={CopyIcon}
      />
      <Button
        clickFunction={refreshPassword}
        classNames=""
        component={RefreshIcon}
      />
    </div>
  </div>
  <div class="presets-container">
    <h3>presets:</h3>
    <Button clickFunction={makePerfect} classNames="" content="perfect" />
    <Button clickFunction={makeRandom} classNames="" content="random" />
    <Button clickFunction={makeMinimum} classNames="" content="minimum" />
    <Button
      clickFunction={generatePassword}
      classNames="genreate-btn"
      content="generate"
    />
  </div>
  <div class="custom-container">
    <h3>custom:</h3>
    <Options title="length" bind:value={length} bind:isValue={isLength} />
    <Options title="uppercase" bind:value={upper} bind:isValue={isUpper} />
    <Options title="lowercase" bind:value={lower} bind:isValue={isLower} />
    <Options title="numbers" bind:value={numbers} bind:isValue={isNumbers} />
    <Options title="symbols" bind:value={symbols} bind:isValue={isSymbols} />
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
