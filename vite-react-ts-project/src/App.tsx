import { useState, useEffect, useCallback, useMemo, useRef } from "react"
interface User {
  id: number,
  username: string
}

type fibFunc = (n: number) => number

const fib: fibFunc = (n: number): number => {
  if (n < 2) return n
  return (fib(n - 1) + fib(n - 2))
}


function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[] | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // console.log(inputRef?.current?.value)
  // console.log(inputRef?.current)

  useEffect(() => {
    console.log("mounting")
    console.log("Users:", users)
    return () => console.log("unmounting")
  }, [users])

  const myNum: number = 10


  const addTwo = useCallback((e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    setCount(prev => prev + 2)
  }, [])

  const result = useMemo(() => fib(myNum), [myNum])


  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={(e) => addTwo(e)}>Add</button>
      <h2>
        {result}
      </h2>
      <input type="text" ref={inputRef} />
    </div>
  )
}

export default App