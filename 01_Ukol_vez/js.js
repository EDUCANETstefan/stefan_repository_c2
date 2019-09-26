window.onload = function() {
    let first = prompt("Zadejte první hodnotu.");
    let second = prompt("Zadejte druhou hodnotu.");
  
    let pitagoras = first * first + second * second;
  
    if(Math.sqrt(pitagoras) < 5){
        document.getElementById("div1").innerHTML="Cíl je v dosahu!";
    } else {
      document.getElementById("div2").innerHTML="Cíl není v dosahu!";
    }
  }
  