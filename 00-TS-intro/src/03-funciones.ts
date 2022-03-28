function sumar(a: number, b: number): number{
    return a + b;
};
const sumarFlecha = (a: number, b: number): number =>{
    return a + b;
};

function multiplicar(num: number, otroNum?: number, base: number = 2): number{
    return num * base;
};


// const resultado = sumar(10, 25);
const resultado = multiplicar(10);

console.log(resultado);