import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
   <div className=' flex w-full h-screen   border border-black' style={{backgroundColor: color}}>
    <div className='w-80 h-20 border flex justify-center items-center space-x-4'>
      <button onClick={() => setColor("yellow")} className='bg-yellow-200 ' style={{backgroundColor: "yellow"}}>
        yellow
      </button>
      <button onClick={() => setColor("black")} className='bg-black' style={{backgroundColor: "black"}}>
        black
      </button>
      <button onClick={() => setColor('green')} className='bg-green-500' style={{backgroundColor: "green"}}>
        green
      </button>
    </div>

   </div>
  )
}

export default App
