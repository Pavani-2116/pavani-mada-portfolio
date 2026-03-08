import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Deloitte Virtual Internship",
    desc: "Gained hands-on experience with technology consulting practices, data analytics workflows, and professional problem-solving methodologies used in enterprise environments.",
  },
  {
    title: "EduSkills Internship (3 Months)",
    desc: "Developed practical skills in software development and industry tools through structured learning modules, real-world projects, and mentorship from experienced professionals.",
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
