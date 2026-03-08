import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React (Basic)"],
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "MySQL", "REST APIs"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "Power BI", "VS Code"],
  },
  {
    title: "Concepts",
    skills: ["Data Structures", "Problem Solving", "Software Development", "ML Basics"],
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
            >
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
