// Componente para listar productos
import { useState, useEffect } from 'react'
import { getProductos } from '../services/productServices'

export function Productos(){

    const [productos, setProductos ] = useState([])

    useEffect(() => {
        /*definimos la función que se conecta al servicio*/

        const fetchData = async () =>{
            const data  = await getProductos();
            setProductos(data)
        };

        /*llamada de la función*/
        fetchData();

    }, []);

    return (
        <>
            
            <div className="container">
                <h4>Lista de productos</h4>
                <div className="row">
                    {productos.map(prod => (
                        <div className="col-md-4 my-2" key={prod.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">{prod.nombre}</h4>
                                    <p className="card-text">{prod.descripcion}</p>
                                    <p className="card-text">{prod.precio}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}