import Head from "next/head";
import Footer from "components/Footer";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Nav from "components/ui/Nav";

import { useTheme } from "next-themes";

type Props = {
  title: string;
  description: string;
  children?: JSX.Element | JSX.Element[];
};

const Container: NextPage<Props> = (props) => {
  const router = useRouter();
  const { children, ...customMeta } = props;
  const meta = {
    title: "Maxwell Kopitz – Developer, Student, SWE, Intern",
    description: `Front-end developer, JavaScript enthusiast, Max Kopitz`,
    type: "website",
    ...customMeta,
  };
  const { resolvedTheme } = useTheme();
  const currentTint = resolvedTheme === "dark" ? "#1e293b" : "#cbd5e1";
  console.log(resolvedTheme);

  return (
    <div className="bg-slate-300 dark:bg-slate-800">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://maxwell.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://maxwell.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Maxwell Kopitz" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="theme-color" content={currentTint} />
        <meta name="msapplication-navbutton-color" content={currentTint} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={currentTint}
        />
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
