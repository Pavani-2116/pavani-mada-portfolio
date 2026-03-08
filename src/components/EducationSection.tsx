import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Data Structures",
  "Database Management Systems",
  "Operating Systems",
  "Machine Learning Basics",
  "Software Engineering",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <motion.div
          className="glass-card p-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0">
              <GraduationCap size={24} className="text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Bachelor of Technology (B.Tech)</h3>
              <p className="font-mono text-sm text-primary mb-3">2022 – 2026</p>
              <p className="text-sm text-muted-foreground mb-4">Relevant Coursework:</p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 text-xs font-medium rounded-md bg-accent text-accent-foreground border border-border"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
