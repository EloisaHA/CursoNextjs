import Pokemon from "@/components/Pokemon";

export default async function page(props:{params:{name:string}}){
    const {name}= await props.params;
    return (
        <div>
            <h1 className="font-bold text-2xl">{name}</h1>
            <Pokemon name={name}/>
        </div>
    )
}