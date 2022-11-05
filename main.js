//Declaramos variables
var operandoa;
var operandob;
var operacion;
var changeBotton=false;
//Modo oscuro

const btnSwitch= document.querySelector('#switch');
/*const =document.querySelector('');
const =document.querySelector('');*/
//
btnSwitch.addEventListener('click',() => { 
 // document.body.classList.toggle('dark');//Metodo toggle para colocar una clase al dar click
  btnSwitch.classList.toggle('active');
  changeBotton=!changeBotton //Operador not para cambiar el estado de la variable a true
  if(changeBotton){ 
    document.documentElement.style.setProperty('--calculadora','#380725')//Accedemos a los estilos y con el metodo .setProperty modificamos las variables que necesitemos en CSS
    document.documentElement.style.setProperty('--fondo-teclas','#EB7CC3')
    document.documentElement.style.setProperty('--numeros','#792858')
    document.documentElement.style.setProperty('--operadores','#9A035D')
    document.documentElement.style.setProperty('--borde-teclas','#3D1F31')
    document.documentElement.style.setProperty('--background','linear-gradient(180deg, #000000 0%, #323232 100%)')
    document.documentElement.style.setProperty('--font-h3','white')
  }else{
    document.documentElement.style.setProperty('--calculadora','#D47A7A')
    document.documentElement.style.setProperty('--fondo-teclas','#E3B7B7')
    document.documentElement.style.setProperty('--numeros','transparent')
    document.documentElement.style.setProperty('--operadores','#D99595')
    document.documentElement.style.setProperty('--borde-teclas','white')
    document.documentElement.style.setProperty('--background','linear-gradient(1.42deg, #FFFFFF 0.82%, #CDCDCD 98.44%)')
    document.documentElement.style.setProperty('--font-h3','black')
  }
});

function init(){
  //variables
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
  var suma = document.getElementById('suma');
  var resta = document.getElementById('resta');
  var multiplicacion = document.getElementById('multiplicacion');
  var division = document.getElementById('division');
  var igual = document.getElementById('igual');
  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var cero = document.getElementById('cero');
}
//Eventos de click
uno.onclick = function(e){
  resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
  resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
  resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
  resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
  resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
  resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
  resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
  resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
  resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
  resultado.textContent = resultado.textContent  + "0";
}

reset.onclick = function(e){
  resetear();
}
suma.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
resta.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}
multiplicacion.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
}
division.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}
igual.onclick = function(e){
  operandob = resultado.textContent;
  resolver();
}
function limpiar(){
  resultado.textContent = "";
}

function resetear(){
  resultado.textContent = "";
  operandoa = 0;
  operandob = 0;
  operacion = "";
}
function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;

    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;

    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;

    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}