import Button from "./Button";
export default function Product(props){
    return (
        <div className="card">
            <section className="section-header">
                <img src={props.img} height="300px" width="200px"></img>
            </section>
            <section className="section-body">
            <h3>{props.titulo}</h3>
            <p>{props.descripcion}</p>
            </section>
            <section className="section-footer">
                <Button type="primary">Comprar</Button>
                <Button type="success">Agregar +</Button>
            </section>
        </div>
    )
}