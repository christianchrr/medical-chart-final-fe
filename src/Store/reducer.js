// Reducer is the component that is responsible for updating store (global state)
// When dispatch is called it submits an action to this reducer
// The reducer then determines what to do with the data that it receives
const Reducer = (state, action) => {
    switch(action.type) {
        // In this case, if the action type of a dispatch is 'set_patient_list',
        // we are setting patientList in store to whatever the payload is
        case 'SET_PATIENT_LIST':
            return {
                ...state,
                patientList: action.payload 
            }
        // Adds the new patient to the patientList array
        case 'ADD_PATIENT' :
            return { 
                ...state,
                patientList: [...state.patientList, action.payload]
            }
        // Find the patient we need to remove based on its ID -> 
        //   Find the index of the patient we need to remove from the array
        //   Slice the array and remove the patient at the relevant index
        //   Set patientList to the result
        case 'REMOVE_PATIENT':
            let pidx = state.patientList.findIndex(patient => patient.id === action.id);
            return { 
                ...state,
                patientList: [...state.patientList.slice(0, pidx), ...state.patientList.slice(pidx + 1)]
            }
            case 'SET_MEDICATION_LIST':
                return {
                    ...state,
                    medicationList: action.payload 
                }
            case 'ADD_MEDICATION' :
                return { 
                    ...state,
                    medicationList: [...state.medicationList, action.payload]
                }
            case 'REMOVE_MEDICATION':
                let midx = state.medicationList.findIndex(medication => medication.id === action.id);
                return { 
                    ...state,
                    medicationList: [...state.medicationList.slice(0, midx), ...state.medicationList.slice(midx + 1)]
                }
        default:
            return state
    }
}

export default Reducer