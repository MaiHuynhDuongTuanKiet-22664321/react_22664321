import React, { useState } from "react";

const DisplayInfor = (props) => {
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  const { listUser, handleDeleteUser, handleDeleteAllUser } = props; 
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  return (
    <>
      <hr />
      <button onClick={handleShowHideListUser}>
        {isShowHideListUser ? "Hide Users" : "Show Users"}
      </button> 
      <button onClick={() => handleDeleteAllUser()}>Delete All</button>
      <hr />
      {isShowHideListUser && (
        <>
          {listUser.length === 0 ? (
            <p>No users available</p>
          ) : (
            listUser.map((user) => (
              <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                <p>My name is: {user.Name}</p>
                <p>My age is: {user.Age}</p>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                <hr />
              </div>
            ))
          )}
        </>
      )}
    </>
  );
};

export default DisplayInfor;
