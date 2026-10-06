function insert_Row(){
    let table = document.getElementById('sampleTable');
    let rowCount = table.row.length;
    let newRow = table.insertRow(rowCount);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = "Row"+(rowCount + 1)+" cell1";
    cell2.innerHTML = "Row"+(rowCount + 1)+" cell2";
}