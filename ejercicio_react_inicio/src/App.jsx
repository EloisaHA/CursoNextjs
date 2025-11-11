import React from "react";
import Product from "./components/Product";

const data = [
    {
        id:1,
        titulo:'Computadora',
        descripcion:'Esto es una descripción del primer producto',
        img:'./assets/computadora.jpg'
    },
    {
        id:2,
        titulo:'Laptop',
        descripcion:'Esto es una descripción del segundo producto',
        img:'./assets/laptop.jpg'
    },
    {
        id:3,
        titulo:'Mouse',
        descripcion:'Esto es una descripción del tercer producto',
        img:'./assets/mouse_inalambrico.jpg'
    },
    {
        id:4,
        titulo:'Teclado',
        descripcion:'Esto es una descripción del cuarto producto',
        img:'./assets/teclado.png'
    },
    {
        id:5,
        titulo:'Monitor',
        descripcion:'Esto es una descripción del quinto producto',
        img:'./assets/monitor.png'
    },
    {
        id:6,
        titulo:'Audifonos',
        descripcion:'Esto es una descripción del sexto producto',
        img:'./assets/audifonos.jpg'
    }

]

export default function App(){
    return (
        <div>
            <h1>Mi primer app</h1>
            <div className="container">
            {
                data.map(el => (
                    <Product titulo={el.titulo} 
                    descripcion={el.descripcion} 
                    img={`/${el.img}`}
                    />
                )) 
            }
            </div>
           
        </div>
    )
}