export function fetchPatients() {
    return (dispatch) => {
      fetch('http://localhost:3000/patients')
        .then(response => response.json())
        .then(patients => dispatch({ type: 'THUNK_SET_PATIENT_LIST', payload: patients }));
    };
  }