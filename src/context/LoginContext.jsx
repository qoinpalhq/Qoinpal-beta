import React, { createContext, useContext, useState } from "react";
import {
  ENTER_DISPLAY_NAME,
  ENTER_EMAIL,
  VERIFY_EMAIL,
} from "../constants/sectionNames";
const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
  });
  const [currSection, setCurrSection] = useState("email");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("changed", name, value, formData);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <FormContext.Provider value={{ currSection, formData, handleInputChange }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
