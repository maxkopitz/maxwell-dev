import Head from "next/head";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { SunIcon } from "components/icons/SunIcon";
import { MoonIcon } from "components/icons/MoonIcon";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const Container = ({ title, description, children }: Props) => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const currentTint = resolvedTheme === "dark" ? "#1e293b" : "#cbd5e1";
  const url = `https://maxwell.dev${router.asPath}`;

  return (
    <div className="min-h-screen bg-slate-300 dark:bg-slate-800">
      <Head>
        <title>{title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={description} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Maxwell Kopitz" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="theme-color" content={currentTint} />
      </Head>
      <main className="mx-auto w-full max-w-2xl px-8 py-8">
        <div className="flex justify-end mb-12">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <span className="block dark:hidden">
              <MoonIcon />
            </span>
            <span className="hidden dark:block">
              <SunIcon />
            </span>
          </button>
        </div>
        {children}
      </main>
    </div>
  );
};

export default Container;
