import { useContext } from "react";
import CounterContext from "../../contexts/counter/CounterContext";

export function HandleCounter() {
    const {counter, increaseCounter } = useContext(CounterContext);

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={increaseCounter}>Increase Counter</button>
        </div>
    )
}