import React from 'react'
import { connect } from 'react-redux'
import { fetchPatients } from './thunkAction'
import ThunkPatientList from './ThunkPatientList'

class ThunkChild extends React.Component {

    componentDidMount = () => {
        this.props.boundFetchPatients()
    }

    render () {
        return (
            <div>
                <ThunkPatientList />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {patients: state.patients}
}

function mapDispatchToProps(dispatch){
    return { boundFetchPatients: () => dispatch(fetchPatients()) }
}

export default connect (mapStateToProps, mapDispatchToProps) (ThunkChild)