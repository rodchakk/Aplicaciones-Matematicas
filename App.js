console.log();
console.log("Bienvenido a Aplicaciones Matemáticas");
console.log("Ingrese una opcion [1]Serie de Fibonacci  [2]Cálculo del Factorial [3]Verificación de Números Primos [0] para salir");
console.log();










// main














//funciones

function Fibonacci(n) {
    if (n===0){
        return 0;
    } else if(n===1){
        return 1;
    }
        return Fibonacci(n-1) + Fibonacci(n-2)
}

for (let f=0; f<25; f++) {

    console.log(Fibonacci(f));

}





function primo(n){

if(n>=20) 
    {
    return;
}


let residuo = n % 2;
let residuo2 = n % 3;
let residuo3 = n % 7;

if (n > 1 && residuo !== 0 && residuo2 !== 0 && residuo3 !== 0) {
    console.log(n + " es primo");
} else if (n > 1) {
    console.log(n + " no es primo");
}

primo(n+1);


 }
    







