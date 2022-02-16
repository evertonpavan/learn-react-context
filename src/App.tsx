// import { DoubleCounter } from './components/doubleCounter';
// import { HandleCounter } from './components/handleCounter';
import GlobalContext from './contexts';
// import { CounterContextProvider } from './contexts/CounterContext';
import Router from './routes';

function App() {

  return (
    <GlobalContext>
      <Router />
    </GlobalContext>


    // <CounterContextProvider>
    //   <div>
    //     <HandleCounter />
    //     <DoubleCounter />
    //   </div>
    // </CounterContextProvider>
  );
}

export default App;
