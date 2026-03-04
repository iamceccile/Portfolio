import { PiFilePdfBold } from "react-icons/pi"

function CV() {
  return (
    <section
      id="cv"
      className="w-full min-h-screen bg-[#1e1e34] flex flex-col items-center bg-[#242445] justify-center px-6 py-20"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-[#ff6fa5] mb-8">
        Mon CV
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-300 mb-10 text-center max-w-xl">
        Vous pouvez consulter mon CV directement ci-dessous ou le télécharger.
      </p>

      {/* CV PREVIEW */}
      <div className="w-full max-w-4xl h-[650px] border border-[#ff6fa540] rounded-xl overflow-hidden shadow-xl mb-10">

        <iframe
          src="/Cv.pdf"
          title="CV Cecile"
          className="w-full h-full"
        />

      </div>

      {/* DOWNLOAD BUTTON */}
      <a
        href="/cv-cecile.pdf"
        download
        className="flex items-center gap-2 bg-[#ff6fa5] text-black px-8 py-3 rounded-full shadow-lg hover:scale-105 transition duration-300"
      >
        <PiFilePdfBold />
        Télécharger le CV
      </a>

    </section>
  )
}

export default CV