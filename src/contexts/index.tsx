import { FC } from "react";
import { CounterContextProvider } from "./counter/CounterContext";
import { UserContextProvider } from "./user/UserContext";

const GlobalContext: FC = ({ children }) => {
    return (
        <>
            <UserContextProvider> {children} </UserContextProvider>
        </>
    )
}

export  { GlobalContext };


const CounterContext: FC = ({ children }) => {
    return (
        <>
            <CounterContextProvider> {children} </CounterContextProvider>
        </>
    )
}

export { CounterContext };