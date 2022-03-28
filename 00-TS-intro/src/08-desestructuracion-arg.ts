
interface Producto{
    desc: string;
    precio: number;
};

const telefono: Producto ={
    desc: "Nokia A1",
    precio: 250
};

const tablet: Producto = {
    desc: "iPad Air",
    precio: 350
};

function calcularISV(productos: Producto[]): [number, number]{
    let total = 0;

    productos.forEach(({ precio }, i)=>{
        total += precio;
    });

    return [total, total * 0.15];
};

const articulos = [ telefono, tablet ];
const [ total, isv ] = calcularISV(articulos);

console.log(`Total: ${total}`);
console.log(`ISV: ${isv}`);