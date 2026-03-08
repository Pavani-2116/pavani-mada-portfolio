import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Bachelor of Technology (B.Tech)",
    institution: "Kakinada Institute of Engineering and Technology for Women",
    period: "2022 – 2026",
    details: ["Data Structures", "DBMS", "Operating Systems", "ML Basics", "Software Engineering"],
  },
  {
    icon: BookOpen,
    title: "Intermediate",
    institution: "Vidhya Vikas Junior College",
    period: "Percentage: 86.1%",
    details: [],
  },
  {
    icon: School,
    title: "SSC",
    institution: "ZPHHS High School",
    period: "Percentage: 91%",
    details: [],
  },
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

        <div className="relative max-w-2xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                className="relative pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 w-12 h-12 rounded-full gradient-bg flex items-center justify-center z-10">
                  <edu.icon size={20} className="text-primary-foreground" />
                </div>

                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold">{edu.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{edu.institution}</p>
                  {edu.period && (
                    <p className="font-mono text-xs text-primary mt-1">{edu.period}</p>
                  )}
                  {edu.details.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.details.map((d) => (
                        <span
                          key={d}
                          className="px-3 py-1.5 text-xs font-medium rounded-md bg-accent text-accent-foreground border border-border"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
