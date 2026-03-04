import { useState } from "react"

function ProjectCard({ project }) {

  const [showImages, setShowImages] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  return (
    <>
      <div className="bg-[#16161d] p-8 rounded-2xl shadow-lg border border-[#ff6fa520] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,111,165,0.25)] transition duration-500">

        <h3 className="text-2xl font-bold text-[#ff6fa5] mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-6">
          {project.period}
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="bg-[#ff6fa520] text-[#ff6fa5] px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* bouton aperçu */}
        <button
          onClick={() => setShowImages(!showImages)}
          className="mt-4 bg-[#ff6fa5] text-black px-6 py-2 rounded-full hover:scale-105 transition"
        >
          {showImages ? "Masquer" : "Aperçu de l’application"}
        </button>

        {/* galerie normale */}
        {showImages && (
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {project.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="project screenshot"
                onClick={() => setSelectedIndex(index)}
                className="cursor-pointer rounded-xl border border-[#ff6fa520] hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        )}

      </div>

      {/* MODAL */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

          {/* bouton fermer */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-8 right-8 text-white text-3xl"
          >
            ✕
          </button>

          {/* bouton gauche */}
          <button
            onClick={prevImage}
            className="absolute left-10 text-white text-4xl"
          >
            ‹
          </button>

          {/* image */}
          <img
            src={project.images[selectedIndex]}
            className="max-h-[85vh] max-w-[85vw] rounded-xl shadow-2xl"
          />

          {/* bouton droite */}
          <button
            onClick={nextImage}
            className="absolute right-10 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}
    </>
  )
}

export default ProjectCard
