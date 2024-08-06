import React, { useState } from 'react';
import StudentList from './StudentList';
import StudentCount from './StudentCount';

const School = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
        {/* calling bothe student list and student count component*/}
      <StudentList students={students} addStudent={addStudent} />
      <StudentCount count={students.length} />
    </div>
  );
};

export default School;
