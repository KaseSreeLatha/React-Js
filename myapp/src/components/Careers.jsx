import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Careers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="container">
      <h3 className="mt-4">Employee Data</h3>
      <table className="table mt-4 table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Employee Name</th>
            <th>Employee Email</th>
            <th>Employee Contact</th>
            <th>Employee Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.contact}</td>
              <td>{employee.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Careers;
