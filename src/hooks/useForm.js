import { useState } from 'react';
import validate from 'validate.js';

const useForm = (initialValues, constraints, submitCallback) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values, constraints);
    setErrors(validationErrors || {});

    if (!validationErrors) {
      submitCallback(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
