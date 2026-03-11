import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, ArrowDown, FileDown, Mail } from "lucide-react";
import { Reveal } from "@/lib/motion";
import profileImg from "@/assets/profile-placeholder.jpeg";

const titles = [
  "Software Developer",
  "Full Stack Developer",
  "AI/ML Engineer",
  "CS Undergraduate",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal delay={0.1}>
            <p className="text-primary font-mono-code text-sm mb-3 tracking-wider uppercase">
              Hello, I'm
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4">
              Manogna Shree{" "}
              <span className="gradient-text">Dasari</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="h-8 mb-6 overflow-hidden">
              <motion.div
                key={titleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-display text-lg sm:text-xl text-primary font-semibold"
              >
                {titles[titleIndex]}
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg mb-8">
              B.Tech CSE student at IIIT Sri City with hands-on experience in AI systems,
              full-stack development, REST APIs, databases, and production-oriented projects.
              Passionate about building intelligent, scalable software solutions.
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 rounded-xl glass font-medium text-sm hover:bg-primary/10 transition-all flex items-center gap-2"
              >
                <FileDown size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl glass font-medium text-sm hover:bg-primary/10 transition-all flex items-center gap-2"
              >
                <Mail size={16} /> Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/in/manogna-shree-dasari/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary hover:glow transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ManognaShreeDasari" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary hover:glow transition-all">
                <Github size={20} />
              </a>
              <a href="https://leetcode.com/u/ManognaShree/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl glass text-muted-foreground hover:text-primary hover:glow transition-all">
                <ExternalLink size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Profile Image */}
        <Reveal delay={0.3} direction="right" className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full animate-border opacity-60 blur-sm" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30 glow">
              <img
                src={profileImg}
                alt="Manogna Shree Dasari"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-2 -right-2 glass-card px-3 py-2 text-xs font-medium"
            >
              🚀 Open to Work
            </motion.div>
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -top-2 -left-2 glass-card px-3 py-2 text-xs font-medium"
            >
              💻 Full Stack Dev
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted-foreground" />
      </motion.div>
    </section>
  );
}
