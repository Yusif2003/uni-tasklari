import { useState } from 'react'
import Tabled from './Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tabled />
    </>
  )
}

export default App
