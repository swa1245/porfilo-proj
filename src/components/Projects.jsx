import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import mernVideo from '../assets/videos/mern_expert_v2.webm';

// Import project images
import project1 from '../assets/images/WhatsApp Image 2025-04-25 at 12.49.38_3b55c37e.jpg';
import project2 from '../assets/images/WhatsApp Image 2025-04-25 at 12.49.39_4730224b.jpg';
import project3 from '../assets/images/WhatsApp Image 2025-04-25 at 12.49.40_d2107a45.jpg';
import project4 from '../assets/images/WhatsApp Image 2025-04-25 at 12.49.40_d51d5f7a.jpg';
import project5 from '../assets/images/WhatsApp Image 2025-05-01 at 11.44.29_0746fc34.jpg';
import project6 from '../assets/images/WhatsApp Image 2025-05-01 at 11.44.30_f00f6079.jpg';

const Projects = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  }, []);

  return (
    <div className="pt-16 bg-[#E9E9E9] min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[#222222] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-8">
              Unleash the Power of <span className="text-blue-500">MERN</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#222222]">Scalable</h3>
                  <p className="text-[#222222]/80 mt-2">
                    Build applications that can grow with your user base, handling increased loads with ease.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#222222]">Speed & Performance</h3>
                  <p className="text-[#222222]/80 mt-2">
                    Deliver lightning-fast experiences with optimized rendering and efficient data handling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#222222]">Efficient</h3>
                  <p className="text-[#222222]/80 mt-2">
                    Streamline development with a unified JavaScript stack from front to back.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#222222]">Flexible & Powerful</h3>
                  <p className="text-[#222222]/80 mt-2">
                    Adapt to changing requirements with a versatile tech stack that can handle complex applications.
                  </p>
                </div>
              </div>
            </div>

           
          </motion.div>
          <hr />

          {/* Right side video */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl bg-[#222222]">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                loop
                muted
                playsInline
              >
                <source src={mernVideo} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
        

        
        {/* Project Cards Section */}
        <motion.div
          className="mt-32 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-12 text-center">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project1} 
                alt="Project 1" 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            
            {/* Project Card 2 */}
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project2} 
                alt="Project 2" 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            
            {/* Project Card 3 */}
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project3} 
                alt="Project 3" 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            
            {/* Project Card 4 */}
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project4} 
                alt="Project 4" 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            
            {/* Project Card 5 */}
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project5} 
                alt="Project 5" 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            
            {/* Project Card 6 */}
            <motion.div 
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project6} 
                alt="Project 6" 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Project Links Section */}
        <motion.div
          className="py-20 bg-[#222222] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Live <span className="text-blue-400">Projects</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Link 1 */}
              <motion.div
                className="p-6 rounded-lg bg-[#333333] hover:bg-[#444444] transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-3">Property Management</h3>
                <p className="text-gray-300 mb-4">A comprehensive property management solution for real estate professionals.</p>
                <a 
                  href="https://property-management-iota.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
              
              {/* Project Link 2 */}
              <motion.div
                className="p-6 rounded-lg bg-[#333333] hover:bg-[#444444] transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-3">LGM Sports</h3>
                <p className="text-gray-300 mb-4">Sports management platform with team organization and event scheduling.</p>
                <a 
                  href="https://lgmsports.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
              
              {/* Project Link 3 */}
              <motion.div
                className="p-6 rounded-lg bg-[#333333] hover:bg-[#444444] transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-3">Patron Project</h3>
                <p className="text-gray-300 mb-4">Crowdfunding platform connecting creators with supporters for innovative projects.</p>
                <a 
                  href="https://patron-project-kfto.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
              
              {/* Project Link 4 */}
              <motion.div
                className="p-6 rounded-lg bg-[#333333] hover:bg-[#444444] transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-3">Evergreen</h3>
                <p className="text-gray-300 mb-4">Sustainable living platform promoting eco-friendly products and practices.</p>
                <a 
                  href="https://evergreen-delta-indol.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
              
              {/* Project Link 5 */}
              <motion.div
                className="p-6 rounded-lg bg-[#333333] hover:bg-[#444444] transition-colors duration-300"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-semibold mb-3">Kionx Project</h3>
                <p className="text-gray-300 mb-4">Innovative digital solutions for modern businesses and startups.</p>
                <a 
                  href="https://kionx-project.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
              
              {/* Contact Card */}
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
