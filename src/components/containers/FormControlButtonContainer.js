import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
const FormControlButtonContainer = () => {
    const NextButton = styled('button')(() => ({

    }));

    return (
        <button 
            type="submit"
        >
            Next Step
        </button> 

        /*
        <NextButton 
            type="submit"
        >
            Next Step
        </NextButton> 
        */
    )
}

export default FormControlButtonContainer