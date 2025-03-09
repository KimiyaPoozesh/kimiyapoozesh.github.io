import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TowerControl as GameController, Code, Monitor, Mail, Github, Linkedin, Gamepad2, Coffee, Brain, Trophy, Users, Rocket, ChevronRight } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-between px-4 py-20"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-4xl mx-auto space-y-20"
      >
        {/* Hero Section */}
        <div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Kimia Poozesh
          </h1>
          <h2 className="text-2xl text-gray-400 mb-8">Unity Game Developer & Interactive Experience Creator</h2>
          
          <motion.div 
            className="flex gap-8 justify-center mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col items-center">
              <GameController className="w-12 h-12 text-purple-400 mb-2" />
              <p className="text-gray-300">Game Development</p>
            </div>
            <div className="flex flex-col items-center">
              <Code className="w-12 h-12 text-pink-400 mb-2" />
              <p className="text-gray-300">C# Programming</p>
            </div>
            <div className="flex flex-col items-center">
              <Monitor className="w-12 h-12 text-blue-400 mb-2" />
              <p className="text-gray-300">3D Visualization</p>
            </div>
          </motion.div>

          {/* <Link to="/projects">
            <motion.button
              
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              View My Work
            </motion.button>
          </Link> */}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
        >
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-purple-500/20">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH23Ph9lsqCMw/profile-displayphoto-shrink_200_200/B4DZO1ttQmHUAY-/0/1733920479172?e=1747267200&v=beta&t=6nvUFcTpLuRFOL-qX93T8u8gC1k8vetjS1JcDTGt7eU"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-2 text-left space-y-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              About Me
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-purple-500/10 p-4 rounded-xl"
              >
                <Gamepad2 className="w-8 h-8 text-purple-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Game Design</h4>
                <p className="text-sm text-gray-400">Crafting engaging player experiences</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-pink-500/10 p-4 rounded-xl"
              >
                <Brain className="w-8 h-8 text-pink-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">AI Systems</h4>
                <p className="text-sm text-gray-400">Implementing intelligent behaviors</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-blue-500/10 p-4 rounded-xl"
              >
                <Users className="w-8 h-8 text-blue-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Collaboration</h4>
                <p className="text-sm text-gray-400">Working with diverse teams</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-green-500/10 p-4 rounded-xl"
              >
                <Rocket className="w-8 h-8 text-green-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Innovation</h4>
                <p className="text-sm text-gray-400">Pushing technical boundaries</p>
              </motion.div>
            </div>

            <p className="text-gray-300">
              With over 5 years of experience in game development, I specialize in creating immersive experiences that combine cutting-edge technology with engaging gameplay mechanics. My passion lies in pushing the boundaries of what's possible in interactive entertainment.
            </p>

            {/* <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">10+ Shipped Games</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">500+ Coffee Cups</span>
              </div>
            </div> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
        >

        <div>
              <Link
                to="/projects"
                className="group relative inline-flex items-center justify-center px-12 py-8 bg-purple-600 rounded-lg overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative group-hover:text-purple-600 flex items-center font-large">
                  View Projects
                  <ChevronRight className="ml-2 h-5 w-5" />
                </span>
              </Link>
            </div>
    </motion.div>
        {/* Contact Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Let's Connect
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you want to discuss a potential collaboration or just say hello, feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="mailto:john@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </motion.a>
            <motion.a
              href="https://github.com/johndeveloper"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/johndeveloper"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;