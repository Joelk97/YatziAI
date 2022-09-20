generateTable();

function generateTable() {
    const tbl = document.createElement("table");
    tbl.style.width = "100%";
    tbl.style.height = "100%";
    tbl.id ="pointsTable";
    const tblBody = document.createElement("tbody");

    for (let i=0; i<19;i++){
        const row = document.createElement("tr");
        for(let j=0;j<5;j++){
            const cell = document.createElement("td");
            cell.style.textAlign = "center";
            const cellText = document.createTextNode("no");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.getElementById("tab").appendChild(tbl);
    tbl.setAttribute("border", "2");
}