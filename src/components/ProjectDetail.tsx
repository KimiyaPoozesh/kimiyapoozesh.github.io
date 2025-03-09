import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const projects: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  github: string;
  live: string;
}> = {
  "1": {
    title: "Cosmic Voyager",
    description: "A space exploration game with procedurally generated worlds",
    fullDescription: `Cosmic Voyager is an ambitious space exploration game that pushes the boundaries of procedural generation. Players can explore an infinite universe where each planet, star system, and galaxy is uniquely generated.

The game features:
- Advanced procedural generation algorithms
- Dynamic weather systems
- Realistic orbital mechanics
- Interactive space stations
- Complex resource management`,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      "https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800"
    ],
    technologies: ["Unity", "C#", "Procedural Generation", "Shader Graph", "HLSL"],
    github: "https://github.com/KimiyaPoozesh",
    live: "https://cosmic-voyager.game"
  }
};


const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[Number(id)];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        <p>Project not found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 max-w-7xl mx-auto"
    >
      {/* Back Button */}
      <button
        onClick={() => navigate('/projects')}
        className="relative z-10 flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Projects</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Project Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-gray-400 mb-6 text-lg">{project.description}</p>
          
          <div className="prose prose-invert mb-6">
            {project.fullDescription.split("\n").map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View Source</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </motion.div>

        {/* Right Side: Images */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="space-y-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
