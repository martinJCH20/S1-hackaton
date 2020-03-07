var peso = document.getElementById('txtPeso');
var altura = document.getElementById('txtAltura');

function calculamasa(){
 alert(peso.value / Math.pow(altura.value,2));
}