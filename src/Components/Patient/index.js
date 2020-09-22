import React, { useContext } from 'react'
import { Context } from '../../Store/index'
import PatientForm from './PatientForm'
import PatientList from './PatientList'

const Patient = () => {
    const [state, dispatch] = useContext(Context)

    return (
        <div className="patient-container">
            <h3>All Patients</h3>
            <br/>
            <PatientList />
            
            {/* Since PatientForm is a class-based component, we need to pass in dispatch and state as props */}
            <PatientForm dispatch={dispatch} state={state} />
        </div>
    )
}

export default Patient