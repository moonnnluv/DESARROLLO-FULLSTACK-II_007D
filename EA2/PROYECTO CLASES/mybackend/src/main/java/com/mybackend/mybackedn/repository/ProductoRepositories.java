package com.mybackend.mybackedn.repository;

import com.mybackend.mybackedn.entities.Producto;
import org.springframework.data.repository.CrudRepository;

public interface ProductoRepositories extends CrudRepository<Producto, Long> {

}
