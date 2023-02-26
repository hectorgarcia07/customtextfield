import * as React from 'react';
import CustomInputField from '../FormComponents/CustomInputField';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { Field } from 'formik';

const PersonalInfoForm = () => {
  /*
THIS is where i need help. I'm not sure if I built my custom input form correctly or not

  */

  return (
    <FormControlUnstyled>
      <h1 >
        Personal info
      </h1>
      <p>
        Please provide your name, email address, and phone number.
      </p>

      <Field
        key={`personalInfo-name`}
        name="name"
        id="name"
        placeholder="e.g. Stephen King" 
        label="Name"

        component={CustomInputField} 
      />

      <Field 
        key={`personalInfo-email`}
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com" 
        label="Email Address"

        component={CustomInputField} 
      />

      <Field 
        key={`personalInfo-phone`}
        name="phone"
        id="phone"
        placeholder="e.g. +1 123 123 1234" 
        label="Phone Number"
        maxLength={15}

        component={CustomInputField} 
      />
    </FormControlUnstyled>
  );
}

export default PersonalInfoForm