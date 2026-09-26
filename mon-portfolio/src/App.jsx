import Navbar from './components/ui/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import PourQui from './components/sections/PourQui.jsx'
import QuiSommesNous from './components/sections/QuiSommesNous.jsx'
import NotreOffre from './components/sections/NotreOffre.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/ui/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PourQui />
        <QuiSommesNous />
        <NotreOffre />
        <Contact />
      </main>
      <Footer />
    </>
  )
}