import Products from "@/components/Products"

interface ProductInterface{
    id:string;
}
const getData = async () =>{
    const resp = await fetch('https://fakestoreapi.com/products');
    const data = await resp.json(); 
    return data as ProductInterface[];
}
export default async function page(){
    const data= await getData();
    return(
        <div className="p-20">
            <div className="flex flex-wrap w-full gap-2">
                {
                    data.map(el=>(
                        <Products key={el.id} id={el.id}/>
                    ))
                }

            </div>
        </div>
    )
}