import { createContext, useReducer } from "react";

export const BlogContext = createContext()

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            }
        case 'CREATE_BLOGS':
            return {
                blogs: [action.payload, ...state.blogs]
            }
        case 'DELETE_BLOG':
            return {
                blogs: state.blogs.filter((b) => (
                    b._id !== action.payload._id
                ))
            }
        default:
            return state
    }
}

export const BlogContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, {
        blogs: []
    })
    return (
        <BlogContext.Provider value={{ ...state, dispatch }}>
            {children}
        </BlogContext.Provider>
    )
}