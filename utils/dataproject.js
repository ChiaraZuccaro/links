import weather from "./imgProj/weather.jpg";
import bestviewgame from "./imgProj/bestviewgame.jpg";
import ferdast from "./imgProj/ferdast.jpg";
import fetest from "./imgProj/fe-test.jpg";

import insta from "./imgSocial/insta0000.jpg";
import github from "./imgSocial/github0000.jpg";
import linked from "./imgSocial/linked.jpg";

export const projects = [
  {
    title: "Ferdast",
    link: "https://cb3-argo-two.vercel.app/",
    img: ferdast,
    description:
      "Sito web di viaggi internazionali dedicato ad un target che va oltre i 55 anni di età, le possibili mete possono essere scelte tra: Stati Uniti d'America, Russia, Francia e Italia; in ognuna è possibile visitare le singole città e scoprire le varie attività che quella offre; aggiungendo al carrello, si possono vedere in tempo reale le attività e la quantità totale tramite un piccolo pop up sulla destra, tramite il quale si può raggiungere la pagina del carrello , dove è possibile vedere il prezzo totale che l'utente pagherà.",
  },
  {
    title: "BestViewGame",
    link: "https://bestviewgame.com/",
    img: bestviewgame,
    description: '"Where gaming meet photography"',
  },
  {
    title: "Sicily Weather",
    link: "https://chiarazuccaro.github.io/WeatherApp-CodeWeek/",
    img: weather,
    description:
      "Perfettamente adatta ad ogni dispositivo, applicazione totalmente in JavaScript vanilla dove è possibile visionare il meteo di tutte le città siciliane e non, basta aggiungere una qualsiasi città nell'apposita sezione e il gioco è fatto!",
  },

  {
    title: "E-commerce test",
    link: "http://fe-test-blond.vercel.app/",
    img: fetest,
    description:
      "Fake e-commerce totalmente responsive sviluppato in 5 giorni per un test con next.js.",
  },
];

export const social = [
  {
    social: "LinkedIn",
    link: "https://www.linkedin.com/in/chiara-zuccaro/",
    img: linked,
  },
  {
    social: "GitHub",
    link: "https://github.com/ChiaraZuccaro",
    img: github,
  },
  {
    social: "Instagram",
    link: "https://www.instagram.com/chiara_coding/",
    img: insta,
  },
];
