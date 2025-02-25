import React, { useEffect, useState } from "react";
// class DisplayInfor extends React.Component {
//   render() {
//    const listUser = this.props.listUser;
//     console.log(listUser);
//     return (
//       <>
//         <div>
//           {listUser.map((user) => {
//             return (
//               <>
//               <div key={user.id} className= { user.Age < 18 ? "red" : "blue"}>
//                     <p>My name is : {user.Name}</p>
//                     <p>My age is : {user.Age}</p>
//                 </div><hr />
//               </>
//             );
//           })}
//         </div>
//       </>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUser, handleDeleteUser, handleDeleteAllUser } = props;
  const [isShow, setIsShow] = useState(true);
  const [error, setError] = useState(""); // Trạng thái lưu lỗi
  const isOnChangeShow = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (listUser.length === 0) {
      setError("Danh sách người dùng đang trống!");
    } else {
      setError(""); // Xóa lỗi khi danh sách có dữ liệu
    }
  }, [listUser]); // useEffect chạy lại khi listUser thay đổi

  return (
    <>
      <span>{error}</span>
      <hr />
      <div>
        <button
          onClick={() => {
            handleDeleteAllUser();
          }}
        >
          Delete All
        </button>
        <button onClick={isOnChangeShow}>{isShow ? "Ẩn" : "Hiện"}</button>
        <hr />
        {isShow &&
          listUser.map((user) => {
            return (
              <>
                <div key={user.id} className={user.Age < 18 ? "red" : "blue"}>
                  <p>My name is : {user.Name}</p>
                  <p>My age is : {user.Age}</p>
                  <button
                    onClick={() => {
                      handleDeleteUser(user.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <hr />
              </>
            );
          })}
      </div>
    </>
  );
};
export default DisplayInfor;
