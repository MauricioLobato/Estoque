package com.estoque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estoque.entity.Produto;
import com.estoque.repository.ProdutoRepository;

@Service
public class RetrieveProduto {

    @Autowired
    ProdutoRepository produtoRepository;

    public List<Produto> allProdutos() {
        return produtoRepository.findAll();
    }
}
