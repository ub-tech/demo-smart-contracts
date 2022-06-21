const hre = require("hardhat");
//const ethers = hre.ethers;
/**
 * NFTMinter_Address = '0x89eE595079a3445f1981aaDb830CAfBe5B739f8b'
 * ERC20 contract Address: 0xD7b68893cbbE99F2005663AF675fBEeecA2e0Ee7
   NFTMarketplace contract Address: 0xfc8529F6c3BE7b0345aF1bd0fC7d42b5e2cd67d0 
 */

const main = async() => {
  const NFTMinter_Address = '0x89eE595079a3445f1981aaDb830CAfBe5B739f8b'
  const ERC20StableCoin = await hre.ethers.getContractFactory('MyERC20')
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const erc20 = await ERC20StableCoin.deploy('SUSD Coin', 'SUSDC', '100000000000000000000000000')
  await erc20.deployed()
  console.log(`ERC20 contract Address: ${erc20.address}`)
  const nftMarketPlace = await NFTMarketplace.deploy(NFTMinter_Address, erc20.address)
  await nftMarketPlace.deployed()
  console.log(`NFTMarketplace contract Address: ${nftMarketPlace.address}`)
}

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})