import React, { createContext, useState, useContext } from 'react'
import { Sample2 } from './Sample2'

export const NameContext = createContext()//context created

function Context() {
    const [name, setName] = useState("John")
    return (
        // contextName.Provider
        <NameContext.Provider value={name}>
            <div>Context
                <h1>{name}</h1>
                <Sample />
                <Sample1 />
                <Sample2 />
            </div>
        </NameContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(NameContext)
}

function Sample() {
    const nm = useContext(NameContext)
    return (
        <h1>Hi {nm}</h1>
    )
}

function Sample1() {
    const nm = useContext(NameContext)
    return (
        <h1>Welcome {nm}</h1>
    )
}






export default Context