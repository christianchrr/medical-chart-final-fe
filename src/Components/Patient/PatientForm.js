import React from "react"
import '../../Styles/_patient-form.css'
import PatientService from '../../Services/patient'

class PatientForm extends React.Component {

    state = {
        patientName: "",
        patientAge: ""
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    // On form submit, prevent default to stop page from refreshing
    // Add new patient to the database using the patient service
    // Do a dispatch to add the new patient to the patient array in the reducer
    handleSubmit = (e) => {
        e.preventDefault()
        PatientService.createPatient(this.state.patientName, this.state.patientAge)
        let newPatient = {"name": this.state.patientName, "age": this.state.patientAge}

        // the purpose of dispatch is to update context (global state) using the reducer
        // dispatch takes one parameter called 'action' which is an object with 2 attributes (type, payload)
        // 'type' determines which case will be triggered in the reducer
        // 'payload' is the data we are sending in
        this.props.dispatch({type: 'ADD_PATIENT', payload: newPatient})
    }

    render() {
        return (
            <div className="patient-form-container">
                New Patient Form
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="patientName">
                            <input onChange={this.handleChange} type="text" name="patientName" placeholder="Patient Name" />
                        </label>
                        <br/>
                        <label htmlFor="patientAge">
                            <input onChange={this.handleChange} type="number" name="patientAge" placeholder="Patient Age" />
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-primary">Create Patient</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default PatientForm