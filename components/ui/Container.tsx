import Head from "next/head";
import Footer from "components/Footer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Nav from "components/ui/Nav";

type Props = {
  title: string;
  description: string;
  children?: JSX.Element | JSX.Element[];
};

const Container: NextPage<Props> = (props) => {
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: 'Maxwell Kopitz – Developer, Student',
    description: `Front-end developer, JavaScript enthusiast`,
    type: 'website',
    ...customMeta
  };
  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content="Student, developer." name="description" />
        <meta
          property="og:url"
          content={`https://maxwell.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://maxwell.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Maxwell Kopitz" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
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
