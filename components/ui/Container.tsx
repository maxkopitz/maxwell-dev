import Head from "next/head";
import Footer from "components/Footer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Nav from "./Nav";

type Props = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

const Container: NextPage<Props> = ({ title, children }) => {
  const router = useRouter();
  return (
    <div className="bg-slate-300 dark:bg-slate-900">
      <Head>
        <title>{title}</title>
        <meta content="Student, developer." name="description" />
        <meta name="robots" content="follow, index" />
        <meta
          property="og:url"
          content={`https://maxwell.dev${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Maxwell Kopitz" />
        <meta property="og:description" content="Student, developer." />
      </Head>
      <div className="flex flex-col justify-center px-8">
        <Nav />
      </div>
      <main className="flex flex-col justify-center px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Container;
