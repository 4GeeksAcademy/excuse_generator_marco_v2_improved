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

  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

  const pronounIndex = getRandomIndex(pronouns);
  const subjectIndex = getRandomIndex(subjects);
  const verbIndex = getRandomIndex(verbs);
  const objectIndex = getRandomIndex(objects);
  const placeIndex = getRandomIndex(places);

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
