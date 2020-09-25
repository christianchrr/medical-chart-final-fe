import React, {useContext} from 'react'
import MedicationService from '../../Services/medication'
import { Context } from '../../Store/index'

const MedicationData = (props) => {

    const [state, dispatch] = useContext(Context)

    const removeMedication = (medicationId) => {
        MedicationService.deleteMedication(medicationId)
        dispatch({type: 'REMOVE_MEDICATION', id: medicationId})
    }

    return(
        <div>
            {props.medicationName}, {props.medicationForm}, {props.medicationStrength} | <button className="btn btn-outline-danger" onClick={() => removeMedication(props.medicationId)}>Delete</button>
        </div>
    )
}

export default MedicationData