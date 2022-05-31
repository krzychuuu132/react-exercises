import React from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/FormField/FormField';

const AddUser = ({ handleInputChange, handleAddUser, formValues }) => {
  return (
    <form onSubmit={handleAddUser}>
      <FormField label="name" id="name" name="name" onChange={handleInputChange} value={formValues.name} />
      <FormField label="attendance" id="attendance" name="attendance" onChange={handleInputChange} value={formValues.attendance} />
      <FormField label="average" id="average" name="average" onChange={handleInputChange} value={formValues.average} />
      <button type="submit">Dodaj</button>
    </form>
  );
};

AddUser.propTypes = {};

export default AddUser;
