import { AuthContext } from './contexts';
import Router from './routes';

import './styles/App.css';

function App() {

  return (
    <AuthContext>
      <Router />
    </AuthContext>
  );
}

export default App;
