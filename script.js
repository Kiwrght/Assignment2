id = "script.js"
var table = document.getElementById("Population")
var tbody = document.createElement("tbody")[0];

/* Adding Data to the Table*/
const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population" 

async function fetchData(params) {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);

    const tdata = [];

    for (let i = 0; i < data.data.length; i++) {
        tdata.push(data.data[i].Nation,
            data.data[i].Population); 
    }

    console.log(tdata);

    for (let i = 0; i < tdata.length; i++) {
        let row = tbody.insertRow();
        for (let j = 0; j < tdata[i].length; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = tdata[i][j];
        }
        
    }
}

fetchData();

console.log("Hello World");