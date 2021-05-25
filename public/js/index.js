// const num0 = document.querySelector("#zero");
// const num1 = document.querySelector("#one");
// const num2 = document.querySelector("#two");
// const num3 = document.querySelector("#three");
// const num4 = document.querySelector("#four");
// const num5 = document.querySelector("#five");
// const num6 = document.querySelector("#six");
// const num7 = document.querySelector("#seven");
// const num8 = document.querySelector("#eight");
// const num9 = document.querySelector("#nine");
const del = document.querySelector("#delB");
const reset = document.querySelector("#resetB");
const equal = document.querySelector("#equalB");
const screen = document.querySelector(".screen div");
const numpad = document.querySelector(".numpad");
let suma = 0;
const sumar = ()=>{
    suma += +screen.outerText;
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
      }
}

numpad.addEventListener('click',e =>{
    if(e.target.textContent === "1"){
        screen.append(1)
    }
    if(e.target.textContent === "2"){
        screen.append(2)
    }
    if(e.target.textContent === "3"){
        screen.append(3)
    }
    if(e.target.textContent === "4"){
        screen.append(4)
    }
    if(e.target.textContent === "5"){
        screen.append(5)
    }
    if(e.target.textContent === "6"){
        screen.append(6)
    }
    if(e.target.textContent === "7"){
        screen.append(7)
    }
    if(e.target.textContent === "8"){
        screen.append(8)
    }
    if(e.target.textContent === "9"){
        screen.append(9)
    }
    if(e.target.textContent === "0"){
        screen.append(0)
    }
    if(e.target.textContent === "+"){
        sumar();
    }
    if(e.target.textContent === "="){
        sumar();
        // screen.append(suma)
        // HAY QUE PASAR EL RESULTADO EN GENERAL DE UNA OPERACION, NO EL VALOR 
    }
    if(e.target.textContent === "DEL"){
        if(screen.firstChild){
        screen.removeChild(screen.lastChild)
        }
    }
    if(e.target.textContent === "RESET"){
        while (screen.firstChild) {
            screen.removeChild(screen.firstChild);
          }
          suma = 0;
    }
})

