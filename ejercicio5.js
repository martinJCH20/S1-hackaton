var pi = 2.14;
var radio = document.getElementById('txtradio');
var area =  Math.pow(radio.value,2);
//document.getElementById('calcular').onclick = calcularDatos(radio);
//console.log(radio);
function calcularDatos() {
    alert("Area: "+ 2 * pi* Math.pow(radio.value,2) +" Longitud: "+2 * pi * radio.value);
}
