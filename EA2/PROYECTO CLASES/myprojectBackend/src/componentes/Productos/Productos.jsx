
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export  function Productos(){

    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/productos')
            .then(response => { 
                if(!response.ok){
                    throw new Error("Problema en la conexión al servidor :(");
                }
                return response.json();
            })
            .then(data => { 
                console.log ("respuesta del backend ", data);
                setProductos(data);
            })
            .catch(error => {
                console.error("Error de conexión a categorias", error);
            });

     }, []);

     return (
        <>
            <div className="container">
                <h3 style={{ marginBottom: '20px'}}>Inventario de Productos </h3>  
                <div className="row mb-3">
                    <div className="col-12 text-end">
                        <Link className="btn btn-primary" to="/crear-producto">
                            Crear Producto
                        </Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Id Producto</th>
                                    <th>Nombre Producto</th>
                                    <th>Descripción Producto</th>
                                    <th>Precio Producto</th>
                                    <th>Editar Producto</th>
                                    <th>Eliminar Producto</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map(prod => (
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.nombre}</td>
                                        <td>{prod.descripcion}</td>
                                        <td>{prod.precio}</td>
                                        <td><Link className="nav-link active" to="/"
                                            style={{ color: 'blue' }}>Editar</Link></td>

                                        <td><Link className="nav-link active" to="/"
                                            style={{ color: 'red' }}>Eliminar</Link></td>
                                    </tr>

                                ) )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
     )
}
