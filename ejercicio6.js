var numero = document.getElementById('txtnumero');
var contactos = [
    {"nombre":"Martìn","numero": 986418234},{"nombre":"Rosa","numero": 987876788}
]

function llamada(){
    var isTrue=false;
    for(var n of contactos){
        if(isTrue == false){
            if(numero.value==n.numero){
                var nombrePersona=n.nombre;
                isTrue = true;
            }
            else{
                isTrue = false;
            }
        }
    }

    if(isTrue==true){
        alert("Tiene una llamada de: "+nombrePersona);
    }else{
        alert("Tiene una llamada de un nùmero desconocido: "+numero.value);
    }
}