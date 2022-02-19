import {GlobalContext} from './contexts';
import {CounterContext} from './contexts';
import Router from './routes';

function App() {

  return (
    <GlobalContext>
      <CounterContext>
        <Router />
      </CounterContext>
    </GlobalContext>
  );
}

export default App;
