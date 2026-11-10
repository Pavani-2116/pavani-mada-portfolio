import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Deloitte Virtual Internship – Data Analyst",
    duration: "Virtual Internship",
    desc: "Completed a technology consulting virtual internship program by Deloitte, working on data analysis tasks and gaining hands-on experience with real-world business data and analytics workflows.",
  },
  {
    title: "Foundation of Modern Machine Learning (FMML)",
    duration: "August – May",
    desc: "Participated in a structured learning program focused on modern machine learning concepts and practical applications.",
  },
  {
    title: "APSSDC Internship",
    duration: "6 Weeks • AI & Machine Learning",
    desc: "Completed a training program by Andhra Pradesh State Skill Development Corporation focused on AI and ML fundamentals, learning concepts such as machine learning algorithms and data analysis techniques.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <div className="space-y-6 max-w-2xl">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              className="glass-card p-6 flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <Briefcase size={18} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{exp.title}</h3>
                <p className="font-mono text-xs text-primary mb-2">{exp.duration}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
