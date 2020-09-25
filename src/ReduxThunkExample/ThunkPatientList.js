import React from 'react'
import ThunkPatientData from './ThunkPatientData'
import { connect } from 'react-redux'

class ThunkPatientList extends React.Component {

    render () {
        return (
            <div className="patient-list-container">
                <ul id="PatientList" className="list-group">
                    {this.props.patients.map((patient, index) => {
                        return(
                            <li key={index} className="list-group-item">
                                <ThunkPatientData patientName={patient.name} patientAge={patient.age} patientId={patient.id} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {patients: state.patients}
}

export default connect (mapStateToProps) (ThunkPatientList)