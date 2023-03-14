package com.estoque.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estoque.repository.ProdutoRepository;

@Service
public class DeleteProduto {

    @Autowired
    ProdutoRepository produtoRepository;

    public void delete(int id) {
        produtoRepository.deleteById(id);
    }
}
