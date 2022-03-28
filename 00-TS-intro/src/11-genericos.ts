function queTipoSoy<T>(argumento: T){
    return argumento;
};

//? visualizar el tipo de las variables para mejor entendimiento

let soyString = queTipoSoy("Hola Mundo");
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);

let soyExplicito = queTipoSoy<number>(200);