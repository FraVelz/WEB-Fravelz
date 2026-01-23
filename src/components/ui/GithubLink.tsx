import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GithubLink() {
  return (
    <a 
      href="https://github.com/FraVelz" 
      target="_blank" 
      rel="noreferrer noopener" 
      aria-label="Visitar perfil de GitHub de Fravelz" 
      className="
        h-fit w-fit
        flex items-center justify-center
        bg-gray-900
        px-3 py-2 border border-gray-700 rounded-full
        hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30
        transition-all
      "
    >
      <FontAwesomeIcon icon={faGithub} className="text-gray-300 hover:text-cyan-300" />
    </a>
  );
}
