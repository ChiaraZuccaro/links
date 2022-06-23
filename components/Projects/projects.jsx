import { SingleProj } from "./SingleProj/singleproj";
import projLogo from "../Images/projLogo0000.png";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Projects = () => {
  return (
    <div className={styles.ProjectsWrap}>
      <Image src={projLogo} layout="responsive" />
      <SingleProj
        title="Ferdast"
        link="https://cb3-argo-two.vercel.app/"
        description="Sito web di viaggi internazionali dedicato ad un target che va oltre i 55 anni di età, le possibili mete possono essere scelte tra: Stati Uniti d'America, Russia, Francia e Italia; in ognuna è possibile visitare le singole città e scoprire le varie attività che quella offre; aggiungendo al carrello, si possono vedere in tempo reale le attività e la quantità totale tramite un piccolo pop up sulla destra, tramite il quale si può raggiungere la pagina del carrello , dove è possibile vedere il prezzo totale che l'utente pagherà."
      />
      <SingleProj
        title="BestViewGame"
        link="https://bestviewgame.com/"
        description='"Where gaming meet photography"'
      />
      <SingleProj
        title="Sicily Weather"
        link="https://chiarazuccaro.github.io/WeatherApp-CodeWeek/"
        description="Perfettamente adatta ad ogni dispositivo, applicazione totalmente in JavaScript vanilla dove è possibile visionare il meteo di tutte le città siciliane e non, basta aggiungere una qualsiasi città nell'apposita sezione e il gioco è fatto!"
      />
    </div>
  );
};
