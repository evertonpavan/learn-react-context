import { FC } from "react";
import { UserContextProvider } from "./user/UserContext";

const GlobalContext: FC = ({ children }) => {
    return <UserContextProvider> {children} </UserContextProvider>
}

export default GlobalContext;