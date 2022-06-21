const hre = require("hardhat");
//const ethers = hre.ethers;


const main = async() => {

  const MyERC20 = await hre.ethers.getContractFactory("MyERC20")
  const erc20 = await MyERC20.deploy('SUSD Coin', 'SUSDC', 100000000000  * 10**18)
  await erc20.deployed()
  console.log(`ERC20 contract Address: ${erc20.address}`)
}

main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error)
  process.exit(1)
})