const btn = document.getElementById("btn");
let sem = 0;

function vermelho(red) {
  var elements = document.getElementsByClassName(red);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(255,0,0)";
      elements[i].style.boxShadow = "0px 0px 10px red";
    }
  }
}

function amarelo(yellow) {
  var elements = document.getElementsByClassName(yellow);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(255,255,0)";
      elements[i].style.boxShadow = "0px 0px 10px yellow";
    }
  }
}

function verde(green) {
  var elements = document.getElementsByClassName(green);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(0,255,0)";
      elements[i].style.boxShadow = "0px 0px 10px green";
    }
  }
}
function vermelhoEscuro(red) {
  var elements = document.getElementsByClassName(red);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(160,0,0,0.7)";
      elements[i].style.boxShadow = "0px 0px 0px ";
    }
  }
}

function amareloEscuro(yellow) {
  var elements = document.getElementsByClassName(yellow);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(160,160,0,0.7)";
      elements[i].style.boxShadow = "0px 0px 0px";
    }
  }
}

function verdeEscuro(green) {
  var elements = document.getElementsByClassName(green);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(0,160,0,0.7)";
      elements[i].style.boxShadow = "0px 0px 0px";
    }
  }
}

function troca() {
  sem = sem + 1;
  if (sem == 1) {
    vermelho("red1");
    amareloEscuro("yellow1");
    verdeEscuro("green1");
    verde("green");
    amareloEscuro("yellow");
    vermelhoEscuro("red");
  }
  if (sem == 2) {
    amarelo("yellow");
    verdeEscuro("green");
    vermelhoEscuro("red");
  }
  if (sem == 3) {
    vermelho("red");
    verdeEscuro("green");
    amareloEscuro("yellow");
    verde("green1");
    vermelhoEscuro("red1");
    amareloEscuro("yellow1");
  }
  if (sem == 4) {
    amarelo("yellow1");
    vermelhoEscuro("red1");
    verdeEscuro("green1");
  }
  if (sem == 4) {
    sem = 0;
  }
}

btn.addEventListener("click", troca);
