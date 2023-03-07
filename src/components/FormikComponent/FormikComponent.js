import { Formik } from 'formik';
import PlanSelection, { initialValues } from '../../YupSchema/planSelection'
import FormControlButtonContainer from '../containers/FormControlButtonContainer'
import { Box } from '@mui/material';
import PersonalInfoForm from '../FormPages/PersonalInfoForm'

const FormikComponent = () => {

  return (
        <Formik
            initialValues={initialValues}
            validateOnMount={true}
            validationSchema={PlanSelection}
            onSubmit={( values ) => {
              console.log("submitted", values)
            }}
          >
            {props => (
              <Box>
                <form onSubmit={props.handleSubmit}>
                  <Box>
                    <PersonalInfoForm />
                    <FormControlButtonContainer />  
                  </Box>
                </form>
              </Box>
            )}

          </Formik>
    )
}

export default FormikComponent