function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#16161d]/80 backdrop-blur-md border-b border-[#ff6fa520] z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <a href="#top" className="text-[#ff6fa5] font-bold text-xl">
          Cecile.dev
        </a>

        <div className="flex gap-6 text-gray-300">

          <a href="#projects" className="hover:text-[#ff6fa5] transition">
            Projets
          </a>

          <a href="#cv" className="hover:text-[#ff6fa5] transition">
            CV
          </a>

          <a href="#contact" className="hover:text-[#ff6fa5] transition">
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar