import React from 'react'
import { useState } from 'react'
import { useCounter } from './hooks/useCounter'

const CounterHook = () => {
    const {count, increaseCount} = useCounter()

    return (
        <>
            <button onClick={increaseCount}>
            Count is {count}
            </button>
        </>
    )
}

export default CounterHook