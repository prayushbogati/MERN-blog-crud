import { createContext, useReducer } from "react";

export const authContext = createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                user: action.payload
            }
        case "LOGOUT":
            return {
                user: null
            }
        default:
            return state
    }
}

export const authContextProvider = (children) => {
    const [state, dispatch] = useReducer(reducer, {
        user: null
    })

    console.log("");

    return (
        <authContext.Provider value={{ ...state, dispatch }}>
            {children}
        </authContext.Provider>
    )
}