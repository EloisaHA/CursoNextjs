import Skeleton from "@/components/Pokemon/Skeleton";

export default function loading(){
    return(
        <div className="w-full flex justify-center flex-wrap">
            <Skeleton/>
        </div>
    )
}