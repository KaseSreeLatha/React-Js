import React, { createContext, useState, useContext } from 'react';

const FormDataContext = createContext();

export const ContextAPI = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    preference: '',
  });

  const updateFormData = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  return useContext(FormDataContext);
};