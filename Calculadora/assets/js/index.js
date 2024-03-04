const display = document.getElementById("display");
const teclas = document.getElementsByClassName("tecla");
const functions = {
  delete: deleteDigit,
  equal: equal,
  division: division,
  multiplication: multiplication,
  C: clear,
};

function clear() {
  display.innerText = "0";
}

function multiplication() {
  display.innerText += "*";
}

function division() {
  display.innerText += "/";
}

function equal() {
  try {
    let currentExpression = display.innerText;
    const resultado = eval(currentExpression);
    if (resultado != "undefined") {
      display.innerText = resultado;
    }
  } catch (error) {
    display.innerText = "Erro";
  }
}

function deleteDigit() {
  let currentInput = display.innerText.split("");
  if (display.innerText === "Erro") {
    clear();
  } else if (currentInput.length <= 1) {
    clear();
  } else {
    currentInput.pop();
    display.innerText = currentInput.join("");
  }
}

function keyClickHandler(event) {
  if (event.target.id) {
    functions[event.target.id]();
  } else {
    if(display.innerText==='0' && event.target.innerText!='.'){
        display.innerText = event.target.innerText;
    }else{
        display.innerText += event.target.innerText;
    }
  }
}

for (let i = 0; i < teclas.length; i++) {
  teclas[i].addEventListener("click", keyClickHandler);
}
