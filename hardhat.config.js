require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://goerli.infura.io/v3/ccfd961133534cf9aca26e4cf5cb0981",
      accounts: ["c406daaef30bce82152be931e617df104b59db9f23a612eeb48ff5c4fa422c40"]
    }
}
};