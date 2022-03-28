interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHP: () => void;
};

function curar(personaje: PersonajeLOR, curarX: number): void{
    personaje.pv += curarX;

    console.log("Personaje Curado!");
    personaje.mostrarHP();
};

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHP(){
        console.log(`Puntos de vida: ${this.pv}`);
    }
};

nuevoPersonaje.mostrarHP();
curar(nuevoPersonaje, 25);