import {
  generateRandom,
  generateRandomWithLength,
  generateRandomWithArguments,
  generateRandomWithCustom,
  generateRandomWithMinimum,
  generateRandomPerfect,
  generateFromString,
} from "./generatorFunctions";

const passwordGenerator = (type, config) => {
  switch (type) {
    case "Random":
      return generateRandom();
    case "WithLength":
      return generateRandomWithLength(config.Length);
    case "WithArguments":
      return generateRandomWithArguments(
        config.Length,
        config.IsUpper,
        config.IsLower,
        config.IsDigit,
        config.IsSymbol
      );
    case "WithMinimum":
      return generateRandomWithMinimum(config.Length);
    case "WithCustom":
      return generateRandomWithCustom(
        config.Upper,
        config.Lower,
        config.Digits,
        config.Symbols
      );
    case "Perfect":
      return generateRandomPerfect();
    case "FromString":
      return generateFromString(config.String, config.Perfect);
    default:
      return generateRandom();
  }
};
export default passwordGenerator;
