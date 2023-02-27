import { usePageValues } from '../../hooks/PageControlContextProvider';
import { styled } from '@mui/material/styles';
import { useFormikContext } from 'formik';

const FormControlButtonContainer = () => {
    const [ pageState, dispatch] = usePageValues()
    const { errors, isValid, ...props } = useFormikContext()

    const BaseButton = styled('button')(({ theme }) => ({
        padding: '0.7rem 1rem',
        fontWeight: '600',

        ['&:hover']: {
            cursor: 'pointer'
        },

        ['&:disabled']: {
            cursor: 'not-allowed',
            backgroundColor: 'grey'
        },

        [theme.breakpoints.up(`${theme.breakpoints.values.desktop}`)]: {
            padding: '0.9rem 1.5rem',
            borderRadius: '10px',
            fontSize: '1rem'
        },
    }));


    const NextButton = styled(BaseButton)(({ theme }) => ({
        color: `${ theme.colors.neutral.white }`,
        backgroundColor: `${ theme.colors.primary.marine_blue }`,
        borderRadius: '5px',

        ['&:hover']: {
            backgroundColor: `${ theme.colors.primary.purplish_blue }`
        }
    }));

    return (
        pageState.curr_form_page === 4 
        ?
        null
        :
        <NextButton 
                type="button"
                onClick={ () => dispatch( { type: 'NEXT_FORM_PAGE' } ) }
                onMouseDown={ event => { event.preventDefault() }}
                name={'Next-Button'}
                disabled={ !isValid || !!Object.keys(errors).length }
            >
                Next Step
        </NextButton> 
    )
}

export default FormControlButtonContainer