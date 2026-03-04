import { PiCrownSimpleFill, PiCode, PiHeart, PiSparkle, PiFilePdfBold } from "react-icons/pi"
import profileImg from "../assets/profile.jpg"
import ParticlesBackground from "./ParticlesBackground"

function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#242445] overflow-hidden"
    >

      {/* PARTICLES BACKGROUND */}
      <ParticlesBackground />

      {/* PHOTO */}
        <div className="mt-20 mb-8 relative animate-float">

          {/* HALO */}
          <div className="absolute inset-0 rounded-full bg-[#ff6fa5] blur-2xl opacity-30 animate-glow"></div>

          {/* IMAGE */}
          <img
            src={profileImg}
            alt="Cecile"
            className="relative w-40 h-40 object-cover rounded-full border-4 border-[#ff6fa5] shadow-xl hover:scale-110 transition duration-300"
          />

        </div>
      {/* NAME */}
      <h1 className="flex items-center gap-3 text-6xl font-extrabold text-[#ff6fa5] mb-6">
        Cecile
        <PiCrownSimpleFill className="text-5xl" />
      </h1>

      {/* DESCRIPTION */}
      <p className="text-xl max-w-2xl mb-10 text-gray-300 leading-relaxed">
        Qu’est-ce que ça donne quand je m’essaie au Web ?
        <br />
        Je ne prétends pas être une experte (pas encore 😉), mais j’adore créer, concevoir et transformer une idée en quelque chose de concret.
        Partir d’une page blanche et voir apparaître une plateforme complète, avec des interfaces propres, modernes et performantes… c’est ça qui me motive.
      </p>

      {/* STATS */}
      <div className="flex flex-wrap justify-center gap-8 mb-10">

        <div className="bg-[#16161d] p-6 rounded-2xl border border-[#ff6fa520] text-center w-36">
          <PiCode className="text-3xl text-[#ff6fa5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">6+</div>
          <div className="text-sm text-gray-400">Projets réalisés</div>
        </div>

        <div className="bg-[#16161d] p-6 rounded-2xl border border-[#ff6fa520] text-center w-36">
          <PiHeart className="text-3xl text-[#ff6fa5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">3</div>
          <div className="text-sm text-gray-400">Années d'expérience</div>
        </div>

        <div className="bg-[#16161d] p-6 rounded-2xl border border-[#ff6fa520] text-center w-36">
          <PiSparkle className="text-3xl text-[#ff6fa5] mx-auto mb-2" />
          <div className="text-2xl font-bold text-white">100%</div>
          <div className="text-sm text-gray-400">Passion</div>
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex gap-6 flex-wrap justify-center">

        <a
          href="#projects"
          className="border border-[#ff6fa5] text-[#ff6fa5] px-8 py-3 rounded-full hover:bg-[#ff6fa5] hover:text-black hover:scale-105 transition duration-300"
        >
          Voir mes projets
        </a>

        <a
          href="#contact"
          className="border border-[#ff6fa5] text-[#ff6fa5] px-8 py-3 rounded-full hover:bg-[#ff6fa5] hover:text-black hover:scale-105 transition duration-300"
        >
          Me contacter
        </a>

        <a
          href="#cv"
          className="flex items-center gap-2 border border-[#ff6fa5] text-[#ff6fa5] px-8 py-3 rounded-full hover:bg-[#ff6fa5] hover:text-black hover:scale-105 transition duration-300"
        >
          <PiFilePdfBold />
          Voir mon CV
        </a>

      </div>

    </section>
  )
}

export default Hero
