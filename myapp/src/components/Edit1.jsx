import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Edit from './Edit';

const Edit1 = () => {
  const [data, setData] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [errors, setErrors] = useState({});

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

  const handleEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleSaveEdit = (updatedEmployee) => {
    const updatedData = data.map(employee => (employee.id === updatedEmployee.id ? updatedEmployee : employee));
    setData(updatedData);
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    setEditingEmployee(null);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      const updatedData = data.filter(employee => employee.id !== id);
      setData(updatedData);
      console.log("Employee deleted successfully!");
    } catch (error) {
      console.log("Error deleting employee:", error);
    }
  };

  const validateForm = (employee) => {
    const errors = {};

    if (!employee.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!employee.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(employee.email)) {
      errors.email = 'Invalid email address';
    }

    if (!employee.contact.trim()) {
      errors.contact = 'Contact number is required';
    } else if (!/^\d{10}$/.test(employee.contact)) {
      errors.contact = 'Contact number must be 10 digits';
    }

    if (!employee.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
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
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.contact}</td>
              <td>{employee.password}</td>
              <td>
                {editingEmployee === employee ? (
                  <Edit
                    employee={employee}
                    onSave={handleSaveEdit}
                    onCancel={handleCancelEdit}
                    errors={errors}
                    setErrors={setErrors}
                  />
                ) : (
                  <button onClick={() => handleEdit(employee)}>
                    <FaEdit />
                  </button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Edit1;
