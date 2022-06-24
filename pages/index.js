import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import photo from "../components/Images/prova0000.jpg";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile</title>
        <meta
          name="description"
          content="about Chiara Zuccaro, a front end developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.photo}>
        <Image src={photo} layout="responsive" />
      </div>

      <div className={styles.about}>
        <h2>Chiara Zuccaro</h2>
        <h4>Front end developer</h4>
        <p>
          Quando, grazie all’università, ho scoperto il mondo della
          programmazione ho capito e confermato che la mia strada è la
          tecnologia, poco importa quanto sarà difficile, la costanza e
          l’impegno porteranno sempre ottimi risultati!🔥👨‍💻
        </p>
        <p>
          Il mio percorso in Edgemony lo ha solamente dimostrato ulteriormente.
        </p>
      </div>

      <div className={styles.Pages}>
        <Link href="myprojects">
          <a className={styles.buttons}>
            <p>Progetti</p>
          </a>
        </Link>
        <Link href="social">
          <a className={styles.buttons}>
            <p>Social</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
