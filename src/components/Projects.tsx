import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Gamepad2, Code2Icon, Code, Globe } from "lucide-react"; // Use VrHeadset instead of Vr

const projects = [
  {
    id: 1,
    title: "Cosmic Voyager",
    description: "A space exploration game with procedurally generated worlds",
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200",
    tags: ["Unity", "C#", "Procedural Generation"],
    category: "Game",
  },
  {
    id: 2,
    title: "Forest Guardian",
    description: "An environmental adventure game with dynamic ecosystems",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=1200",
    tags: ["Unity", "C#", "AI Systems"],
    category: "Game",
  },
  {
    id: 3,
    title: "VR Training Simulator",
    description: "A VR simulation for industrial training",
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=1200",
    tags: ["Unity", "C#", "VR"],
    category: "VR",
  },
  {
    id: 4,
    title: "AI Stock Predictor",
    description: "A Python-based AI model for stock market predictions",
    image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=1200",
    tags: ["Python", "Machine Learning"],
    category: "Python",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio built with React",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=1200",
    tags: ["React", "Web Development"],
    category: "Others",
  }
];

const categories = {
  VR: { title: "VR Projects", icon: <Code2Icon className="w-6 h-6 text-purple-400" /> },
  Game: { title: "Game Projects", icon: <Gamepad2 className="w-6 h-6 text-blue-400" /> },
  Python: { title: "Python Projects", icon: <Code className="w-6 h-6 text-green-400" /> },
  Others: { title: "Other Projects", icon: <Globe className="w-6 h-6 text-yellow-400" /> },
} as const;

// Group projects by category
const groupedProjects = projects.reduce((acc, project) => {
  acc[project.category] = [...(acc[project.category] || []), project];
  return acc;
}, {} as Record<string, typeof projects>);

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
        Featured Projects
      </h2>

      {/* Render Sections */}
      {Object.entries(groupedProjects).map(([category, projects]) => {
        const typedCategory = category as keyof typeof categories; // Fix TypeScript error

        return (
          <div key={category} className="mb-12">
            {/* Section Title */}
            <div className="flex items-center space-x-3 mb-6">
              {categories[typedCategory]?.icon}
              <h3 className="text-2xl font-semibold">{categories[typedCategory]?.title}</h3>
              <div className="flex-1 h-px bg-gray-600" /> {/* Line */}
            </div>

            {/* Projects in the Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/project/${project.id}`)}
                  className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-purple-500/20 text-purple-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Projects;
