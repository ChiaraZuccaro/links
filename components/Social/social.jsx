import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";

export const Social = () => {
  return (
    <div className={styles.socialWrap}>
      <div className={styles.socialLogo}>
        <BsFillPeopleFill />
      </div>
    </div>
  );
};
