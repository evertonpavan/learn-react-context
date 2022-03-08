import { useAuth } from '../../hooks/useAuth';
import { useNavigate  } from 'react-router-dom';

export function Dashboard() {
    const { Logout, user } = useAuth()

    let navigate = useNavigate();

    async function handleLogout()  {
        const isLogout = await Logout();

        if (isLogout) {
            navigate('/')
        }   
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>
                Welcome, {user}!
            </h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}