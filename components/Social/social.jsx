import styles from "./styles.module.scss";
import { BsFillPeopleFill } from "react-icons/bs";
import { social } from "../../utils/dataproject";
import Link from "next/link";
import { SocialCard } from "./cardSocial/cardsocial";

export const Social = () => {
  return (
    <div className={styles.socialWrap}>
      <Link href="/">
        <div className={styles.socialLogo}>
          <BsFillPeopleFill />
        </div>
      </Link>
      <div className={styles.linkSocial}>
        {social.map((el, i) => (
          <SocialCard info={el} key={i} />
        ))}
      </div>
    </div>
  );
};
