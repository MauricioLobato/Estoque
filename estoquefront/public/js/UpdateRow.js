export let updateRow = (rowId) => {
    return function () {
        let row = document.getElementById(rowId)
        let cells = row.cells
        let id = cells[0].innerText
        let nome = cells[1].innerText
        let estoque = cells[2].innerText
        document.getElementById("labelId").textContent = `Id: ${id}`
        document.getElementById("name2").value = nome
        document.getElementById("quant2").value = estoque
        $("#modalAlterar").modal()
    }
}