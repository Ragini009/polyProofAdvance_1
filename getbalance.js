const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/krishna.sol/krishna.json");

const tokenAddress = "0x43Fc7956F17e1f12E2e79f879ff78d469b4d3E01"; // place your erc20 contract address here
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x0B827139D21E92B1262e71013593c2A19d80d931"; // place your public address for your wallet here

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

        console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
          }
            
              // We recommend this pattern to be able to use async/await everywhere
                // and properly handle errors.
                  main().catch((error) => {
                      console.error(error);
                          process.exitCode = 1;
                            });
