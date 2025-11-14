'use client';

import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import Image from "next/image";
export default function Pokemon({name}:{name:string}){
    const [data,setData]=useState<null | {name:string,sprites:{back_default:string}}>(null);
    const [counter,setCounter]=useState(0);
 
    // useEffect(()=>{
    //     console.log("en la linea 9");
    // },[counter]);
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/'+name)
        .then(resp=>resp.json())
        .then(data=>{
            // console.log(data);
            setData(data);
            
        }).catch(console.error);
    },[]);

    // return (
    //     <div>
    //          <button onClick={()=>{setData({name:'algo'})}}>Click me</button>
    //          <button onClick={()=>{setCounter(prev=>prev+1)}}>Click me</button> 

    //     </div>
    // )
if (!data) return <Skeleton />;
// throw new Error('Error');
    return(
        

<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <div className="flex justify-center">
        <a href="#">
            {
                data &&
                <Image className="rounded-t-lg" 
                        src={data!.sprites.back_default}
                        alt=""
                        width={120} 
                        height={80}/>
                    
            }
            </a>
    </div>
    
    <div className="p-5">
        {/* flex flex-col justify-center */}
        <div className="">
            <a href="#">
                <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data?.name}
                </h5>
            </a>
        </div>
        
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
            Here are </p>
            <div className=" flex justify-center">
                <a href={"/pokemons/"+name} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
    </div>
</div>

    )
}