import { motion } from "framer-motion";
import { Code2, Wrench, BookOpen, Users } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Technical Skills",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code", "Power BI", "Excel"],
  },
  {
    icon: BookOpen,
    title: "Concepts",
    skills: ["Data Structures", "Web Development", "Software Development", "ML Basics"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Problem Solving", "Team Collaboration", "Time Management", "Adaptability", "Critical Thinking"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <cat.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-mono text-sm font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-accent text-accent-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
