import Head from 'next/head'

import About from '../components/sections/about'
import Experience from '../components/sections/experience'
import Projects from '../components/sections/projects'
import Contact from '../components/sections/contact'
import Footer from '../components/footer'

/* NOTE: About and sidebars inspired from https://brittanychiang.com/
 * TODO: When complete give credit in README.md
 */

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Maxwell.dev - Home</title>
        <meta name="description" content="Maxwell Kopitz portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-row">
          <div className="w-16 h-screen text-white sticky top-0">
            <div className="absolute text-center inset-x-2 bottom-52">
              <h1>G</h1>
              <h1>L</h1>
              <h1>I</h1>
              <h1>T</h1>
            </div>
          </div>
          <div className="grow">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
          <div className="w-16 h-screen text-white sticky top-0">
            <div className="absolute text-center inset-x-0 bottom-64 rotate-90">
              <h1>maxkopitz02@gmail.com</h1>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  )
}

export default Home;
