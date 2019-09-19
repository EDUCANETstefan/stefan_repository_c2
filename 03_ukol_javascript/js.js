let table = "";
let rows = prompt ("Zadejte počet řádků");
let cols = prompt("Zadejte počet sloupců");

for (let r = 0; r < rows; r++) {
  table += "<tr>";
  for (let c = 1; c <= cols; c++) {
      table += "<td>" + "</td>";
  }
  table += "</tr>";
}
document.write("<table>" + table + "</table>");