import React, {useContext} from 'react'
import PatientService from '../../Services/patient'
import { Context } from '../../Store/index'

const PatientData = (props) => {

    const [state, dispatch] = useContext(Context)

    const removePatient = (patientId) => {
        PatientService.deletePatient(patientId)
        dispatch({type: 'REMOVE_PATIENT', id: patientId})
    }

    return(
        <div>
            {props.patientName}, {props.patientAge} | <button className="btn btn-outline-danger" onClick={() => removePatient(props.patientId)}>Delete</button>
        </div>
    )
}

export default PatientData