import React from "react";
import Childcomponent from "./Childcomponents";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";
import { useState } from "react";
// class Mycomponent extends React.Component {
//     state = {
//         listUser: [
//             {id: 1, Name: "Dung", Age: 49 },
//             {id: 2, Name: "Hoang", Age: 16 },
//             {id: 3, Name: "Chien", Age: 32 },
//         ]
//     }

//     sum = (a,b) =>{
//         return a+b;
//     }
//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [ ...this.state.listUser, userObject]
//         });
//     }
//     render() {
//         return (
//             <>
//                 <div>
//                     <Childcomponent> </Childcomponent>
//                     <AddUserInfor handleAddnewUser={this.handleAddnewUser}></AddUserInfor>
//                 <hr />
//                     <DisplayInfor listUser={this.state.listUser}></DisplayInfor>
//                 </div>  
//             </>
//         )
//     }

// }

const Mycomponent = () =>{
    const [listUser,setlistUser] = useState(
        [
            {id: 1, Name: "Dung", Age: 49 },
            {id: 2, Name: "Hoang", Age: 16 },
            {id: 3, Name: "Chien", Age: 32 },   
        ]
    )
    const handleAddnewUser = (userObject) => {
        setlistUser([...listUser,userObject])
    }
    const handleDeleteUser = (userID) => {
        let clone = listUser;
        clone = clone.filter(item => item.id !== userID)
        setlistUser(clone);
    }
    const handleDeleteAllUser = () => {
        let clone = listUser;
        clone = [];
        setlistUser(clone);
    }
   return(
        <>
        <div>
            <AddUserInfor handleAddnewUser={handleAddnewUser}></AddUserInfor>
            <DisplayInfor listUser={listUser} handleDeleteUser={handleDeleteUser} handleDeleteAllUser={handleDeleteAllUser}></DisplayInfor>
        </div>
        </>
   )
}

export default Mycomponent
