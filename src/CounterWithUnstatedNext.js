import React, { useState, createContext, useContext } from 'react'
import { createContainer } from 'unstated-next'

function useCounter () {
  let [count, setCount] = useState(0)
  let increment = () => setCount(count + 1)
  let decrement = () => setCount(count - 1)
  return { count, decrement, increment }
}

let Counter = createContainer(useCounter)

function CounterDisplay () {
  let counter = Counter.useContainer()
  return (
    <div>
      <div>counter with unstated next</div>
      <button onClick={counter.decrement}>-</button>
      <span>{counter.count}</span>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

function CounterWithUnstatedNext () {
  return (
    <Counter.Provider>
      <CounterDisplay />

      <Counter.Provider initialState={2}>
        <CounterDisplay />
      </Counter.Provider>

    </Counter.Provider>
  )
}

export default CounterWithUnstatedNext