import { 
    PiGithubLogoFill, 
    PiLinkedinLogoFill, 
    PiEnvelopeFill,
    PiDiscordLogoFill
  } from "react-icons/pi"
  
  function Contact() {
    return (
      <section 
        id="contact"
        className="w-full min-h-screen flex flex-col items-center justify-center bg-[#242445] text-center px-6"
      >
        
        <h2 className="text-4xl font-bold text-[#ff6fa5] mb-8">
          Me contacter
        </h2>
  
        <p className="text-gray-300 mb-12 max-w-xl">
          Intéressé(e) par mon profil pour un stage ou un projet ?
          N’hésitez pas à me contacter.
        </p>
  
        <div className="flex gap-8 text-4xl text-[#ff6fa5]">
          
          <a 
            href="https://github.com/iamceccile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-white transition duration-300"
          >
            <PiGithubLogoFill />
          </a>
  
          <a 
            href="https://www.linkedin.com/in/nyafeu-anne-cecile31/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-white transition duration-300"
          >
            <PiLinkedinLogoFill />
          </a>
  
          <a 
            href="mailto:anne-cecile.batchami-nyafeu@epitech.eu"
            className="hover:scale-110 hover:text-white transition duration-300"
          >
            <PiEnvelopeFill />
          </a>
  
          <a 
            href="https://discord.com/users/cecile1103"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 hover:text-[#5865F2] transition duration-300"
          >
            <PiDiscordLogoFill />
          </a>
  
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
  
  export default Contact
