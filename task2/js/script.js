let tbl;

const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");

let tableHeadText = [
    ["Name", "Cost", "Action"]
]
let tableBodyText = [
    ["First", 12],
    ["Second", 10]
]


function createTable() {

    tbl = document.createElement("table");
    tbl.classList.add('table');

    document.body.appendChild(tbl);

    tbl.appendChild(tableHead);
    tbl.appendChild(tableBody);

    var tr = document.createElement('TR');
    tableHead.appendChild(tr);

    for (let j = 0; j < tableHeadText[0].length; j++) {
        let th = document.createElement('TH');
        th.width = '75';
        th.appendChild(document.createTextNode(tableHeadText[0][j]));
        tr.appendChild(th);
    }


    tableBodyText[0].length = tableBodyText[0].length + 1;

    for (let i = 0; i < tableBodyText.length; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (let j = 0; j < tableBodyText[0].length; j++) {
            var td = document.createElement('TD');
            td.id = i;
            td.width = '75';
            if (j === 2) {
                // td.innerHTML = createActionButton(td.id);
            } else {
                td.appendChild(document.createTextNode(tableBodyText[i][j]));

            }
            tr.appendChild(td);
        }
    }
    createEmptyRow();
}

function createEmptyRow() {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (let j = 0; j < tableBodyText[0].length; j++) {
        var td = document.createElement('TD');
        let newInputBox = document.createElement('input');
        td.id = tableBodyText.length;
        td.width = '75';
        if (j == 0) {
            newInputBox.type = 'text';
            newInputBox.placeholder = 'text';
            newInputBox.id = 'inputTextId';
        }
        if (j == 1) {
            newInputBox.type = 'number';
            newInputBox.placeholder = 'number';
            newInputBox.id = 'inputNumberId';
        }
        if (j === 2) {
            td.innerHTML = createActionButton(td.id);
        }
        else {
            td.appendChild(newInputBox);
        }
        tr.appendChild(td);
    }

}

function createActionButton(tdId) {
    return `<button type= "button" onclick="addTableRow('${tdId}')">Add</button>`;
}

function addTableRow(tdid) {
    let inText;
    let inNum;

    if(document.getElementById('inputTextId').value == ''){
        inText = "Empty";
    }else{
        inText = document.getElementById('inputTextId').value;
    }

    if(document.getElementById('inputNumberId').value == ''){
        inNum = 0;
    }else{
        inNum = document.getElementById('inputNumberId').value;
    }    
    const inputData = [inText, inNum];

    removeTableRow(tdid);
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        for (let j = 0; j < tableBodyText[0].length; j++) {
            var td = document.createElement('TD');
            if(j == 0){
            td.appendChild(document.createTextNode(inText));
        }
        if(j == 1){
            td.appendChild(document.createTextNode(inNum));

        }
            tr.appendChild(td);
        }

    createEmptyRow();
}
function removeTableRow(tdid) {

    while (document.getElementById(tdid) !== null) {
        let row = document.getElementById(tdid);
        // tbl.deleteRow(tdid);
        row.remove();
    }
}