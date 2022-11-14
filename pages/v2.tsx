import Head from 'next/head'

import About from '../components/sections/about'
import Experience from '../components/sections/experience'
import Projects from '../components/sections/projects'
import Contact from '../components/sections/contact'
import Footer from '../components/footer'

const v2: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Maxwell.dev - Home</title>
        <meta name="description" content="Maxwell Kopitz portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <About/>
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default v2;
