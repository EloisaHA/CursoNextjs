'use client';
import { useState } from "react";

export default function Contador(){
    const [counter,setCounter]=useState(0);
    return (
        <div>
        <div>Conteo:{counter}</div>
        <button 
            type="button" 
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={()=>{
                setCounter(prev=>prev+1);
            }}
            >+</button>
        </div>
    )
}