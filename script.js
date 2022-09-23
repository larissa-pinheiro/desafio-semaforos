const button = document.getElementById("button");
let counter = 0;

function redLight(red) {
  var elements = document.getElementsByClassName(red);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(255,0,0)";
      elements[i].style.boxShadow = "0px 0px 10px red";
    }
  }
}

function yellowLight(yellow) {
  var elements = document.getElementsByClassName(yellow);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(255,255,0)";
      elements[i].style.boxShadow = "0px 0px 10px yellow";
    }
  }
}

function greenLight(green) {
  var elements = document.getElementsByClassName(green);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(0,255,0)";
      elements[i].style.boxShadow = "0px 0px 10px green";
    }
  }
}
function darkRedLight(red) {
  var elements = document.getElementsByClassName(red);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(160,0,0,0.7)";
      elements[i].style.boxShadow = "0px 0px 0px ";
    }
  }
}

function darkYellowLight(yellow) {
  var elements = document.getElementsByClassName(yellow);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(160,160,0,0.7)";
      elements[i].style.boxShadow = "0px 0px 0px";
    }
  }
}

function darkGreenLight(green) {
  var elements = document.getElementsByClassName(green);
  for (var i = 0, length = elements.length; i < length; i++) {
    if (elements[i].textContent == "") {
      elements[i].style.background = "rgb(0,160,0,0.7)";
      elements[i].style.boxShadow = "0px 0px 0px";
    }
  }
}

function handleChangeColor() {
  counter = counter + 1;
  if (counter === 1) {
    redLight("red1");
    darkYellowLight("yellow1");
    darkGreenLight("green1");
    greenLight("green");
    darkYellowLight("yellow");
    darkRedLight("red");
  }
  if (counter === 2) {
    yellowLight("yellow");
    darkGreenLight("green");
    darkRedLight("red");
  }
  if (counter === 3) {
    redLight("red");
    darkGreenLight("green");
    darkYellowLight("yellow");
    greenLight("green1");
    darkRedLight("red1");
    darkYellowLight("yellow1");
  }
  if (counter === 4) {
    yellowLight("yellow1");
    darkRedLight("red1");
    darkGreenLight("green1");
    counter = 0;
  }
}

button.addEventListener("click", handleChangeColor);
