package com.mybackend.mybackedn.services;

import java.util.List;

import com.mybackend.mybackedn.entities.Producto;

public interface ProductoServices {
    Producto crear(Producto producto);
    Producto obtenerId(Long id);
    List<Producto> obtenerTodos();
    void eliminar(Long id);
    Producto actualizar(Long id, Producto productoActualizado);

}
