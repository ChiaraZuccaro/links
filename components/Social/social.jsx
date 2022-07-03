import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import Link from "next/link";

export const Social = () => {
  return (
    <div className={styles.socialWrap}>
      <Link href="/">
        <div className={styles.socialLogo}>
          <BsFillPeopleFill />
        </div>
      </Link>
    </div>
  );
};
