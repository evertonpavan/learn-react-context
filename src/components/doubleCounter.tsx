import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export function DoubleCounter() {
    const { doubleCounter } = useContext(CounterContext);

    return (
        <h1>Double Counter: {doubleCounter}</h1>
    )
}