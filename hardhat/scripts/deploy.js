// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
// require("dotenv").config({ path: ".env" });

async function main() {
  const FreelanceContract = await hre.ethers.getContractFactory("Freelance");

  const deployedFreelanceContract = await FreelanceContract.deploy();

  await deployedFreelanceContract.deployed();

  console.log(`Deployed address: ${deployedFreelanceContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
