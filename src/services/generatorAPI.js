import passwordGenerator from "../helpers/passwordGenerator/passwordGenerator";

const generatorAPI = (type, config) =>
  new Promise((resolve) => {
    resolve({ data: { password: passwordGenerator(type, config) } });
  });

export default generatorAPI;
