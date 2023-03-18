package com.estoque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.estoque.entity.Produto;
import com.estoque.service.CreateProduto;
import com.estoque.service.DeleteProduto;
import com.estoque.service.RetrieveProduto;
import com.estoque.service.UpdateProduto;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Crud {

    @Autowired
    CreateProduto createProduto;
    @Autowired
    RetrieveProduto retrieveProduto;
    @Autowired
    UpdateProduto updateProduto;
    @Autowired
    DeleteProduto deleteProduto;

    @PostMapping("/cadastrar/{nome}/{quant}")
    public ResponseEntity<Produto> createProduto(@PathVariable String nome, @PathVariable int quant) {
        return new ResponseEntity<>(createProduto.create(nome, quant), HttpStatus.OK);
    }

    @GetMapping("/consultar")
    public List<Produto> retrieveProduto() {
        return retrieveProduto.allProdutos();
    }

    @GetMapping("consultar/{nome}")
    public List<Produto> retrieveProdutoByName(@PathVariable String nome) {
        return retrieveProduto.getProdutoByNome(nome);
    }

    @PutMapping("/atualizar")
    public Produto updateProduto(@RequestBody Produto produto) {
        return updateProduto.update(produto);
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Object> deleteProduto(@PathVariable int id) {
        deleteProduto.delete(id);
        return ResponseEntity.ok().build();
    }
}
