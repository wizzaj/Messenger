// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const Messanger = await hre.ethers.getContractFactory("Messanger");
  const messanger = await Messanger.deploy();

  await messanger.deployed();

  console.log(
    `Contract Address: ${messanger.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0xd31Eed494096c291E4e4B9F5206f327A0Aa3f9Bc
