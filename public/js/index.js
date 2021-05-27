const screen = document.querySelector(".screen div");
const numpad = document.querySelector(".numpad");
let suma = 0;
let resta = 0;
let multiplicacion = 0;
let division = 0;
let igual = 0;
const resetValues = ()=>{
    suma = 0;
    resta = 0;
    division = 0;
    multiplicacion = 0;
    igual = 0;
}
const cleanScreen = ()=>{
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
      }
}
const borrarPantallaNumeros = ()=>{
    if(igual || screen.outerText === "0"){
        cleanScreen();
        resetValues();
    }
}
const sumar = () => {
    if(igual){
        cleanScreen()
        suma = igual;
        igual = 0;
    };
    if(resta !== 0){
      suma = restar();
      resta = 0;
    }
    if(multiplicacion !== 0){
      suma = multiplicar()
      multiplicacion = 0;
    }
    if(division !== 0){
      suma = dividir();
      division = 0;
    }
    suma += +screen.outerText;
    cleanScreen();
    return suma;
};


const restar = () => {
    if(igual){
        cleanScreen()
        resta = igual;
        igual = 0;
    };
    if(suma){
      resta = sumar();
      suma = 0;
    }
    if(multiplicacion !== 0){
      resta = multiplicar()
      multiplicacion = 0;
    }
    if(division !== 0){
      resta = dividir();
      division = 0;
    }
    if(resta <= 0){
        resta += +screen.outerText;
    }else{
        resta -= +screen.outerText;
    }
    cleanScreen();
    return resta;
};

const multiplicar = () => {
  if(igual){
      cleanScreen()
      multiplicacion = igual;
      igual = 0;
  };
  if(resta !== 0){
    multiplicacion = restar();
    resta = 0;
  };
  if(suma){
    multiplicacion = sumar();
    suma = 0;
  };
  if(division !== 0){
    multiplicacion = dividir();
    division = 0;
  }
  if(multiplicacion === 0){
    multiplicacion = 1;
  };
  if(screen.outerText === ""){
    
  }else{
  multiplicacion *= Number(screen.outerText);
  cleanScreen();
  return multiplicacion;
  }
};
const dividir = ()=>{
if(igual){
  cleanScreen()
  division = igual;
  igual = 0;
};
if(resta !== 0){
  division = restar();
  resta = 0;
};
if(suma){
  division = sumar();
  suma = 0;
};
if(multiplicacion !== 0){
  division = multiplicar();
  multiplicacion = 0;
}
if(screen.outerText === ""){
  
}else{
  if(division){
    division /= Number(screen.outerText);
    cleanScreen();
    return division;
  }else{
    division = +screen.outerText;
    cleanScreen();
    return division;
  }
return division;
}
}


const equalCases = () => {
  if (suma) {
    screen.append(sumar());
    igual = suma;
    suma = 0;
  }
  if (resta) {
    screen.append(restar());
    igual = resta;
    resta = 0;
  }
  if (multiplicacion) {
    screen.append(multiplicar());
    igual = multiplicacion;
    multiplicacion = 0;
  }
  if (division) {
    screen.append(dividir());
    igual = division;
    division = 0;
  }
};

numpad.addEventListener("click", (e) => {
  if (e.target.textContent === "1") {
    borrarPantallaNumeros();
    screen.append(1);
  }
  if (e.target.textContent === "2") {
    borrarPantallaNumeros();
    screen.append(2);
  }
  if (e.target.textContent === "3") {
    borrarPantallaNumeros();
    screen.append(3);
  }
  if (e.target.textContent === "4") {
    borrarPantallaNumeros();
    screen.append(4);
  }
  if (e.target.textContent === "5") {
    borrarPantallaNumeros();
    screen.append(5);
  }
  if (e.target.textContent === "6") {
    borrarPantallaNumeros();
    screen.append(6);
  }
  if (e.target.textContent === "7") {
    borrarPantallaNumeros();
    screen.append(7);
  }
  if (e.target.textContent === "8") {
    borrarPantallaNumeros();
    screen.append(8);
  }
  if (e.target.textContent === "9") {
    borrarPantallaNumeros();
    screen.append(9);
  }
  if (e.target.textContent === "0") {
    borrarPantallaNumeros();
    screen.append(0);
  }
  if (e.target.textContent === "+") {
    sumar();
  }
  if (e.target.textContent === "-") {
    restar();
  }
  if (e.target.textContent === "/") {
    dividir();
  }
  if (e.target.textContent === "x") {
    multiplicar();
  }
  if (e.target.textContent === ".") {
    screen.append(".");
  }

  if (e.target.textContent === "=") {
    equalCases();
  }
  if (e.target.textContent === "DEL") {
    if (screen.firstChild) {
      screen.removeChild(screen.lastChild);
    }
  }
  if (e.target.textContent === "RESET") {
    cleanScreen();
    resetValues();
  }
});
