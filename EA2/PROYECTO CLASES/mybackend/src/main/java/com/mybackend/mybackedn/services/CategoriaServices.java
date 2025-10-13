package com.mybackend.mybackedn.services;

import java.util.List;

import com.mybackend.mybackedn.entities.Categoria;

public interface CategoriaServices {

    Categoria crear(Categoria categoria);
    Categoria obtenerId(Long id);
    List<Categoria> obtenerTodas();
    void eliminar(Long id);
    Categoria actualizar(Long id, Categoria categoriaActualizada);

}
