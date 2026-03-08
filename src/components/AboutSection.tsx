import { motion } from "framer-motion";
import { Code2, Brain, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Developer", desc: "Building full-stack web applications and exploring modern frameworks" },
  { icon: Brain, title: "Problem Solver", desc: "Data structures, algorithms, and analytical thinking" },
  { icon: Lightbulb, title: "Lifelong Learner", desc: "Constantly exploring AI, ML, and emerging technologies" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <motion.p
          className="text-muted-foreground leading-relaxed max-w-3xl mb-12 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I am a motivated B.Tech student with a deep interest in software development, web technologies, and emerging fields like artificial intelligence and machine learning. My curiosity drives me to explore new tools, frameworks, and methodologies. I thrive on solving complex problems, whether it's optimizing a backend system, designing intuitive user interfaces, or analyzing data for meaningful insights. I believe in continuous learning and am committed to growing as a well-rounded software developer.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <h.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{h.title}</h3>
              <p className="text-muted-foreground text-sm">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
