export interface Producto{
    desc: string;
    precio: number;
};

export function calcularISV(productos: Producto[]): [number, number]{
    let total = 0;

    productos.forEach(({ precio }, i)=>{
        total += precio;
    });

    return [total, total * 0.15];
};