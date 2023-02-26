import { Formik } from 'formik';
import PlanSelection, { initialValues } from '../../YupSchema/planSelection'
import FormControlButtonContainer from '../containers/FormControlButtonContainer'
import FormLayout from '../FormComponents/FormLayout'
import  { usePageValues } from '../../hooks/PageControlContextProvider'
import { Box } from '@mui/material';

const FormikComponent = () => {
  const [ , dispatch] = usePageValues()

  return (
        <Formik
            initialValues={initialValues}
            validateOnMount={true}
            validationSchema={PlanSelection}
            onSubmit={( values ) => {
              console.log("submitted", values)
              dispatch( { type: 'SUBMIT_SUCCESS' } )
            }}
          >
            {props => (
              <Box>
                <form onSubmit={props.handleSubmit}>
                  <Box>
                    <FormLayout />
                    <FormControlButtonContainer />  
                  </Box>
                </form>
              </Box>
            )}

          </Formik>
    )
}

export default FormikComponent