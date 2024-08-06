import React from 'react';

const StudentList = ({ students, addStudent }) => {
  const handleAddStudent = () => {
    const newStudent = `Student ${students.length + 1}`;
    addStudent(newStudent);
  };

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default StudentList;
