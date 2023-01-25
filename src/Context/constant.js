import  messangerJson  from './Messanger.json'
import { ethers } from "ethers";
export const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/ccfd961133534cf9aca26e4cf5cb0981")
export const appAddress = "0x9c01Aa6321aC88859440824A43d332E256e9d04d";
export const appAbi =  messangerJson.abi; 