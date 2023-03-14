const endpoint = "http://localhost:8080"

window.onload = getProdutos()


function getProdutos() {
    document.getElementById("tableBody").innerHTML = ""
    axios.get(`${endpoint}/consultar`).then((resp) => {
        var data = resp.data
        var tBody = document.getElementById("tableBody")
        var cont = 0;
        data.forEach(el => {
            cont++
            var row = tBody.insertRow()
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

function addData(row, data) {
    var td = row.insertCell()
    td.textContent = data
}


var updateRow = (rowId) => {
    return function () {
        var row = document.getElementById(rowId)
        var cells = row.cells
        var id = cells[0].innerText
        var nome = cells[1].innerText
        var estoque = cells[2].innerText
        document.getElementById("labelId").textContent = `Id: ${id}`
        document.getElementById("name2").value = nome
        document.getElementById("quant2").value = estoque
        $("#modalAlterar").modal()
    }
}

var att = () => {
    var name = document.getElementById("name2").value
    var quant = document.getElementById("quant2").value
    var id = document.getElementById("labelId").textContent.split(" ")[1]
    var estoque = quant > 0 ? true : false

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

var del = () => {
    var id = document.getElementById("labelId").textContent.split(" ")[1]
    axios.delete(`${endpoint}/deletar/${id}`).then((resp) => {
        alert("Produto Deletado")
        getProdutos()
    }).catch((error) => {
        alert(error)
    })
}


var add = () => {
    var name = document.getElementById("name").value
    var quant = document.getElementById("quant").value
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