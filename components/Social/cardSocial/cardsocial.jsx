import styles from "./styles.module.scss";
import Image from "next/image";

export const SocialCard = ({ info }) => {
  return (
    <a
      href={info.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.aCard}
    >
      <div className={styles.cardSocial}>
        <h3>{info.social}</h3>
        <div className={styles.imageProf}>
          <Image src={info.img} alt="social profile" />
        </div>
      </div>
    </a>
  );
};
