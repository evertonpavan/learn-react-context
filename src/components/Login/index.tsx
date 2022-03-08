import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

export function LoginForm() {

    const { Login, user, authenticated } = useAuth()

    const [username, setUsername] = useState<string | null>(user);
    const [password, setPassword] = useState<string | null>(null);

    let navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const isAuthenticaded = await Login(
            { username, password }
        );

        if (!isAuthenticaded) {
            alert('Invalid credentials')
            return;
        }

        navigate('/dashboard')
    }

    return (
        <div className="login-wrapper">
            {
                authenticated
                    ? <>
                    <p>You are authenticated</p>  
                     <Link to="/dashboard">Dashboard</Link>
                    </>
                    : <>
                        <h1>Please Log In</h1>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <p>Username</p>
                                <input
                                    type="text"
                                    onChange={e => setUsername(e.target.value)} />
                            </label>
                            <label>
                                <p>Password</p>
                                <input
                                    type="password"
                                    onChange={e => setPassword(e.target.value)} />
                            </label>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </>
            }
        </div>
    )
}
