// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Messanger
{
      struct User
      {
         string name;
         Friends[] friendsList;
      }
      struct Friends
      {
         string username;
         address pubkey;
      }
      struct Message 
      {
            string message;
            uint timestamp;
            address sender;
      }
      struct allUser
      {
            string name;
            address accountAddress;
      }

      allUser[] allUserList;
      mapping (address=>User) userList;
      mapping (bytes32=>Message[]) allMessage;

    function checkUserExist(address _publicKey) internal view returns (bool)
     {
         // Replace bytes with bytes32 and try to recall.
        return  bytes(userList[_publicKey].name).length > 0;
     }

     function getUsername(address _pubkey)external view returns(string memory)
     {
      require(checkUserExist(_pubkey), "User is not registered");
      return userList[msg.sender].name;
     }

     function signUp(string calldata _name) external 
     {
          require(!checkUserExist(msg.sender),"User Already Exist");
          // Replace bytes with bytes32 and try to recall.
          require(bytes(_name).length>0,"name can't be empty");
          userList[msg.sender].name =_name;
          allUserList.push(allUser(_name,msg.sender));
     }

      function addFriend(string calldata _name,address _friendsKey) external
     {
        require(checkUserExist(_friendsKey),"User does not exist");
        require(checkUserExist(msg.sender),"User does not exist");
        require(!allreadyFriend(_friendsKey,msg.sender),"User is already your friend");
        addingFriend(_name,_friendsKey,msg.sender);
        addingFriend(userList[msg.sender].name,msg.sender,_friendsKey);
     }

     function allreadyFriend(address _Key1,address _Key2) internal view returns (bool)
     {
         if(userList[_Key1].friendsList.length > userList[_Key2].friendsList.length)
         {
            address temp = _Key1;
            _Key1 = _Key2;
            _Key2 = temp;
         }
         for(uint i =0; i<userList[_Key1].friendsList.length;i++)
         {
            if(userList[_Key1].friendsList[i].pubkey == _Key2)
            return true;
         }
         return false;
         
     }

     function addingFriend(string memory _name,address _friendsKey,address _userKey) internal
     {
        Friends memory newFriend = Friends(_name,_friendsKey);
        userList[_userKey].friendsList.push(newFriend);
     }
      
      function getAllFriends(address _pubkey) external view returns(Friends[] memory)  
      {
          require(checkUserExist(_pubkey), "User is not registered");
          return userList[msg.sender].friendsList;
      }

       function getChatCode(address _Key1,address _Key2) internal pure returns(bytes32)
      {
         if(_Key1>_Key2)
         {
            return keccak256(abi.encodePacked(_Key1,_Key2));
         }
         else
         {
            return keccak256(abi.encodePacked(_Key2,_Key1));
         }
      }

      function sendMessage(string calldata _msg, address _friendkey)  external 
      {       
        require(checkUserExist(_friendkey),"User does not exist");
        require(checkUserExist(msg.sender),"User does not exist");
        require(allreadyFriend(msg.sender,_friendkey),"User is not your friend");
    
        bytes32 chatCode = getChatCode(msg.sender,_friendkey);   
        Message memory newMessage= Message(_msg,block.timestamp,msg.sender);
        allMessage[chatCode].push(newMessage);
      }
     
      function readMessage(address friend_key) external view returns(Message[] memory)
      {
     
        bytes32 chatCode = getChatCode(msg.sender, friend_key);
        return allMessage[chatCode];
      }
      
      function getAllUsers()external view returns(allUser[] memory)
      {
        return allUserList;
      }


}