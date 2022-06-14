const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Mint ERC721', () => { 

  it('Should be able to deploy the contract', async()=>{

    const ERC721Minter = await ethers.getContractFactory('ERC721NFTMinter')
    const erc721Minter = await ERC721Minter.deploy('Sample Token', 'TEST');
    await erc721Minter.deployed()
    console.log(erc721Minter.address) 
  })

  it('Contract can able to mint NFT', async()=>{
    const [admin, user] = await ethers.getSigners()
    const ERC721Minter = await ethers.getContractFactory('ERC721NFTMinter')
    const erc721Minter = await ERC721Minter.deploy('Sample Token', 'TEST');
    await erc721Minter.deployed()
    const mintNFtTx = await erc721Minter.mintNFT('')
    await mintNFtTx.wait()
    expect(await erc721Minter.totalSupply()).to.equal(1)

  })

  it('User can able to mint NFT', async()=>{
    const [admin, user] = await ethers.getSigners()
    const ERC721Minter = await ethers.getContractFactory('ERC721NFTMinter')
    const erc721Minter = await ERC721Minter.deploy('Sample Token', 'TEST');
    await erc721Minter.deployed()
    const mintNFtTx = await erc721Minter.connect(user).mintNFT('')
    await mintNFtTx.wait()
    const tokenNumber = await erc721Minter.totalSupply()
    console.log(tokenNumber)
    const tokenOwner = await erc721Minter.ownerOf(tokenNumber)
    expect(tokenOwner).to.equal(user.address)
  })
 })