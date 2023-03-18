const endpoint = "http://localhost:8080"

import { addData } from "./InsertData.js"
import { updateRow } from "./UpdateRow.js"

export function getProdutos() {
    document.getElementById("tableBody").innerHTML = ""
    axios.get(`${endpoint}/consultar`).then((resp) => {
        let data = resp.data
        let tBody = document.getElementById("tableBody")
        let cont = 0;
        data.forEach(el => {
            cont++
            let row = tBody.insertRow()
            row.id = `row-${cont}`
            addData(row, el.id)
            addData(row, el.nome)
            addData(row, el.quantidade)
            el.estoque = el.estoque == true ? "Sim" : "Não"
            addData(row, el.estoque)
            row.onclick = updateRow(row.id)
        });
    }).catch((error) => {
        alert(error)
    })

}

export function getProdutosByNome(nome) {
    document.getElementById("tableBody").innerHTML = ""
    axios.get(`${endpoint}/consultar/${nome}`).then((resp) => {
        let data = resp.data
        let tBody = document.getElementById("tableBody")
        let cont = 0;
        data.forEach(el => {
            cont++
            let row = tBody.insertRow()
            row.id = `row-${cont}`
            addData(row, el.id)
            addData(row, el.nome)
            addData(row, el.quantidade)
            el.estoque = el.estoque == true ? "Sim" : "Não"
            addData(row, el.estoque)
            row.onclick = updateRow(row.id)
        });
    }).catch((error) => {
        alert(error)
    })

}