import React, { useContext } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { UsersContext } from 'providers/UsersProvider';
import { useForm } from 'hooks/useForm';

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);

  const { formValues, clearFormValues, consentError, setFormValues, toggleConsent } = useForm();

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setFormValues(name, value);
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();

    if (formValues.consent) {
      handleAddUser(formValues);
      clearFormValues();
    } else {
      consentError();
    }
  };
  return (
    <form onSubmit={handleSubmitUser}>
      <FormField type="text" label="name" id="name" name="name" onChange={handleInputChange} value={formValues.name} />
      <FormField type="text" label="attendance" id="attendance" name="attendance" onChange={handleInputChange} value={formValues.attendance} />
      <FormField type="text" label="average" id="average" name="average" onChange={handleInputChange} value={formValues.average} />
      <FormField type="checkbox" label="consent" id="consent" name="consent" onChange={() => toggleConsent()} value={formValues.consent} />
      <button type="submit">Dodaj</button>
      {formValues.error ? <p style={{ color: 'red' }}>Musisz wyrazić zgodę !</p> : null}
    </form>
  );
};

export default AddUser;
