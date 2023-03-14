package com.estoque.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estoque.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

}
