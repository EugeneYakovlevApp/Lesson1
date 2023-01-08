let tbl;

let tableHeadText = [
    ["Name", "Cost", "Action"]
]
let tableBodyText = [
    ["Test", 12],
    ["test", 10]
]


function createTable() {
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

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
                td.innerHTML = createActionButton(td.id);
            } else {
                td.appendChild(document.createTextNode(tableBodyText[i][j]));

            }
            tr.appendChild(td);
        }
    }
}

function createActionButton(tdId) {
    return `<button type= "button" onclick="removeTableRow('${tdId}')">Delete</button>`;
}

function removeTableRow(tdid) {

    while (document.getElementById(tdid) !== null) {
        let row = document.getElementById(tdid);
        // tbl.deleteRow(tdid);
        row.remove();
    }
}