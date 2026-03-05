import ProjectCard from "./ProjectCard"

import dashboardImg from "../assets/projects/be/dashboard.png"
import consultantsImg from "../assets/projects/be/consultants.png"
import profilImg from "../assets/projects/be/Profil.png"
import projetImg from "../assets/projects/be/projet.png"
import settingsImg from "../assets/projects/be/settings.png"

import areaActionImg from "../assets/projects/area/Action-reation.png"
import areaLoginImg from "../assets/projects/area/login.png"
import areaServicesImg from "../assets/projects/area/Services.png"
import areaAreaImg from "../assets/projects/area/Area.png"
import areaCecileImg from "../assets/projects/area/Cecile.png"

import jebDashboardImg from "../assets/projects/Jeb/Dashboard.png"
import jebMenuImg from "../assets/projects/Jeb/Menu.png"
import jebProjectImg from "../assets/projects/Jeb/Projet.png"
import jebAccueilImg from "../assets/projects/Jeb/Accueil.png"
import jebDonneeImg from "../assets/projects/Jeb/Donnee.png"

import eipDashboardImg from "../assets/projects/EIP/Dashboard.png"
import eipDatesImg from "../assets/projects/EIP/Dates.png"
import eipProjectImg from "../assets/projects/EIP/Project.png"
import eipTeamImg from "../assets/projects/EIP/Team.png"

import fillgood1Img from "../assets/projects/filgood/filgood1.png"
import fillgood2Img from "../assets/projects/filgood/filgood2.png"
import fillgood3Img from "../assets/projects/filgood/filgood3.png"

import React from "react"

function Projects() {
    const projects = [
        {
          title: "Dashboard BE: Application de suivi Business – Bureau d’Étude",
          period: "Août 2024 – Décembre 2024",
          description:
            "Développement d’une application interne permettant de remplacer des fichiers Excel par une solution web responsive pour le suivi des projets, consultants, facturation et marges. Les différentes pages sont entièrement interactives et reliées entre elles : toute modification d’un projet, d’un consultant ou d’une facture met à jour dynamiquement les indicateurs du dashboard. L’application intègre des règles métiers complexes (calcul du coût journalier, prorata temporis, rentabilité, ROI) afin de garantir la cohérence des données financières.",
          tech: ["Angular", "TypeScript", "Node.js", "Nest.js", "MySQL"],
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
              "Conception et développement d’une plateforme complète de gestion et de valorisation des startups incubées. L’application comprend un espace public (catalogue de projets, recherche avancée, actualités, événements), un espace startup pour la gestion de profil et opportunités, ainsi qu’un back-office administrateur avec gestion des rôles et CRUD complet. Architecture front-end React couplée à un backend Laravel avec persistance des données et synchronisation API.",
          tech: ["React", "Laravel", "REST API", "Authentication", "Role Management"],
          images: [
              jebAccueilImg,
              jebDonneeImg,
              jebProjectImg,
              jebDashboardImg,
              jebMenuImg
          ]
      },

        {
            title: "AREA – Plateforme d’automatisation",
            period: "Projet Epitech – 2025 - 2026",
            description:
              "Développement d’une plateforme d’automatisation inspirée de IFTTT et Zapier permettant d’interconnecter différents services via un système Action / Reaction. L’utilisateur peut créer des workflows personnalisés déclenchant automatiquement des réactions lorsqu’une action est détectée (ex : réception d’un email → sauvegarde automatique sur un drive). les services disponibles sont les suivant: Github, Google, Dropbox, Slack et Notion.  ",
            tech: ["Express js", "React", "Angular", "React Native", "Docker", "OAuth2", "REST API"],
            images: [
                areaLoginImg,
                areaServicesImg,
                areaAreaImg,
                areaActionImg,
                areaCecileImg
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

        {
          title: "FilGood — Assistant d’achat textile responsable",
          period: "Projet – 2026",
          description:
            "Développement d’une application mobile visant à aider les consommateurs à mieux comprendre les vêtements au moment de l’achat. FilGood analyse les informations présentes sur l’étiquette (composition, matières, entretien) et les transforme en repères simples et lisibles afin de faciliter des choix plus responsables. L’application attribue un score basé sur la composition des fibres, leur recyclabilité et leur impact environnemental, tout en fournissant des conseils d’usage et d’entretien pour prolonger la durée de vie des vêtements. Elle propose également un système de collection permettant aux utilisateurs d’enregistrer les vêtements scannés et de suivre l’évolution de leur garde-robe.",
          tech: ["React Native", "React",  "Python", "API", "Mobile App"],
          images: [
            fillgood1Img,
            fillgood2Img,
            fillgood3Img
          ]
        }
              ]

  return (
    <section
        id="projects"
        className="w-full min-h-screen bg-[#242445] px-6 py-20"
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
