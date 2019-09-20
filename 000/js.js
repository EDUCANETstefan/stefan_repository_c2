function chessboard () {
  var radksloupce = prompt("Zadej počet řádků", "10");
  var sloupce = prompt("Zadej počet sloupců", "10");
  var num1 = parseInt(radksloupce);
  var num2 = parseInt(sloupce);
  let html = `<div class="chessboard">`;
  for (let row = 0; row < radksloupce; row++) {
      html += `<div>\n`;
      let barva = (row % 2 == 0) ? "black" : "white";
      for (let col = 0; col < sloupce; col++) {
          html += `<span class="${barva}"></span>\n`;
          barva = (barva == "white") ? "black" : "white";
      }
      html += `</div>\n`;
  }
  return html + `</div>`;
}

window.addEventListener("DOMContentLoaded", function() {
  document.write(chessboard());
}, false);