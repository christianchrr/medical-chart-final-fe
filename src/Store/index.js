import React, { createContext, useReducer } from 'react'
import Reducer from './reducer'

const initialState = {
    patientList: [],
    medicationList: []
}

const StoreAction = ({ children }) => {

    // Initialize 'state' and 'dispatch' so that App can use them to manage state
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        //context lets you access store in nested components
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default StoreAction