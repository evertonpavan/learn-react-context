import { FC } from "react";
import { AuthContextProvider } from "./auth/AuthContext";

const AuthContext: FC = ({ children }) => {
    return (
        <>
            <AuthContextProvider> {children} </AuthContextProvider>
        </>
    )
}

export { AuthContext };