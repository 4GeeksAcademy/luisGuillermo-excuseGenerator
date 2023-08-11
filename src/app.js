/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  /* Declarando los arrays que tendra cada elemento de la excusa que se va 
     a generar y llamando el id donde se va a introducir la excusa en el HTML*/
  let excuse = document.querySelector("#excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "after I finished",
    "during my lunch",
    "while I was praying"
  ];
  /* En este funcion se esta llamando y recorriendo de forma aleatoria 
     cada elemento de los array declarados anteriormente e 
     introduciendo el string en el HTML que mostrara la excusa generada*/
  const generateExcuse = () => {
    let whoIndice = Math.floor(Math.random() * who.length);
    let actionIndice = Math.floor(Math.random() * action.length);
    let whatIndice = Math.floor(Math.random() * what.length);
    let whenIndice = Math.floor(Math.random() * when.length);
    excuse.innerHTML =
      who[whoIndice] +
      " " +
      action[actionIndice] +
      " " +
      what[whatIndice] +
      " " +
      when[whenIndice];
  };

  generateExcuse();
};
