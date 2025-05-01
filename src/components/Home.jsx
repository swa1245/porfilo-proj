import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  // Initialize GSAP ScrollTrigger
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Text reveal animation
    const textElements = document.querySelectorAll('.gsap-text-reveal');
    
    textElements.forEach((text) => {
      gsap.fromTo(text, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: text,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    });
    
    return () => {
      // Clean up ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  // Refs for scroll animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <div className="pt-16"> {/* Add padding to account for fixed navbar */}
      {/* Hero Section - Large Stacked Text Style */}
      <section className="h-[80vh] flex items-center justify-center bg-[#E9E9E9] text-[#222222] px-6 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-400/5 rounded-full blur-xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto"
          >
            {/* Large stacked text heading */}
            <div className="mb-12">
              <motion.div 
                className="overflow-hidden relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="relative overflow-hidden">
                  <motion.div 
                    className="text-left mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-['Montserrat'] font-bold tracking-tight text-[#222222]">
                      FRONT<span className="text-blue-500">END</span>
                    </h1>
                  </motion.div>
                  
                  <motion.div 
                    className="text-right"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  >
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-['Montserrat'] font-bold tracking-tight text-[#222222]">
                      <span className="text-blue-500">BACK</span>END
                    </h1>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="text-center mt-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <span className="text-lg md:text-xl uppercase tracking-widest font-light inline-block border-b-2 border-blue-500 pb-1">DEVELOPER</span>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-16 md:mt-24 max-w-xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
              </motion.div>
            </div>
            
            <motion.div
              className="flex items-center justify-center gap-6 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <motion.a 
                href="#work" 
                className="px-8 py-3 border border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-[#E9E9E9] transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="text-[#222222] hover:text-blue-400 transition-colors duration-300 flex items-center"
                whileHover={{ x: 5 }}
              >
                Contact
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        
      </section>
      <hr />

      {/* Scroll-Triggered Text Reveal Section */}
      <section ref={targetRef} id="scroll-section" className="py-16 px-6 bg-[#E9E9E9] relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="relative">
            {/* Subtle background elements */}
            <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
            
            <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                style={{ opacity, scale }}
                className="overflow-hidden mb-10"
              >
                <h2 className="text-3xl md:text-4xl font-light text-[#222222] mb-4">What I Do</h2>
                <div className="h-px w-24 bg-blue-400 mx-auto"></div>
              </motion.div>
              
              <div className="relative">
                {/* GSAP animated text */}
                <div className="overflow-hidden mb-12">
                  <p className="gsap-text-reveal text-2xl md:text-4xl font-light text-[#222222]">
                    I design interfaces users love
                  </p>
                </div>
                
                <div className="overflow-hidden mb-12">
                  <p className="gsap-text-reveal text-2xl md:text-4xl font-light text-[#222222]">
                    and build backends that power them
                  </p>
                </div>
                
                <div className="overflow-hidden">
                  <p className="gsap-text-reveal text-2xl md:text-4xl font-light text-[#222222]">
                    with <span className="text-blue-400">speed</span> and <span className="text-blue-400">stability</span>.
                  </p>
                </div>
              </div>
              
              {/* Framer Motion animated line */}
              <motion.div 
                className="h-px bg-blue-400/30 w-0 mx-auto mt-10"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              {/* Skills icons with Framer Motion */}
              <motion.div 
                className="flex flex-wrap justify-center gap-6 mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {[
                  { name: 'Frontend', icon: '🎨', description: 'UI/UX Design' },
                  { name: 'Backend', icon: '⚙️', description: 'API Development' },
                  { name: 'Database', icon: '🗄️', description: 'Data Architecture' },
                  { name: 'Performance', icon: '⚡', description: 'Optimization' }
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-2">{skill.icon}</div>
                    <h3 className="text-[#222222] text-lg font-medium mb-1">{skill.name}</h3>
                    <p className="text-[#222222]/70 text-sm">{skill.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      {/* Skills Marquee Section - Simple Single Line */}
      <section className="py-8 bg-[#E9E9E9] border-t border-gray-200 border-b overflow-hidden">
        <div className="relative">
          {/* Single line marquee */}
          <div className="overflow-hidden relative">
            <motion.div 
              className="whitespace-nowrap flex items-center"
              animate={{
                x: ["-100%", "0%"]
              }}
              transition={{
                x: {
                  duration: 25,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }
              }}
              style={{ width: "fit-content" }}
            >
              {[
                "JavaScript", "TypeScript", "HTML", "CSS", "OOPS", "React.js", 
                "Node.js", "Express.js", "Tailwind CSS", "GSAP", "MySQL", "MongoDB", "Docker",
                "JavaScript", "TypeScript", "HTML", "CSS", "OOPS", "React.js", 
                "Node.js", "Express.js", "Tailwind CSS", "GSAP", "MySQL", "MongoDB", "Docker"
              ].map((skill, index) => (
                <div key={index} className="mx-6 inline-flex items-center">
                  <span className="text-[#222222] font-['Montserrat'] text-xl font-light">{skill}</span>
                  <span className="text-blue-400 mx-3 text-xl">•</span>
                </div>
              ))}
            </motion.div>
          </div>
          

          {/* Gradient overlays for a fade effect on the sides */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#E9E9E9] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#E9E9E9] to-transparent z-10"></div>
        </div>
      </section>
      <hr className="border-gray-200" />

    </div>
  );
};

export default Home;
