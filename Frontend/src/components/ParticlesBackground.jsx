import Particles from "@tsparticles/react"
import { loadSlim } from "tsparticles-slim"
import { useCallback } from "react"

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "transparent" }
        },
        particles: {
          number: {
            value: 40
          },
          color: {
            value: "#ff6fa5"
          },
          links: {
            enable: true,
            color: "#ff6fa5",
            distance: 250,
            opacity: 0.6,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          opacity: {
            value: 0.4
          },
          size: {
            value: { min: 1, max: 3 }
          }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  )
}

export default ParticlesBackground
