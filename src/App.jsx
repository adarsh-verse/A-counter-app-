import React, { useEffect, useState } from 'react'
import "./index.css"


const App = () => {
    const  [count, setCount]  = useState(0);
    const [valueToAdd , setValueToAdd] = useState("");


    const setHandler =(e)=>{
        setValueToAdd(e.target.value)
    }
    const addHandler = () =>{
        const num = Number(valueToAdd)
        if(isNaN(num)) return;
        setCount(count + num)
        setValueToAdd("")
       
    }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Counter App</h1>
      <h2 className="text-2xl mb-6">{count}</h2>

      <div className="flex space-x-4">
        <button onClick={()=>setCount(count+1)} className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Increment
        </button>

         <button onClick={()=>setCount(0)} className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition">
          Reset
        </button>

        <button onClick={()=>{
            if (count>0) setCount(count-1);
        }}
        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition">
        Decrement
        </button>
      </div>
       <div className="flex items-center space-x-3 mt-6">
            <input type="number"
                   value={valueToAdd}
                   onChange={setHandler} 
                   placeholder="Enter number"
                   className="px-4 py-2 rounded-lg text-white border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <button 
            onClick={addHandler}
            className="px-5 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700">
            Add</button>
        </div>
    </div>
  )
}

export default App
