import styles from "./styles.module.scss";
import Image from "next/image";
import Us from "../../components/Images/us-flag-round-icon0000.png";
import Ita from "../../components/Images/italy-512.png";

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.default}>
      {children}

      <footer>
        <div className={styles.flags}>
          <Image src={Ita} />
        </div>
        <div className={styles.flags}>
          <Image src={Us} />
        </div>
      </footer>
    </div>
  );
};
