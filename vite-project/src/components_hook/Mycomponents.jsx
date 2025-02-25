import React from "react";
import { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

const Mycomponent = () =>{
    const [listUser,setlistUser] = useState(
        [
            { id: 1, Name: "Dung", Age: 49 },
            { id: 2, Name: "Hoang", Age: 17 },
            { id: 3, Name: "Chien", Age: 32 },

        ]
    )
    const handleAddnewUser = (userObject) =>{
        setlistUser([...listUser,userObject])
    }
    const handleDeleteUser = (userID) =>{
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userID);
        setlistUser(listUserClone);
    }
    const handleDeleteAllUser = () =>{
        let listUserClone = listUser;
        listUserClone = [];
        setlistUser(listUserClone);
    }
    
    return(
        <>
        <div>
            <AddUserInfor handleAddnewUser = {handleAddnewUser}></AddUserInfor>
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} handleDeleteAllUser={handleDeleteAllUser}></DisplayInfor>
        </div>

        </>
    )

}
export default Mycomponent