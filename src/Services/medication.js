//async ensures that the funciton always returns a promise and wraps non promises in it
const getMedications = async () => {
    // 'catch' will handle any errors that occur when the code in 'try' runs
    try {
        const url = `http://localhost:3000/medications`
        //await makes JS wait until promise in resolved and returns result
        return await fetch(url,{
            method: 'GET',
        }).then(res => res.json())
    }
    catch (error) {
        console.log(error)
    }

}

const createMedication = (name, form, strength, patient_id) => {
    // 'catch' will handle any errors that occur when the code in 'try' runs
    try {
        const url = `http://localhost:3000/medications`
        fetch(url,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, form: form, strength: strength, patient_id: patient_id })
        })
    }
    catch (error) {
        console.log(error)
    }
}

const deleteMedication = (medicationId) => {
    try {
        const url = `http://localhost:3000/medications/${medicationId}`
        fetch(url,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
    }
    catch (error) {
        console.log(error)
    }
}

const MedicationService = {getMedications, createMedication, deleteMedication}

export default MedicationService