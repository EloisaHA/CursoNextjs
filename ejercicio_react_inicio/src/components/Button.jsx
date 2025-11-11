import React from "react"
export default function Button({type,children}){
    return(
        <button className={"button btn-"+type}>{children}</button>
    )
}