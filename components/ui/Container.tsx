import Head from 'next/head';
import Footer from 'components/Footer';
import { NextPage } from 'next';
import Nav from './Nav';

type Props = {
  title: string;
  children?: JSX.Element | JSX.Element[];
};

const Container: NextPage<Props> = ({ title, children }) => {
    return (
    <div className="bg-slate-300 dark:bg-slate-900">
      <Head>
        <title>{title}</title>
      </Head>
      <div className="flex flex-col justify-center px-8">
        <Nav />
      </div>
      <main className="flex flex-col justify-center px-8">
        {children}
        <Footer />
      </main>
    </div>
  )
};

export default Container;
