interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: DetalleReproductor;
};
interface DetalleReproductor{
    autor: string;
    anio: number;
};

const reproductor: Reproductor = {
    volumen: 100,
    segundo: 35,
    cancion: "Mess",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015
    }
};

// console.log(`El volumen es: ${reproductor.volumen}`);
// console.log(`El segundo es: ${reproductor.segundo}`);
// console.log(`La cancion es: ${reproductor.cancion}`);
// console.log(`El autor es: ${reproductor.detalles.autor}`);
// console.log(`El año es: ${reproductor.detalles.anio}`);

const { volumen: volumenReproductor, segundo:segundoReproductor, cancion:cancionReproductor, detalles:{ autor: autorReproductor, anio: anioReproductor } } = reproductor;

console.log(`El volumen es: ${volumenReproductor}`);
console.log(`El segundo es: ${segundoReproductor}`);
console.log(`La cancion es: ${cancionReproductor}`);
console.log(`El autor es: ${autorReproductor}`);
console.log(`El año es: ${anioReproductor}`);