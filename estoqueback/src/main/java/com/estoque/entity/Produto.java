package com.estoque.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "produto")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "nome", nullable = false, length = 50, unique = false)
    private String nome;
    @Column(name = "estoque", nullable = false, unique = false)
    private boolean estoque;
    @Column(name = "quantidade", nullable = false, unique = false)
    private int quantidade;


    public Produto(String nome, boolean estoque, int quantidade) {
        this.nome = nome;
        this.estoque = estoque;
        this.quantidade = quantidade;
    }

}
