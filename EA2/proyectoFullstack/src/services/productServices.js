// servicio para obtener los productos desde un archivo JSON
export const getProductos = async() =>{

    const res = await fetch('/data/productos.json');
    const data = await res.json();
    return data.productos

}