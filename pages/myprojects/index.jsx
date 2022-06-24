import Head from "next/head";
import { Projects } from "../../components/Projects/projects";

const MyProjects = () => {
  return (
    <div>
      <Head>
        <title>Progetti</title>
        <meta
          name="description"
          content="progetti personali di Chiara Zuccaro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </div>
  );
};

export default MyProjects;
