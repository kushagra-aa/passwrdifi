<script>
  import Button from "../Button.svelte";
  import CopyIcon from "./../../assets/Copy.svg";
  import RefreshIcon from "./../../assets/Refresh.svg";
  import Options from "./Options.svelte";
  import Api from "./../../services/Api";
  import { onMount } from "svelte";
  let password = "";
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
  let lastData = {};
  let lastEndpoint = {};
  onMount(() => genrateRandomPassword());
  $: if (isLower) if (lower <= 0) lower = 1;
  $: if (isUpper) if (upper <= 0) upper = 1;
  $: if (isNumbers) if (numbers <= 0) numbers = 1;
  $: if (isSymbols) if (symbols <= 0) symbols = 1;
  const genrateRandomPassword = async () => {
    lastEndpoint = "/pass/generateRandom";
    password = await Api.post(lastEndpoint).then((resp) => resp.data.password);
  };
  const copyToClipBoard = () => {
    navigator.clipboard.writeText(password);
  };
  const makePerfect = async () => {
    lastEndpoint = "/pass/generateRandomPerfect";
    length = 10;
    upper = 2;
    lower = 2;
    numbers = 2;
    symbols = 2;
    if (isWord) {
      lastEndpoint = "/pass/generateFromString";
      lastData = { String: word, Perfect: "True" };
    }
    password = await Api.post(lastEndpoint, lastData).then(
      (resp) => resp.data.password
    );
  };
  const makeRandom = async () => {
    isLower = false;
    isUpper = false;
    isWord = false;
    isNumbers = false;
    isSymbols = false;
    lastEndpoint = "/pass/generateRandom";
    lastData = {};
    if (isLength) {
      lastEndpoint = "/pass/generateRandomWithLength";
      lastData = {
        Length: length,
      };
    }
    password = await Api.post(lastEndpoint, lastData).then(
      (resp) => resp.data.password
    );
  };
  const makeMinimum = async () => {
    upper = 1;
    lower = 1;
    numbers = 1;
    symbols = 1;
    isLower = false;
    isUpper = false;
    isWord = false;
    isNumbers = false;
    isSymbols = false;
    lastEndpoint = "/pass/generateRandomWithMinimum";
    lastData = {
      Length: length,
    };
    password = await Api.post(lastEndpoint, lastData).then(
      (resp) => resp.data.password
    );
  };
  const generatePassword = async () => {
    lastData = {
      Length: length,
      Upper: isUpper ? upper : 0,
      Lower: isLower ? lower : 0,
      Symbols: isSymbols ? symbols : 0,
      Digits: isNumbers ? numbers : 0,
    };
    lastEndpoint = "/pass/generateRandomWithCustom";
    if (!isUpper && !isLower && !isSymbols && !isNumbers && !isWord)
      lastEndpoint = "/pass/generateRandom";
    if (isLength && !isUpper && !isLower && !isSymbols && !isNumbers && !isWord) {
      lastEndpoint = "/pass/generateRandomWithLength";
      lastData = {
        Length: length,
      };
    }
    else if (isWord) {
      lastEndpoint = "/pass/generateFromString";
      lastData = { String: word, Perfect: "False" };
    }
    password = await Api.post(lastEndpoint, lastData).then(
      (resp) => resp.data.password
    );
    length = password.length;
  };
  const refreshPassword = async () => {
    password = await Api.post(lastEndpoint, lastData).then(
      (resp) => resp.data.password
    );
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
    <Button
      clickFunction={makePerfect}
      classNames="preset-btn"
      content="perfect"
    />
    <Button
      clickFunction={makeRandom}
      classNames="preset-btn"
      content="random"
    />
    <Button
      clickFunction={makeMinimum}
      classNames="preset-btn"
      content="minimum"
    />
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
      bind:value={word}
      bind:isValue={isWord}
      isWords={true}
      {length}
      {isLength}
      classNames={{
        container: "words-option-container",
        number: "",
        range: "",
      }}
    />
  </div>
</div>
