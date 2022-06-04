import { useReducer } from 'react';

const initialFormValue = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: false,
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'SET_FORM_VALUES':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'CLEAR_FORM_VALUES':
      return initialFormValue;
    case 'CONSENT_ERROR':
      return {
        ...state,
        error: true,
      };
    case 'TOGGLE_CONSENT':
      return {
        ...state,
        consent: !state.consent,
      };
    default:
      return state;
  }
};
export const useForm = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormValue);

  const clearFormValues = () => {
    dispatch({ type: 'CLEAR_FORM_VALUES' });
  };

  const consentError = () => {
    dispatch({ type: 'CONSENT_ERROR' });
  };

  const setFormValues = (name, value) => {
    dispatch({ type: 'SET_FORM_VALUES', name, value });
  };

  const toggleConsent = () => {
    dispatch({ type: 'TOGGLE_CONSENT' });
  };

  return {
    formValues,
    clearFormValues,
    consentError,
    setFormValues,
    toggleConsent,
  };
};
