import Pokemon from "@/components/Pokemon";
import type { Metadata } from "next";
interface Props{
    params:{
        name:string
    }
}

export async function generateMetadata({params}:Props):Promise<Metadata> {
   const slug=(await params).name;
    return{
        title:`Pokemon- ${slug}`,
        description:`Esto es la información de nuestro pokémon ${slug}`
   } 
}

export default async function page({params}:Props){
    const {name}= await params;
    return (
        <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <Pokemon name={name}/>
        </div>
    )
}