package com.estoque.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.estoque.entity.Produto;
import com.estoque.repository.ProdutoRepository;

@Service
public class UpdateProduto {
    @Autowired
    ProdutoRepository produtoRepository;

    public Produto update(Produto produto) {
        boolean estoque = produto.getQuantidade() > 0 ? true : false;
        produto.setEstoque(estoque);
        return produtoRepository.save(produto);

    }
}
