import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import InputUnstyled from '@mui/base/InputUnstyled';
import { Box } from '@mui/material';
import * as React from 'react';

const CustomInput = React.forwardRef(function CustomInput( props, ref ) {
    console.log(ref)
    return (
        <InputUnstyled  {...props} ref={ref} />
    );
});

const CustomInputField = ({ field, form: { touched, errors }, ...props }) => {
    const error = ([field.name] in touched ) && ([field.name] in errors)

    return (
        <FormControlUnstyled { ...field } error={ error } required >
            <Box>
                {/*Is used to display field title*/}
                <h1 htmlFor={field.name}  error={ error }>{props.label}</h1>

                {/*Is used to display erros*/}
                <p id={`${field.name}-error-text`} error={error}>{errors[field.name]}</p>
            </Box>

            {/*Is the custom field input*/}
            <CustomInput
                id={props.id}
                name={field.name}
                placeholder={props.placeholder}
                slotProps={{ input: { maxLength: props.maxLength } }}
                aria-describedby={`${field.name}-input-text`}
            />
      </FormControlUnstyled>
    )
}

export default CustomInputField