require("@nomiclabs/hardhat-waffle");
 require('dotenv').config({path:__dirname+'/.env'})
const {PRIVATEKEY, JSON_RPC} = process.env


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks:{
    shine:{
      url:JSON_RPC,
      accounts:[PRIVATEKEY],
    gasPrice: 3000000000,
      saveDeployments: true,
    }
  }
};
