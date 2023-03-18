import colors from "colors";
import inquirer from "inquirer";

const secciones = [
  '01_bases',
  '02_gifs-app',
  '03_paises',
  '04_pipes',
  '05_heroes-app',
  '06_formularios',
  '07_selectores',
  '08_lifecycle',
  '09_mapas-app',
  '10_graficas-app',
  '11_directivas-app'
];

const databases = [
  '05_heroes-app.json',
  '06_formularios.json',
  '10_graficas-app.json'
];

inquirer.prompt([
  {
    type: "list",
    name: "seccion",
    message: "Curso de Angular, Seleccione una sección:",
    choices: secciones.reverse()
  }
]).then(({ seccion }) => {
  const hasDB = databases.includes(seccion);

  console.log(colors.yellow("Ejecute el siguiente comando"));
  console.log(colors.brightBlue(`$ ng serve ${seccion}`));
  if(hasDB) console.log(colors.brightBlue(`$ npx json-server database/${seccion}`));
});
