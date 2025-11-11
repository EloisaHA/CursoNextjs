import Products from "@/components/Products";

export default async function page(props:{params:{id:string}}){
    const {id}= await props.params;
    return (
        <div>
            <h1 className="font-bold text-2xl"></h1>
            <Products id={id}/>
        </div>
    )
}