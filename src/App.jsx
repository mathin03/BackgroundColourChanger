import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour,setColour]=useState("olive")

  return (
    <>
    <div className='w-full h-screen ' style={{backgroundColor:colour}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-lg">
          
          <button onClick={()=>setColour("blue")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColour("green")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColour("black")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"black"}}>black</button>
          <button onClick={()=>setColour("orange")} className="outline-none px-4 rounded-full text-white" style={{backgroundColor:"orange"}}>orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
