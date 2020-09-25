import React from "react"
import '../../Styles/_patient-form.css'
import MedicationService from '../../Services/medication'

class MedicationForm extends React.Component {

    state = {
        medicationName: "",
        medicationForm: "",
        medicationStrength: ""
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
    // Do a dispatch to add the new medication to the medication array in the reducer
    handleSubmit = (e) => {
        e.preventDefault()
        MedicationService.createMedication(this.state.medicationName, this.state.medicationForm, this.state.medicationStrength)
        let newMedication = {"name": this.state.medicationName, "form": this.state.medicationForm, "strength": this.state.medicationStrength}

        // the purpose of dispatch is to update context (global state) using the reducer
        // dispatch takes one parameter called 'action' which is an object with 2 attributes (type, payload)
        // 'type' determines which case will be triggered in the reducer
        // 'payload' is the data we are sending in
        this.props.dispatch({type: 'ADD_MEDICATION', payload: newMedication})
    }

    render() {
        return (
            <div className="patient-form-container">
                Add Medication
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="medicationName">
                            <input onChange={this.handleChange} type="text" name="medicationName" placeholder="Medication Name" />
                        </label>
                        <br/>
                        <label htmlFor="medicationForm">
                            <input onChange={this.handleChange} type="text" name="medicationForm" placeholder="Medication Form" />
                        </label>
                        <br/>
                        <label htmlFor="medicationStrength">
                            <input onChange={this.handleChange} type="text" name="medicationStrength" placeholder="Medication Strength" />
                        </label>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-outline-primary">Add</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default MedicationForm