import React, { useContext, useState } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { UsersContext } from 'providers/UsersProvider';

const initialFormValue = {
  name: '',
  attendance: '',
  average: '',
};

const AddUser = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    attendance: '',
    average: '',
  });
  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues({ ...initialFormValue });
  };
  return (
    <form onSubmit={handleSubmitUser}>
      <FormField label="name" id="name" name="name" onChange={handleInputChange} value={formValues.name} />
      <FormField label="attendance" id="attendance" name="attendance" onChange={handleInputChange} value={formValues.attendance} />
      <FormField label="average" id="average" name="average" onChange={handleInputChange} value={formValues.average} />
      <button type="submit">Dodaj</button>
    </form>
  );
};

export default AddUser;
