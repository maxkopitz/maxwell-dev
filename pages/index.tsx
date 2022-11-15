import Head from 'next/head'

import About from '../components/sections/about'
import Contact from '../components/sections/contact'
import Container from '../components/Container'

/* NOTE: About and sidebars inspired from https://brittanychiang.com/
 * TODO: When complete give credit in README.md
 */

const Home: React.FC = () => {
  return (
    <Container title="Maxwell Kopitz">
      <div className="flex flex-row justify-center items-start mx-auto max-w-2xl pb-16">
        <div className="grow">
          <About />
          <Contact />
        </div>
        <div className="w-16 h-screen text-white sticky top-0">
          <div className="absolute text-center inset-x-0 bottom-64 rotate-90">
            <h1>maxkopitz02@gmail.com</h1>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Home;
