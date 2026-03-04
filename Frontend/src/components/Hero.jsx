import { PiCrownSimpleFill } from "react-icons/pi"
import profileImg from "../assets/profile.jpg"

function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0f0f14]">

      {/* PHOTO */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 rounded-full bg-[#ff6fa5] blur-2xl opacity-30"></div>
        <img
          src={profileImg}
          alt="Cecile"
          className="relative w-40 h-40 object-cover rounded-full border-4 border-[#ff6fa5] shadow-xl hover:scale-105 transition duration-300"
        />
      </div>

      {/* NAME */}
      <h1 className="flex items-center gap-3 text-6xl font-extrabold text-[#ff6fa5] mb-6">
        Cecile
        <PiCrownSimpleFill className="text-5xl" />
      </h1>

      {/* DESCRIPTION */}
      <p className="text-xl max-w-2xl mb-10 text-gray-300 leading-relaxed">
        Développeuse Web passionnée, spécialisée en Angular (Typescript) et Nodejs (Javascript).
        <br />
        J’aime créer des interfaces propres, modernes et performantes.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-6">
        
        <a
          href="#projects"
          className="bg-[#ff6fa5] text-black px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          Voir mes projets
        </a>

        <a
          href="#contact"
          className="border border-[#ff6fa5] text-[#ff6fa5] px-8 py-3 rounded-full hover:bg-[#ff6fa5] hover:text-black transition duration-300"
        >
          Me contacter
        </a>

      </div>

    </section>
  )
}

export default Hero