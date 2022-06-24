import styles from "./styles.module.scss";
import { RiLink } from "react-icons/ri";

export const SingleProj = ({ title, link, description }) => {
  return (
    <a href={link} target="_blank" className={styles.singleA}>
      <div className={styles.singleWrap}>
        <div className={styles.Title}>
          <h4>{title}</h4>
          <RiLink />
        </div>
        <p>{description}</p>
      </div>
    </a>
  );
};
