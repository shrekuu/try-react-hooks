import React, { useState } from 'react'
import constate from 'constate'

function useCounter () {
  let [count, setCount] = useState(0)
  let increment = () => setCount(prevCount => prevCount + 1)
  let decrement = () => setCount(prevCount => prevCount - 1)
  return { count, decrement, increment }
}

const [CounterProvider, useCounterContext] = constate(useCounter)

function CounterDisplay () {
  const counter = useCounterContext()
  return (
    <div>
      <div>counter with constate</div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

function CounterWithConstate () {
  return (
    <CounterProvider>
      <CounterDisplay/>
      <CounterDisplay/>
    </CounterProvider>
  )
}

export default CounterWithConstate