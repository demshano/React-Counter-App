import { useState } from 'react';
import './index.css';
export function App()
{

    const [count, setCount] = useState(0);

return(
        
    <div className="text-center">
    <h1 className="text-pink-300 text-5xl py-8 font-bold">React Counter App</h1>
  
    <div className="w-[400px] h-[400px] bg-sky-300 rounded-xl mx-auto mt-12 flex flex-col justify-center items-center">
  
      <span className="bg-white py-2 px-6 rounded-xl text-8xl font-extrabold">{count}</span>
  
      <div className="relative flex justify-center mt-8 space-x-4">
        <button onClick={()=>setCount(count + 1)} className="text-3xl font-bold bg-green-300 px-4 py-2 rounded-lg">ADD</button>
        <button onClick={()=>setCount(count - 1)} className="text-3xl font-bold bg-red-300 px-4 py-2 rounded-lg">SUB</button>
      </div>
  
    </div>
  </div>
  
        
    )
}