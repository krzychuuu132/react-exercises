import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem 0;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ label, name, id, type = 'string', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} {...props} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormField;
