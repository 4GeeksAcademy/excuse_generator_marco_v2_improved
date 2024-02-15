/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["My", "Your"];
  let subject = [
    "doctor",
    "dealer",
    "assistant",
    "probation officer",
    "soulmate"
  ];
  let verb = [
    "vaporised my",
    "swallowed my",
    "made fun of my",
    "played with my"
  ];
  let object = ["heart", "innocence", "outfit", "sanity", "memories"];
  let place = [
    "at the strip club",
    "at KFC",
    "at the Fridays for Future meeting",
    "at the junkyard",
    "at the knitting class"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let objectIndex = Math.floor(Math.random() * object.length);
  let placeIndex = Math.floor(Math.random() * place.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    verb[verbIndex] +
    " " +
    object[objectIndex] +
    " " +
    place[placeIndex]
  );
};
