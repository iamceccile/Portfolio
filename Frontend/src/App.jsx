import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="w-full min-h-screen bg-[#0f0f14]">
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}

export default App