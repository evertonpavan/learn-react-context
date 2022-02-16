import { createContext, ReactNode, useEffect, useState } from "react";

type CounterContextProps = {
  children: ReactNode;
}

interface ICounterContext {
    counter: number;
    doubleCounter: number;
    setCounter?: (newCounter: number) => void ;
    increaseCounter?: () => void;
}

export const initialValue: ICounterContext = {
    counter: 0,
    doubleCounter: 0,
    setCounter: () => {},
    increaseCounter: () => {}
  }

export const CounterContext = createContext<ICounterContext>(initialValue);
// export const CounterContext = createContext<ICounterContext | undefined>(undefined);
// export const CounterContext = createContext();

// export const  CounterContextProvider: FC = ({ children }) => {
export function CounterContextProvider ({ children }: CounterContextProps) {
  const [counter, setCounter] = useState(initialValue.counter);
  const [doubleCounter, setDoubleCounter] = useState(initialValue.doubleCounter);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  useEffect(() => {
    setDoubleCounter(counter * 2);
  }, [counter]);

  return (
    <CounterContext.Provider
      value={{
        counter,
        doubleCounter,
        setCounter,
        increaseCounter
      }}>
      {children}
    </CounterContext.Provider>
  )
}