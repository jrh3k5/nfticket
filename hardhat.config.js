require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "ropsten",
  networks: {
   hardhat: {},
   ropsten: {
     url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_KEY}`,
     accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
   },
 },
};
