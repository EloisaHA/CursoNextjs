import Pokemon from "@/components/Pokemon"
import Link from "next/link"

interface PokemonInterface{
    name:string;
}
const getData = async () =>{
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await resp.json();
    return data.results as PokemonInterface[];
}
export default async function page(){
    const data= await getData();
    // const data=[
    //     {
    //         name:'bulbasaur'
    //     },
    //     {
    //         name:'charmander'
    //     },
    //     {
    //         name:'charmeleon'
    //     },
    //     {
    //         name:'charizard'
    //     },
    //     {
    //         name:'pikachu'
    //     },
    //     {
    //         name:'venusaur'
    //     }
    // ]
    // return(
    //     <div className="p-20">
    //         <ul>
    //             {
    //                 data.map(el=>(
    //                     <li className="cursor-pointer text-blue-500 underline" key={el.name}><Link href={`/pokemons/${el.name}`}>{el.name}</Link></li>
    //                 ))
    //             }

    //         </ul>
    //     </div>
    // )

    return(
        <div className="p-20">
            <div className="flex flex-wrap w-full gap-2">
                {
                    data.map(el=>(
                        <Pokemon key={el.name} name={el.name}/>
                    ))
                }

            </div>
        </div>
    )
}