import React, { useState } from "react";

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault(); // Ngăn trang tải lại

    if (age == 0 || name.trim() === "") {
        alert("Vui lòng nhập đầy đủ dữ liệu");
        return; // Dừng hàm nếu dữ liệu không hợp lệ
    }

    props.handleAddnewUser({
        id: Math.floor(Math.random() * 100) + 1 + "user",
        Name: name,
        Age: Number(age), // Chuyển age thành số
    });

    setAge("");
    setName("");
};


  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Your Name: </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <label>Your Age: </label>
          <input
            type="number"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddUserInfor;
