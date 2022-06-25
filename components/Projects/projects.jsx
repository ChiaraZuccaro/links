import { SingleProj } from "./SingleProj/singleproj";
import dataProjects from "../../utils/dataproject";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaTools } from "react-icons/fa";

export const Projects = () => {
  return (
    <div className={styles.ProjectsWrap}>
      <div className={styles.title}>
        <Link href="/">
          <div className={styles.tools}>
            <FaTools />
          </div>
        </Link>
        <h2>I miei progetti</h2>
      </div>
      <div className={styles.projList}>
        {dataProjects &&
          dataProjects.map((obj, i) => (
            <SingleProj
              title={obj.title}
              link={obj.link}
              description={obj.description}
              img={obj.img}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};
