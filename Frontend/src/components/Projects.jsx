import ProjectCard from "./ProjectCard"

import dashboardImg from "../assets/projects/be/dashboard.png"
import consultantsImg from "../assets/projects/be/consultants.png"
import profilImg from "../assets/projects/be/Profil.png"
import projetImg from "../assets/projects/be/projet.png"
import settingsImg from "../assets/projects/be/settings.png"

import areaActionImg from "../assets/projects/area/Action-reation.png"
import areaLoginImg from "../assets/projects/area/login.png"
import areaServicesImg from "../assets/projects/area/services.png"

import jebDashboardImg from "../assets/projects/Jeb/dashboard.png"
import jebMenuImg from "../assets/projects/Jeb/Menu.png"
import jebProjectImg from "../assets/projects/Jeb/Projet.png"

import eipDashboardImg from "../assets/projects/EIP/Dashboard.png"
import eipDatesImg from "../assets/projects/EIP/Dates.png"
import eipProjectImg from "../assets/projects/EIP/Project.png"
import eipTeamImg from "../assets/projects/EIP/Team.png"

function Projects() {
    const projects = [
        {
          title: "Dashboard BE: Application de suivi Business – Bureau d’Étude",
          period: "Août 2024 – Décembre 2024",
          description:
            "Développement d’une application interne permettant de remplacer des fichiers Excel par une solution web responsive pour le suivi des projets, consultants, facturation et marges. Les différentes pages sont entièrement interactives et reliées entre elles : toute modification d’un projet, d’un consultant ou d’une facture met à jour dynamiquement les indicateurs du dashboard. L’application intègre des règles métiers complexes (calcul du coût journalier, prorata temporis, rentabilité, ROI) afin de garantir la cohérence des données financières.",
          tech: ["Angular", "TypeScript", "Node.js", "MySQL"],
          images: [
            dashboardImg,
            consultantsImg,
            profilImg,
            projetImg,
            settingsImg
          ]
        },

        {
          title: "JEB Incubateur — Startup Showcase Platform",
          period: "Projet Epitech – 2025",
          description:
              "Conception et développement d’une plateforme complète de gestion et de valorisation des startups incubées. L’application comprend un espace public (catalogue de projets, recherche avancée, actualités, événements), un espace startup pour la gestion de profil et opportunités, ainsi qu’un back-office administrateur avec gestion des rôles et CRUD complet. Architecture front-end Angular couplée à un backend Laravel avec persistance des données et synchronisation API.",
          tech: ["Angular", "Laravel", "REST API", "Authentication", "Role Management"],
          images: [
              jebDashboardImg,
              jebMenuImg,
              jebProjectImg
          ]
      },

        {
            title: "AREA – Plateforme d’automatisation",
            period: "Projet Epitech – 2025 - 2026",
            description:
              "Développement d’une plateforme d’automatisation inspirée de IFTTT et Zapier permettant d’interconnecter différents services via un système Action / Reaction. L’utilisateur peut créer des workflows personnalisés déclenchant automatiquement des réactions lorsqu’une action est détectée (ex : réception d’un email → sauvegarde automatique sur un drive). les services disponibles sont les suivant: Github, Google, Dropbox, Slack et Notion.  ",
            tech: ["Node.js", "Express js", "React", "Angular", "React Native", "Docker", "OAuth2", "REST API"],
            images: [
                areaActionImg,
                areaLoginImg,
                areaServicesImg
              ]
        },

        {
          title: "EIP Manager — Plateforme de gestion de projets",
          period: "Projet Personnel – 2025 - 2026",
          description:
              "Développement d’une application web dédiée à la gestion et au suivi des projets EIP. La plateforme centralise les informations essentielles, facilite le pilotage des équipes et offre une vision claire de l’avancement global. Elle intègre un système de gestion des fuseaux horaires permettant de calculer automatiquement des créneaux adaptés aux équipes internationales. L’EIP Manager propose également un mode personnel servant d’agenda intelligent avec séparation pro / personnel.",
          tech: ["Angular", "NestJS", "Java", "PostgreSQL"],
          images: [
              eipDashboardImg,
              eipDatesImg,
              eipProjectImg,
              eipTeamImg
          ]
        },
      ]

  return (
    <section
        id="projects"
        className="w-full min-h-screen bg-[#0f0f14] px-6 py-20"
    >
      <h2 className="text-4xl font-bold text-[#ff6fa5] text-center mb-16">
        Projets
      </h2>

      <div className="max-w-5xl mx-auto space-y-16">
        {projects.map((project, index) => (
            <div key={index}>
            <ProjectCard project={project} />
            {index !== projects.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-[#ff6fa540] to-transparent my-12" />
            )}
            </div>
        ))}
    </div>
    <a
      href="#top"
      className="fixed bottom-8 right-8 bg-[#ff6fa5] text-black p-3 rounded-full shadow-lg hover:scale-110 transition duration-300"
    >
      ↑
    </a>
    </section>
  )
}

export default Projects
