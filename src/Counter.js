import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ initialValue = 0, increment = 1, interval = 1000 }) {
    const [counter, setCounter] = useState(initialValue)


    const updateCounter = () => {
        setInterval(() => {
            setCounter(counter => {
                console.log(counter);
                return counter + increment
            }
            )
        }, interval);
        return clearInterval(updateCounter);
    }
    useEffect(updateCounter, [])

    return <CounterDisplay counter={counter} />
}