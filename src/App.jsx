import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const sumCount = () => setCount(count + 1)

  return (
    <div>
      <h1>React + Vite Template</h1>
      <p>Clics en botón: {count}</p>
      <button onClick={sumCount}>Sumar</button>
    </div>
  )
}

export default App
