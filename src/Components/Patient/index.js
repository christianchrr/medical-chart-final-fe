import React from "react"
import PatientForm from './PatientForm'
import PatientList from './PatientList'

const Patient = () => {
    return (
        <div className="patient-container">
            Main Patient Container
            <PatientList />
            <PatientForm />
        </div>
    )
}

export default Patient