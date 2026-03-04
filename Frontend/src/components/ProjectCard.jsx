import { useState } from "react"

function ProjectCard({ project }) {
  const [showImages, setShowImages] = useState(false)

  return (
    <div className="bg-[#16161d] p-8 rounded-2xl shadow-lg border border-[#ff6fa520]">

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

      {/* Bouton */}
      <button
        onClick={() => setShowImages(!showImages)}
        className="mt-4 bg-[#ff6fa5] text-black px-6 py-2 rounded-full hover:scale-105 transition"
      >
        {showImages ? "Masquer" : "Aperçu de l’application"}
      </button>

      {/* Galerie */}
      {showImages && (
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {project.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="project screenshot"
              className="rounded-xl border border-[#ff6fa520] hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default ProjectCard