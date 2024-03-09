/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

const generateExcuse = () => {
  const pronouns = ["My", "Your"];
  const subjects = [
    "doctor",
    "dealer",
    "assistant",
    "probation officer",
    "soulmate"
  ];
  const verbs = [
    "vaporized my",
    "swallowed my",
    "made fun of my",
    "played with my"
  ];
  const objects = ["heart", "innocence", "outfit", "sanity", "memories"];
  const places = [
    "at the strip club",
    "at KFC",
    "at the Fridays for Future meeting",
    "at the junkyard",
    "at the knitting class"
  ];

  const getRandomIndex = array => Math.floor(Math.random() * array.length);

  const pronounIndex = getRandomIndex(pronouns);
  const subjectIndex = getRandomIndex(subjects);
  const verbIndex = getRandomIndex(verbs);
  const objectIndex = getRandomIndex(objects);
  const placeIndex = getRandomIndex(places);

  return `${pronouns[pronounIndex]} ${subjects[subjectIndex]} ${verbs[verbIndex]} ${objects[objectIndex]} ${places[placeIndex]}`;
};
