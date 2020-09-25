function patientsReducer(state = { patients: [] }, action) {
    switch (action.type) {
   
        case 'THUNK_SET_PATIENT_LIST':
            return {
                ...state,
                patients: action.payload
            }
   
        default:
            return state;
    }
  };

  export default patientsReducer