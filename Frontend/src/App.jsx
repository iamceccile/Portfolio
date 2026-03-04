import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { PiArrowUpBold } from "react-icons/pi"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0f0f14]">

      <Hero />
      <Projects />
      <Contact />

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
