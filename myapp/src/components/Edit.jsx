import React, { useState } from 'react';
import axios from 'axios';

const Edit = ({ employee, onSave, onCancel }) => {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value
    }));
    // Clear error message when the input is changed
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: ''
    }));
  };

  const handleSave = async () => {
    // Validate form before saving
    const formErrors = validateForm(editedEmployee);
    if (Object.keys(formErrors).length === 0) {
      try {
        await axios.put(`http://localhost:3000/users/${editedEmployee.id}`, editedEmployee);
        onSave(editedEmployee);
      } catch (error) {
        console.log("Error updating employee:", error);
      }
    } else {
      // Set errors if form validation fails
      setErrors(formErrors);
    }
  };

  // Function to validate form fields
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
    <div>
      <h2>Edit Employee</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" value={editedEmployee.name} onChange={handleChange} />
        {errors.name && <span>{errors.name}</span>}
        <br></br><br></br>
        <label>Email:</label>
        <input type="email" name="email" value={editedEmployee.email} onChange={handleChange} />
        {errors.email && <span>{errors.email}</span>}
        <br></br><br></br>
        <label>Contact:</label>
        <input type="text" name="contact" value={editedEmployee.contact} onChange={handleChange} />
        {errors.contact && <span>{errors.contact}</span>}
        <br></br><br></br>
        <label>Password:</label>
        <input type="password" name="password" value={editedEmployee.password} onChange={handleChange} />
        {errors.password && <span>{errors.password}</span>}
        <br></br><br></br>
        <button type="button" onClick={handleSave}>Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Edit;
