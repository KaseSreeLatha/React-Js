import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [students, setStudents] = useState([]);
  const [sname,setSname] = useState('');
  const [course, setCourse] = useState('');


  useEffect(() =>{
    axios.get('http://localhost:5000/api/students')
    .then(res => {
      setStudents(res.data);
    }).catch(err => console.error(err));
  },[]);


  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/students', {sname, course})
    .then(res => {
      setStudents([...students, res.data]);
      setSname('');
      setCourse('');
    }).catch(err => console.error(err));
  };
  return (
    <div>
      <h1>Students List</h1>
      <ol>
        {students.map(student => (
          <li key={student.id}>{student.sname} {student.course}</li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
       Student Name : <input type="text" value={sname} onChange={e => setSname(e.target.value)} /> <br/>
       Course : <input type="text" value={course} onChange={e => setCourse(e.target.value)} /> <br/>
       <button type="submit">Add Student</button>
      
      </form>
    </div>
  );
}


export default App;

