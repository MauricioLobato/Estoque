const endpoint = "http://localhost:8080"

import { getProdutos, getProdutosByNome } from "./GetProduto.js"
window.onload = getProdutos()


let att = () => {
    return function () {
        let name = document.getElementById("name2").value
        let quant = document.getElementById("quant2").value
        let id = document.getElementById("labelId").textContent.split(" ")[1]
        let estoque = quant > 0 ? true : false

        if (!name || !quant) {
            alert("Campos não podem estar vazios!")
        } else {
            axios.put(`${endpoint}/atualizar`, {
                id: id,
                nome: name,
                estoque: estoque,
                quantidade: quant
            }).then((resp) => {
                alert("Devidamente atualizado.")
                getProdutos()
            }).catch((error) => {
                alert(error)
            })
        }
    }
}

let del = () => {
    return function () {


        let id = document.getElementById("labelId").textContent.split(" ")[1]
        axios.delete(`${endpoint}/deletar/${id}`).then((resp) => {
            alert("Produto Deletado")
            getProdutos()
        }).catch((error) => {
            alert(error)
        })
    }
}


let add = () => {
    return function () {


        let name = document.getElementById("name").value
        let quant = document.getElementById("quant").value
        if (!name || !quant) {
            alert("Campos não podem estar vazios!")
        } else {
            axios.post(`${endpoint}/cadastrar/${name}/${quant}`).then((resp) => {
                alert("Devidamente cadastrado.")
                getProdutos()
            }).catch((error) => {
                alert(error)
            })
        }
    }
}

let pesquisa = document.getElementById("pesquisarNome");
pesquisa.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let value = pesquisa.value
        if (value === "") {
            getProdutos()
        } else {
            getProdutosByNome(value)
        }
    }
})


document.getElementById("addButton").addEventListener("click", add())
document.getElementById("attButton").addEventListener("click", att())
document.getElementById("delButton").addEventListener("click", del())