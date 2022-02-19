import { useContext } from "react";
import CounterContext from "../../contexts/counter/CounterContext";

export function DoubleCounter() {
    const { doubleCounter } = useContext(CounterContext);

    return (
        <h1>Double Counter: {doubleCounter}</h1>
    )
}