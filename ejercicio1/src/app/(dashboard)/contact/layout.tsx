import React from "react";
export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return(
        <div>Hola desde el layout 2
            {children}
        </div>
    )
}