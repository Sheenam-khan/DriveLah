import React, { useState } from 'react'
import useCounter from './hooks/useCounter'

export default function Counter() {
  const { count, increment, decrement } = useCounter()

  console.log("hello seenam", count)
  return (
    <div>Counter
      <h1>{count}</h1>
      <button onClick={() => {
        increment()
        increment()
      }}>Increment</button>
      <button onClick={() => {
        decrement()
        decrement()
      }} disabled={count < 1}>Decrement</button>
    </div>
  )
}

