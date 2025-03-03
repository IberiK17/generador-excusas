import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["Un mapache", "La abuela de un mapache", "Uno que pasaba por allí", "El tío de un mapache","El primo del mapache",];
  let action = ["se llevó", "se comió", "destrozó", "rompió", "formateó"];
  let what = ["mi trabajo", "mi mi ordenador", "mis deberes", "mi proyecto", "mi vanila"];
  let when = ["antes de entregarlo", "mientras dormía","mientras hacía el trabajo", "mientras me preparaba un café",  "mientras bostezaba" ];
 
  const excuseGenerator = () => {
    //Variables para encontrar el índice de cada array
    let numeroAleatorioDecimal = Math.random();
    let indexWho = Math.floor(numeroAleatorioDecimal * who.length);
    let indexAction = Math.floor(numeroAleatorioDecimal * action.length);
    let indexWhat = Math.floor(numeroAleatorioDecimal * what.length);
    let indexWhen = Math.floor(numeroAleatorioDecimal * when.length);

    //Variables para obtener la palabra de cada array de forma aleatoria
    let wordWho = who[indexWho];
    let wordAction = action[indexAction];
    let wordWhat = what[indexWhat];
    let wordWhen = when[indexWhen];

    //Variable de la excusa completa
    let excuse = wordWho + " " + wordAction + " " + wordWhat + " " + wordWhen;

    return excuse;
  };

  console.log(excuseGenerator());

  //No tocar esto
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};


