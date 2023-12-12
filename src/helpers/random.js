const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const randomFloat = () => Math.random();

export { randomInt, randomFloat };
