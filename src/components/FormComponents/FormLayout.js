import { usePageValues } from '../../hooks/PageControlContextProvider';
import {
    PersonalInfoForm,
} from './../FormPages'

/*
    will be used to display diffrent parts of a form
*/
const FormLayout = () => {
    const [ pageState, ] = usePageValues()

    const renderFormPage = () => {
        switch(pageState.curr_form_page) {
            case 0:
                return <PersonalInfoForm />
            case 1: 
                return <div>Form Page 2</div> 
            default:
                throw new Error()
        }
    }

    return(
        <>
            { renderFormPage() }
        </>
    )
}

export default FormLayout