import React, {useContext} from 'react'
import PatientService from '../../Services/patient'
import { Context } from '../../Store/index'
import Medication from '../Medication'

const PatientData = (props) => {

    const [state, dispatch] = useContext(Context)

    const removePatient = (patientId) => {
        PatientService.deletePatient(patientId)
        dispatch({type: 'REMOVE_PATIENT', id: patientId})
    }

    return(
        <div>
            {props.patientName}, {props.patientAge} | <button onClick={() => removePatient(props.patientId)}>Delete</button>
            <p>____________________</p>
            <br/>
        </div>
    )
}

export default PatientData