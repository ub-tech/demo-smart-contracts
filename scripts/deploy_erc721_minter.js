const hre = require("hardhat");


const main = async() => {

  const ERC721_Minter = await hre.ethers.getContractFactory("ERC721NFTMinter")
  const minter = await ERC721_Minter.deploy('Test Token', 'TEST')
  await minter.deployed()
  console.log(minter.address)
}

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})