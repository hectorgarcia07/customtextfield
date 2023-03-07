import * as yup from 'yup';
/*
YUP schema
*/

const PlanSelection = yup.object().shape({
    name: yup.string().required("This field is required"),
})

export const initialValues = {
    name: ''
  }

export default PlanSelection