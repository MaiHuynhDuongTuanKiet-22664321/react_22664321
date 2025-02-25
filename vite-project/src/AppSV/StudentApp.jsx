import React, { useState, useEffect, useRef, useMemo, useReducer } from "react";

// Khởi tạo reducer để quản lý danh sách sinh viên
const studentReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return [...state, action.payload];
    case "EDIT_STUDENT":
      return state.map((student, index) =>
        index === action.payload.index ? action.payload.student : student
      );
    case "DELETE_STUDENT":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

const StudentApp = () => {
  const [students, dispatch] = useReducer(studentReducer, []);
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  const nameRef = useRef(null);

  // Lưu và tải danh sách từ localStorage
  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("students"));
    if (storedStudents) {
      dispatch({ type: "SET_STUDENTS", payload: storedStudents });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Tính điểm trung bình
  const averageScore = useMemo(() => {
    if (students.length === 0) return 0;
    return (
      students.reduce((sum, student) => sum + parseFloat(student.score), 0) /
      students.length
    ).toFixed(2);
  }, [students]);

  // Xử lý thêm sinh viên
  const addStudent = () => {
    if (name && score) {
      dispatch({ type: "ADD_STUDENT", payload: { name, score: parseFloat(score) } });
      setName("");
      setScore("");
      nameRef.current.focus();
    }
  };

  // Xử lý sửa sinh viên
  const editStudent = (index) => {
    const student = students[index];
    setName(student.name);
    setScore(student.score);
    dispatch({ type: "DELETE_STUDENT", payload: index });
    nameRef.current.focus();
  };

  // Xử lý xoá sinh viên
  const deleteStudent = (index) => {
    dispatch({ type: "DELETE_STUDENT", payload: index });
  };

  return (
    <div>
      <h2>Quản lý Sinh Viên</h2>
      <input
        ref={nameRef}
        type="text"
        placeholder="Tên sinh viên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Điểm"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={addStudent}>Thêm sinh viên</button>
      <h3>Danh sách sinh viên</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.name} - {student.score}
            <button onClick={() => editStudent(index)}>Sửa</button>
            <button onClick={() => deleteStudent(index)}>Xoá</button>
          </li>
        ))}
      </ul>
      <h3>Điểm trung bình: {averageScore}</h3>
    </div>
  );
};

export default StudentApp;
