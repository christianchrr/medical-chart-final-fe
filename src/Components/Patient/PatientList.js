import React, { useEffect, useContext } from 'react'
import { Context } from '../../Store/index'
import PatientService from '../../Services/patient'
import PatientData from './PatientData'

const PatientList = () => {

    const [state, dispatch] = useContext(Context)

    const fetchPatients = () => {
        PatientService.getPatients()
        .then(res => {
            dispatch({type: 'SET_PATIENT_LIST', payload: res})
        })
    }

    // useEffect is kind of like an event listener. It listens to what is in the dependency array.
    // Whenever the items in the dependency array are instantiated/updated, the useEffect will run.
    // If the dependency array is blank, the useEffect will run as soon as the component renders.
    useEffect( () => {
        fetchPatients()
    }, []) // The [] is the dependency array

    // Example - whenever state.patientList is instantiated or updated, exampleFunction() will run.
    // This useEffect will run first when state.patientList is instantiated (in store/index.js), and then again
    // when patientList gets updated by fetchPatient
    /*useEffect( () => {
        // exampleFunction()
    }, [state.patientList])*/ 

    // You can also have a function in the dependency array
    // In this example, doStuff() will only run once the 'fetchPatients' function is available
    /*useEffect( () => {
        // doStuff()
    }, [fetchPatients])*/ 

    return(
        <div className="patient-list-container">
            <ul id="PatientList" className="list-group">
                {/* Creates an <li> for every patient in state.patientList */}
                {state.patientList.map((patient, index) => {
                    return(
                        <li key={index} className="list-group-item">
                            {/* if we were using redux-thunk line 45 would have to call this.props.patientName/Age */}
                            <PatientData patientName={patient.name} patientAge={patient.age} patientId={patient.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PatientList