import styles from "./styles.module.scss";
import { RiLink } from "react-icons/ri";
import Image from "next/image";
import { useState } from "react";

export const SingleProj = ({ title, link, description, img }) => {
  const [more, setMore] = useState(false);
  return (
    <div className={styles.singleWrap}>
      <div className={styles.webPhoto}>
        <Image src={img} alt="web photo" />
      </div>
      <div className={`${styles.info} ${more ? styles.more : ""}`}>
        <div className={styles.Title} onClick={() => setMore(!more)}>
          <h4>{title}</h4>
          <RiLink />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.singleA}
        >
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
};
