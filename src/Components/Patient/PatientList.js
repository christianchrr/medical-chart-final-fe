import React from 'react'

const PatientList = () => {

    const mockPatientData = [
        {"name": "Christian Cherry", "age": "28"},
        {"name": "Ben Byrd", "age": "27"}
    ]

    return(
        <div className="patient-list-container">
            <ul className="list">
                {mockPatientData.map((patient) => {
                    return(
                        <li>
                            {patient.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PatientList