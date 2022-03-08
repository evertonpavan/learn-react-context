import { createContext, ReactNode, useState } from "react";

type AuthContextProps = {
    children: ReactNode;
}

interface ICredentials {
    username: string | null;
    password: string | null;
}

interface IAuthContext {
    authenticated: boolean;
    user: string | null;
    Login: (credentials: ICredentials) => boolean | void;
    Logout: () => boolean;
}


export const intialValue: IAuthContext = {
    authenticated: false,
    user: null,
    Login: () => { return false },
    Logout: () => {return false },

}


const AuthContext = createContext<IAuthContext>(intialValue);

function AuthContextProvider ({ children }: AuthContextProps) {
    const [authenticated, setAuthenticated] = useState(intialValue.authenticated);
    const [user, setUser] = useState(intialValue.user);

    function Logout() {
        setUser(null);
        setAuthenticated(false);
        localStorage.removeItem('user');

        return true
    }

    function Login(credentials: ICredentials) {

        if (!credentials.username) return false;
        if (!credentials.password) return false;

        const { username } = credentials
        setUser(username);
        setAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(username));

        return true
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                user,
                Login,
                Logout
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export  { AuthContextProvider };
export default AuthContext;