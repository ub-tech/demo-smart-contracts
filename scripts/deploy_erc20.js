const hre = require("hardhat");
//const ethers = hre.ethers;


const main = async() => {

  const ERC20StableCoin = await hre.ethers.getContractFactory("SUSDC")
  const erc20 = await ERC20StableCoin.deploy('SUSD Coin', 'SUSDC', '100000000000000000000000000')
  const tx = await erc20.deployed()
  
  console.log(`ERC20 contract Address: ${erc20.address}`)
}

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})