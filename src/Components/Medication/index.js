import React, { useContext } from 'react'
import { Context } from '../../Store/index'
import MedicationForm from './MedicationForm'
import MedicationList from './MedicationList'

const Medication = () => {
    const [state, dispatch] = useContext(Context)

    return (
        <div className="medication-container">
            <h3>All Medications</h3>
            <br/>
            <MedicationList />
            
            {/* Since MedicationForm is a class-based component, we need to pass in dispatch and state as props */}
            <MedicationForm dispatch={dispatch} state={state} />
        </div>
    )
}

export default Medication