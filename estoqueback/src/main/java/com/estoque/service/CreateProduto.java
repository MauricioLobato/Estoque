package com.estoque.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estoque.entity.Produto;
import com.estoque.repository.ProdutoRepository;

@Service
public class CreateProduto {

    @Autowired
    ProdutoRepository produtoRepository;

    public Produto create(String nome, int quant) {
        boolean estoque = quant > 0 ? true : false;
        return produtoRepository.save(new Produto(nome, estoque, quant));
    }
}