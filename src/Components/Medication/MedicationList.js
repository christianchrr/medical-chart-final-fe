import React, { useEffect, useContext } from 'react'
import { Context } from '../../Store/index'
import MedicationService from '../../Services/medication'
import MedicationData from './MedicationData'

const MedicationList = () => {

    const [state, dispatch] = useContext(Context)

    const fetchMedications = () => {
        MedicationService.getMedications()
        .then(res => {
            dispatch({type: 'SET_MEDICATION_LIST', payload: res})
        })
    }

    // useEffect is kind of like an event listener. It listens to what is in the dependency array.
    // Whenever the items in the dependency array are instantiated/updated, the useEffect will run.
    // If the dependency array is blank, the useEffect will run as soon as the component renders.
    useEffect( () => {
        fetchMedications()
    }, []) // The [] is the dependency array

    // Example - whenever state.patientList is instantiated or updated, exampleFunction() will run.
    // This useEffect will run first when state.medicationList is instantiated (in store/index.js), and then again
    // when medicationList gets updated by fetchMedications
    /*useEffect( () => {
        // exampleFunction()
    }, [state.medicationList])*/ 

    // You can also have a function in the dependency array
    // In this example, doStuff() will only run once the 'fetchMedications' function is available
    /*useEffect( () => {
        // doStuff()
    }, [fetchMedications])*/ 

    return(
        <div className="medication-list-container">
            <ul className="list" id="MedicationList">
                {/* Creates an <li> for every patient in state.medicationList */}
                {state.medicationList.map((medication, index) => {
                    return(
                        <li key={index}>
                            <MedicationData medicationName={medication.name} medicationForm={medication.form} medicationStrength={medication.strength} medicationId={medication.id} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MedicationList