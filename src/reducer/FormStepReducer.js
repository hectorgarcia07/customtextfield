const FormStepReducer = (state, action) => {
    const curr_state = state.curr_form_page
    /*
    Will be used to change the form page. If it is 4, then submit button should appear.
    */
    switch ( action.type ) {
        case 'NEXT_FORM_PAGE':
            return { curr_form_page: curr_state < 3 ? curr_state + 1 : curr_state }
        case 'PREV_FORM_PAGE':
            return { curr_form_page: curr_state > 0 ? curr_state - 1 : curr_state }
        case 'CHANGE_PLAN_TYPE':
            return { curr_form_page: 1 }
        case 'SUBMIT_SUCCESS':
            return { curr_form_page: 4 }
        default:
            throw new Error()
    }
}

export default FormStepReducer