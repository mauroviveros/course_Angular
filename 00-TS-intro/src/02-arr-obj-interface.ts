// let habilidades = [1, "Mauro", true, [], {}];
let habilidades: string[] = ["Bash", "Counter", "Healing"];
console.log(habilidades);

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;

}
const personaje: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ["Bash", "Counter", "Healing"]
};

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);