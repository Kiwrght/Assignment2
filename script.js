id = "script.js"
var table = document.getElementById("Population")
var tbody = document.createElement("tbody")[0];
/* Formatting Table  */
//make table border black
table.style.border = "2px solid Black";
//zoom into the table
table.style.zoom = "150%";
//make the table centered
table.style.margin = "auto";
//makes page background color light blue
document.body.style.backgroundColor = "lightblue";
//makes table background color white
table.style.backgroundColor = "white";


/* Adding Data to the Table*/
const URL = "https://datausa.io/api/data?drilldowns=Nation&measures=Population" 
fetch(URL)
.then(response => response.json())// makes a promise to get the data
.then(data => {
    console.log(data)
    var tdata = []
    for(var i = 0; i < data.data.length; i++){
        tdata.push([data.data[i].Year, data.data[i].Population])
    }
    console.log(tdata)
    //add data to the tbody of the table 
    for(var i = 0; i < tdata.length; i++){
        var row = table.insertRow();
        for(var j = 0; j < tdata[i].length; j++){
            var cell = row.insertCell(j);
            cell.innerHTML = tdata[i][j];
        }
    }
})

console.log("Hello World");