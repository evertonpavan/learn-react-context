import { createContext, useState } from "react";

type UserType = {
    name: string;
    lastName: string;
    email: string;
};

type UserContextProps = {
    state: UserType;
    setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_STATE = {
    state: {
        name: "",
        lastName: "",
        email: "",
    },
    setState: () => { },
}

const UserContext = createContext<UserContextProps>(DEFAULT_STATE);

const UserContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAULT_STATE.state);

    return (
        <UserContext.Provider
            value={{
                state,
                setState
            }}>
            {children}
        </UserContext.Provider>
    );
}

export  { UserContextProvider };
export default UserContext;