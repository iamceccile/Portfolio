import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import CV from "./components/CV"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { PiArrowUpBold } from "react-icons/pi"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#242445]">

      <Hero />
      <Projects />
      <Contact />
      <Navbar />
      <CV />
      <Footer />

      {/* Bouton retour en haut */}
      <a
        href="#top"
        className="fixed bottom-8 right-8 bg-[#ff6fa5] text-black p-3 rounded-full shadow-lg hover:scale-110 transition duration-300 z-50"
      >
        <PiArrowUpBold size={20} />
      </a>

    </div>
  )
}

export default App
