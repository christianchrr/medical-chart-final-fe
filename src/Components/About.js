import React from 'react'

const AboutPage = () => {

    return (
        <div className="about-page">
            <h3>About Page</h3>
            <br/>
            <p>This is a basic JavaScript Redux App that allows patients and medications to be tracked from a Rails API</p>
            <p>Fill out the correct fields in the forms to add a new patient or medication</p>
            <p>The Patients and Medications link send you to functional components that are using Context</p>
            <p>The Thunk Patients Example uses class components that are impementing redux-thunk to fetch the patients</p>
        </div>
    )

}

export default AboutPage