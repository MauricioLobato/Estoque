package com.estoque.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.estoque.entity.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Integer> {

    public List<Produto> findByNome(String nome);

}
