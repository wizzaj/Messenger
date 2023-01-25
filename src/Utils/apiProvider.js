import {ethers} from "ethers"

import { appAbi,appAddress,provider } from "../Context/constant"

const {ethereum} = window

export const walletIsConnected= async()=>
{
    try {
        const account = await ethereum.request({method:"eth_requestAccounts"})
        return account[0]
    } catch (error) {
        console.log(error.message);
    }
}

export const  connectWallet = async()=>
{
try {
    await ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})
    const account = await ethereum.request({method: "eth_requestAccounts"})  
    return account 
} catch (error) {
    console.log(error.message)
    return null
}
}

export const writtingData = async()=>
{
    try {
        await ethereum.request({method: "eth_requestAccounts"})
        const signer = new ethers.providers.Web3Provider(ethereum).getSigner()
        return new ethers.Contract(appAddress,appAbi,signer)
    } catch (error) {
        console.log(error.message)
    }

}

export const readingData = ()=>
{
    try {
        return new ethers.Contract(appAddress,appAbi,provider)
    } catch (error) {
      console.log(error.message)  
    }
}

export const messageTime = (timestamp)=>
{
     const newtime = new Date(timestamp.toNumber() *1000)
     return newtime.toLocaleString()
}
