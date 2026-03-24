/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Mail, 
  MessageSquare, 
  Phone,
  Smartphone, 
  Zap,
  X
} from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    title: "App Development",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Native and cross-platform mobile experiences that push boundaries.",
    tags: ["iOS", "Android", "React Native", "Flutter"]
  },
  {
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    description: "High-performance, scalable web applications with cutting-edge tech stacks.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "Agentic AI",
    icon: <Cpu className="w-8 h-8" />,
    description: "Autonomous AI agents and LLM integrations that automate complex workflows.",
    tags: ["Gemini", "LangChain", "AutoGPT", "Custom RAG"]
  }
];

const projects = [
  {
    id: "01",
    title: "NEURAL FLOW",
    category: "Agentic AI",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "02",
    title: "VOID COMMERCE",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: "03",
    title: "PULSE APP",
    category: "App Development",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden" ref={containerRef}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 brutalist-border border-t-0 border-x-0 bg-dark/80 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        <div className="font-display text-2xl tracking-tighter">LANCER STUDIO</div>
        <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest">
          <a href="#services" className="hover:text-neon transition-colors">Services</a>
          <a href="#work" className="hover:text-neon transition-colors">Work</a>
          <a href="#about" className="hover:text-neon transition-colors">About</a>
          <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-neon text-dark px-4 py-1 font-mono text-xs font-bold uppercase hover:bg-white transition-colors"
        >
          Let's Talk
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center px-6 pt-20">
        <motion.div 
          style={{ scale, opacity }}
          className="max-w-7xl mx-auto w-full"
        >
          <div className="font-mono text-neon text-sm mb-4 tracking-[0.3em] uppercase">
            // Digital Craftsmanship for the Future
          </div>
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tighter uppercase mb-8">
            Building <br />
            <span className="text-neon">Digital</span> <br />
            Frontiers
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-xl md:text-2xl font-light text-white/60 max-w-xl leading-relaxed">
              We are a boutique studio specializing in high-performance apps, 
              immersive web experiences, and autonomous AI agents.
            </p>
            <div className="flex justify-end">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 brutalist-border rounded-full flex items-center justify-center text-neon"
              >
                <ArrowUpRight className="w-12 h-12" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 w-full brutalist-border border-x-0 py-4 overflow-hidden bg-white text-dark">
          <div className="flex animate-marquee whitespace-nowrap font-display text-4xl uppercase tracking-tighter">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="mx-8">
                App Dev • Web Dev • Agentic AI • Digital Strategy • UI/UX Design • 
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 brutalist-border border-x-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <h2 className="font-display text-7xl md:text-9xl tracking-tighter uppercase">
              What <br /> We Do
            </h2>
            <div className="max-w-md font-mono text-sm text-white/50 leading-loose">
              01 / WE DON'T JUST BUILD TOOLS. WE CRAFT SYSTEMS THAT THINK, 
              LEARN, AND SCALE. OUR APPROACH COMBINES BRUTALIST DESIGN 
              PRINCIPLES WITH CUTTING-EDGE TECHNOLOGY.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 brutalist-border">
            {services.map((service, i) => (
              <button 
                key={i} 
                onClick={() => setIsModalOpen(true)}
                className="brutalist-card bg-dark text-left w-full h-full"
              >
                <div className="text-neon mb-6">{service.icon}</div>
                <h3 className="font-display text-4xl mb-4 uppercase">{service.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="font-mono text-[10px] border border-white/20 px-2 py-1 uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-display text-7xl md:text-9xl tracking-tighter uppercase">Selected <br /> Works</h2>
            <div className="font-mono text-xs uppercase tracking-widest mb-4 hidden md:block">
              ( View All Projects )
            </div>
          </div>

          <div className="space-y-32">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-1 font-display text-6xl text-white/10">
                  {project.id}
                </div>
                <div className="md:col-span-7 overflow-hidden brutalist-border">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:col-span-4">
                  <div className="font-mono text-neon text-xs mb-2 uppercase tracking-widest">
                    {project.category}
                  </div>
                  <h3 className="font-display text-5xl md:text-7xl uppercase mb-6 group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>
                  <button className="flex items-center gap-2 font-mono text-xs uppercase border-b border-white/20 pb-2 hover:border-neon transition-colors">
                    View Case Study <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-neon text-dark">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-[12vw] leading-none tracking-tighter uppercase mb-12">
            Let's Build <br /> Something <br /> Epic
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 border-2 border-dark rounded-full flex items-center justify-center mb-4 group-hover:bg-dark group-hover:text-neon transition-all">
                <Mail className="w-8 h-8" />
              </div>
              <span className="font-mono text-sm font-bold uppercase">lancerstudio.com@gmail.com</span>
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div className="w-20 h-20 border-2 border-dark rounded-full flex items-center justify-center mb-4 group-hover:bg-dark group-hover:text-neon transition-all">
                <Phone className="w-8 h-8" />
              </div>
              <span className="font-mono text-sm font-bold uppercase">+91 8939438664</span>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-dark/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-2xl brutalist-border bg-dark p-8 md:p-12 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-neon transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="font-mono text-neon text-xs mb-6 tracking-widest uppercase">
                // Choose your mode of contact
              </div>
              
              <h3 className="font-display text-5xl md:text-7xl uppercase mb-12 tracking-tighter">
                Connect With Us
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="mailto:lancerstudio.com@gmail.com"
                  className="brutalist-card flex flex-col items-center text-center group"
                >
                  <Mail className="w-12 h-12 mb-6 text-neon group-hover:text-dark" />
                  <span className="font-display text-2xl uppercase mb-2">Email</span>
                  <span className="font-mono text-[10px] opacity-40 group-hover:opacity-100">lancerstudio.com@gmail.com</span>
                </a>

                <a 
                  href="https://wa.me/918939438664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-card flex flex-col items-center text-center group border-neon/30"
                >
                  <MessageSquare className="w-12 h-12 mb-6 text-neon group-hover:text-dark" />
                  <span className="font-display text-2xl uppercase mb-2">WhatsApp</span>
                  <span className="font-mono text-[10px] opacity-40 group-hover:opacity-100">+91 8939438664</span>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-white/40">
                <span>Lancer Studio</span>
                <span>Ready to scale</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 brutalist-border border-x-0 border-b-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-display text-2xl tracking-tighter">LANCER STUDIO</div>
          <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            © 2026 LANCER STUDIO • ALL RIGHTS RESERVED • BASED IN THE CLOUD
          </div>
        </div>
      </footer>
    </div>
  );
}
