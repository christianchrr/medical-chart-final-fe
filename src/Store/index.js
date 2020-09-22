import React, { createContext, useReducer } from 'react'
import Reducer from './reducer'

const initialState = {
    patientList: [],
    medicationList: []
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return (
        //context lets you access store in nested components
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export const Context = createContext(initialState)
export default Store