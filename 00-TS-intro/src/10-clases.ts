class Heroe{
    public alterEgo: string;
    public edad: number;
    public nombreReal?: string;

    constructor( alterEgo: string, edad: number, nombreReal: string ){
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;
    };
};

const ironman = new Heroe("Iron man", 54, "Tony");

console.log(ironman);