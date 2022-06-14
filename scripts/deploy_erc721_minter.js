const hre = require("hardhat");
const ethers = hre.ethers;


const main = async() => {
const [owner, addr1] = await ethers.getSigners();

  const ERC721_Minter = await hre.ethers.getContractFactory("ERC721NFTMinter")
  const minter = await ERC721_Minter.deploy('Test Token', 'TEST')
  await minter.deployed()
  const total1 = await minter.totalSupply()
  console.log(`Total Tokens ${total1}`) 
  const mintingTx = await  minter.mintNFT('')
  console.log('Token Minted')
  mintingTx.wait();
  console.log(ethers.utils.formatEther(mintingTx.value, 'ethers') )

  const total2 = await minter.totalSupply()
  console.log(`Total Tokens ${total2}`)
  const ownerOf1 = await minter.ownerOf(1)
  console.log(ownerOf1) 

    
}

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})