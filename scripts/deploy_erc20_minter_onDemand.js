const {ethers} = require('hardhat');
// Address 0x907Cb90455f47F8E93fCBfEA31C1614A5e49D8B4

const main = async() => {
  const [owner, user] = await ethers.getSigners()
  const Erc20_Minter_OnDemand = await ethers.getContractFactory('SUSDC_Minter_OnDemand')
  const erc20_minter_onDemand = await Erc20_Minter_OnDemand.deploy('100000000000000000000000000')
  await erc20_minter_onDemand.deployed()
  console.log(`Minter deployed addrss: ${erc20_minter_onDemand.address}`)
  // // Mint tokens for the user
  // const tokenBalance = await erc20_minter_onDemand.balanceOf(user.address)
  // console.log(`tokenBalance ${tokenBalance}`)
  // const tx = await erc20_minter_onDemand.connect(user).mintForUser('10000000000')
  // tx.wait(1)
  // console.log(`Done minting tokens ${tx.hash}`)
  // const userTokenBalanceAfterMinting =  await erc20_minter_onDemand.balanceOf(user.address)
  // console.log(`UserTokenBalanceAfterMinting ${userTokenBalanceAfterMinting}`)
}

main()
.then(()=> process.exit(0))
.catch((error)=>{
  console.error(error)
  process.exit(1)
})