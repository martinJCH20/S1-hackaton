//Ejercicio 0
let numero = [35,110,19,44];
console.log('Ejercicio 0: ', Math.min.apply(null,numero));

//Ejercicio 1
var factura = [{
    "detalle" : {
        "importeTotal": 0,
        "iva" : "Lima",
        "formaPago" : "Efectivo"
    },
    "empresa" : {
        "nombre":"Helisur",
        "direccion":"Surco",
        "telefono":98678989,
        "nif": 7878909890,
    },
    "cliente" : {
        "nombre":"IDAT",
        "direccion":"San Juan de Miraflores",
        "telefono":97672300,
        "nif": 7008909564,
    },
    "elementos" : [{
            "descripcion":"Polo",
            "precio": 10.5,
            "cantidad":2
        },
        {
            "descripcion":"Gorro",
            "precio": 132,
            "cantidad":4
        }
    ]
}]

let importv = 0;
for (let n of factura){
    for(let m of n.elementos){
        importv = (m.precio * m.cantidad) + importv //Sumando los importes
    }
    n.detalle['importeTotal']=importv; //actualiza el importe total de la factura
}

console.log('Ejercicio 1: ', factura);
console.log('Ejercicio 1 (importe total de factura): ',importv);

//Ejercicio 2
let nombres = ['Martìn','Juan','Renato','Marìa'];
const newNombre = nombres.push("Pedro","Romina"); 
console.log('Ejercicio 2: ', nombres);

//Ejercicio 3
//valor_futuro =valor*Math.pow (1+tasa/100,periodo)
var valor=2000;
var periodo = [
    {"id":"periodo 1","tasa": 4,"exponente":2},{"id":"periodo 2","tasa": 6,"exponente":2}
]
console.log('Ejercicio 3', periodo.map(function(item, index){
    return valor*Math.pow(1+item.tasa/100,item.exponente);
    //return item.exponente;
}))



