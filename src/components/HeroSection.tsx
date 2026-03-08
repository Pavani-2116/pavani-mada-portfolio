import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-wider">Hello, I'm</p>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="gradient-text">Pavani Mada</span>
        </motion.h1>

        <motion.p
          className="font-mono text-muted-foreground text-sm sm:text-base mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          B.Tech Student • Software Developer • Technology Enthusiast
        </motion.p>

        <motion.p
          className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10 text-sm sm:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          I am a passionate B.Tech student who enjoys building technology-driven solutions and exploring different areas of software development including web development, backend systems, and artificial intelligence. I love learning new tools, solving real-world problems, and continuously improving my technical skills.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="#projects"
            className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <ArrowDown size={16} /> View Projects
          </a>
          <a
            href="#"
            className="border border-border bg-card px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:bg-accent transition-colors"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="border border-primary/30 bg-accent px-6 py-3 rounded-lg font-semibold text-sm text-accent-foreground flex items-center gap-2 hover:bg-primary/10 transition-colors"
          >
            <Mail size={16} /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
