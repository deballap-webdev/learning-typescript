import { type ReactNode } from 'react'
import { useCounterText, useCounter } from './context/CounterContext'

type ChildrenType = {
  children: (num: number) => ReactNode
}


const Counter = ({ children }: ChildrenType) => {
  const { count, increment, decrement } = useCounter()
  const { handleTextInput, text } = useCounterText()
  return (
    <>
      <h1>{children(count)}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <input type="text" onChange={handleTextInput} />
      <p>{text}</p>
    </>
  )
}

export default Counter