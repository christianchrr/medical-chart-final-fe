import React from "react"
import '../../Styles/_patient-form.css'

class PatientForm extends React.Component {

    state = {
        name: "",
        age: ""
    }

    handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        this.setState({
            [key]: value
        })
    }

    handleSubmit = (e) => {
        
    }

    render() {
        return (
            <div className="patient-form-container">
                New Patient Form
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label for="patientName">
                            <input onChange={this.handleChange} type="text" name="patientName" placeholder="Patient Name" />
                        </label>
                        <br/>
                        <label for="patientAge">
                            <input onChange={this.handleChange} type="number" name="patientAge" placeholder="Patient Age" />
                        </label>
                    </div>
                    <div>
                        <button type="submit">Create Patient</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default PatientForm