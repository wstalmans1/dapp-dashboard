import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-british-racing-green">
      <>
        <h1 className="text-white">Vite + React</h1>
        <div className="mt-4 flex flex-col items-center">
          <button className="bg-blue-500 text-white p-2 rounded" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p className="text-white mt-2">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-white mt-4">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </div>  
  )
}

export default App
