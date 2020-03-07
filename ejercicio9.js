const numbers = [10,25,55,110,7,20];
let sumaPares=0;
let sumaImpares=0;

let atLeastOnePose = numbers.some((value) => {
    if(value%2==0){
        sumaPares = value + sumaPares;
    }else{
        sumaImpares = value + sumaImpares;
    }
})

console.log("Suma pares: "+sumaPares, "Suma impares: "+sumaImpares);