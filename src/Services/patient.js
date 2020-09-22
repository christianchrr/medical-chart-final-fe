//async ensures that the funciton always returns a promise and wraps non promises in it
const getPatients = async () => {
    //try and catch used to try to run and catch will accept error as param if try fails
    try {
        const url = `http://localhost:3000/patients`
        //await makes JS wait until promise in resolved and returns result
        return await fetch(url,{
            method: 'GET',
        }).then(res => res.json())
    }
    catch (error) {
        console.log(error)
    }

}

const createPatient = (name, age) => {
    // 'catch' will handle any errors that occur when the code in 'try' runs
    try {
        const url = `http://localhost:3000/patients`
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, age: age })
        }).then(res => res.json())
    }
    catch (error) {
        console.log(error)
    }
}


const deletePatient = (patientId) => {
    try {
        const url = `http://localhost:3000/patients/${patientId}`
        fetch(url,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    }
    catch (error) {
        console.log(error)
    }
}

const PatientService = {getPatients, createPatient, deletePatient}

export default PatientService