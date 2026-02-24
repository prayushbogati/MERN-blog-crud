import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export const UseAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error("useAuthContext is only available inside authContextProvider")
    }

    return context
}