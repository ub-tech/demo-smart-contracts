const hre = require("hardhat");
//const ethers = hre.ethers;
/**
 * NFTMinter_Address = '0x89eE595079a3445f1981aaDb830CAfBe5B739f8b'
 * ERC20 contract Address: 0x67c5518B7f3ea8397C9C6e98598B8A737B462289
 * SUSDC_MINT_ON_DEMAND = '0x907Cb90455f47F8E93fCBfEA31C1614A5e49D8B4'
   OLD NFTMarketplace contract Address: 0x9189F01E93D85B3b71551d949e1d76e38D868C07
   NEW NFTMarketplace contract Address: 0x59e8AA57Ea44e8C75FB7969c3307b2280379c9A5
 */

const NFTMinter_Address = '0x89eE595079a3445f1981aaDb830CAfBe5B739f8b'
//const SUSDC_Address = '0x67c5518B7f3ea8397C9C6e98598B8A737B462289'
const SUSDC_MINT_ON_DEMAND = '0x907Cb90455f47F8E93fCBfEA31C1614A5e49D8B4'

const main = async() => {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
 
  const nftMarketPlace = await NFTMarketplace.deploy(NFTMinter_Address, SUSDC_MINT_ON_DEMAND)
  await nftMarketPlace.deployed()
  console.log(`NFTMarketplace contract Address: ${nftMarketPlace.address}`)
}

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})