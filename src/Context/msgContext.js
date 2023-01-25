import React,{useState,useEffect, createContext} from 'react'

 import { walletIsConnected,connectWallet,writtingData,readingData} from '../Utils/apiProvider'

 const AppContext = createContext()
  
function MsgContext(props) {
  const [account,setAccount] = useState(null)
  const [username,setUserName] = useState("")
  const [friendlist,setfriendlist] = useState([])
  const [friendMsg,setfriendMsg] = useState([])
  const [Loading,setLoading] = useState(false)
  const [UserList,setUserList] = useState([])
  const [sessionValue] = useState((sessionStorage['address']))

  
  const [currentUser,setcurrentUser] = useState('')
  const [currentUserAddress,setcurrentUserAddress] = useState('')
  
  const contractInstance = readingData()
  const {ethereum} = window
   
 
  
  const fetchData= async()=>
  {
    try {
      
      const allUser = await contractInstance.getAllUsers()
       setUserList(allUser)
      if(ethereum === undefined)
      {
        sessionStorage.clear()
        alert("Please install metamask to connect with friends and restart")

      }   
      
       const currentAccount = sessionValue
       setAccount(sessionValue)
 
       const currentUsername= await contractInstance.getUsername(currentAccount,{from:currentAccount})
       setUserName(currentUsername)
      
       const friendList = await contractInstance.getAllFriends(currentAccount,{from:currentAccount})
       setfriendlist(friendList)

       readUserinfo(currentAccount)
    
    } catch (error) {
      console.log(error.message)
     
    }
  }

  const readMessage = async(friendKey)=>
  {
  
    try {
      
      const message= await contractInstance.readMessage(friendKey,{from:sessionValue})
      setfriendMsg(message)
    } catch (error) {
      console.log(error.message)
    }
  }

  const createAccount = async(userName,useraddress)=>
  {
    try {
      const contractWriteInstance = await writtingData()
      const creatinguser = await contractWriteInstance.signUp(userName,{from:useraddress})
       setLoading(true)
       await creatinguser.wait()
       setLoading(false)
       sessionStorage.setItem('address',useraddress)
       window.location.reload()
    } catch (error) {
      console.log("Error while creating account")
    }
  }

  const sendingMessage= async(msg,friendKey)=>
  {
    try {
      
      const contractWriteInstance = await writtingData()
      const texting = await contractWriteInstance.sendMessage(msg,friendKey,{from:account})
      setLoading(true)
      await texting.wait()
      setLoading(false)

    } catch (error) {
      console.log(error.message)
    }
  }
   
  const addFriends = async(name,friendKey)=>
  {
    try {
      const contractWriteInstance = await writtingData() 
      const addingfriend = await contractWriteInstance.addFriend(name,friendKey,{from:account})
      setLoading(true)
      await addingfriend.wait()
      setLoading(false)
      window.location.reload()
    } catch (error) {
      console.log(error.message)
      alert("please check if user is registered")
    }
  }

  const readUserinfo= async(userkey)=>
  {
    const user = await contractInstance.getUsername(userkey,{from:userkey})
    setcurrentUser(user)
    setcurrentUserAddress(userkey)
  }
 
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <AppContext.Provider value={
    {
    readMessage,
    createAccount,
    sendingMessage,
    addFriends,
    readUserinfo,
    setAccount,
    connectWallet,
    sessionValue,
    account,
    username,
    friendlist,
    friendMsg,
    Loading,
    UserList,
    currentUser,
    currentUserAddress
    }
    }>
    {props.children}
    </AppContext.Provider>
  )
}

export {MsgContext,AppContext}