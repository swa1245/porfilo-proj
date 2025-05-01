import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-16 bg-[#E9E9E9] min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-[#222222] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-500">Me</span>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Personal Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6">Swaraj Jayawant Patil</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#222222]">Full Stack Developer</h3>
                  <p className="text-[#222222]/80">Passionate about creating seamless digital experiences from front to back</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#222222]">Location</h3>
                  <p className="text-[#222222]/80">Kolhapur, Maharashtra, India</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-[#222222]">Email</h3>
                  <p className="text-[#222222]/80">swarajpatil@example.com</p>
                </div>
                
                
              </div>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Education
              </h2>
              
              <div className="space-y-8">
                {/* Education Item 1 */}
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-[#222222]">Kolhapur Institute of Technology</h3>
                      <p className="text-[#222222]/80">Bachelor of Technology in Computer Science</p>
                      <p className="text-blue-500 font-medium">CGPA: 7.9/10</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">2021 - 2025</span>
                      <p className="text-[#222222]/70 text-sm mt-1">Kolhapur, Maharashtra</p>
                    </div>
                  </div>
                </div>
                
                {/* Education Item 2 */}
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-[#222222]">R.K Junior College</h3>
                      <p className="text-blue-500 font-medium">Percentage: 90.33%</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">2019 - 2021</span>
                      <p className="text-[#222222]/70 text-sm mt-1">Gadhinglaj, Maharashtra</p>
                    </div>
                  </div>
                </div>
                
                {/* Education Item 3 */}
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-[#222222]">Sadhana High School</h3>
                      <p className="text-blue-500 font-medium">Percentage: 83%</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded">2018 - 2019</span>
                      <p className="text-[#222222]/70 text-sm mt-1">Gadhinglaj, Maharashtra</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-[#222222] mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Achievements
              </h2>
              
              <ul className="list-disc list-inside space-y-4 pl-4">
                <li className="text-[#222222]/90">
                  <span className="font-medium text-[#222222]">Runner-up in No-Code WordPress Development Competition.</span>
                </li>
                <li className="text-[#222222]/90">
                  <span className="font-medium text-[#222222]">Secured 3rd place in Farm Automation System Project.</span>
                </li>
                <li className="text-[#222222]/90">
                  <span className="font-medium text-[#222222]">Managed a 15+ member technical team and conducted workshops for over 30 participants.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
