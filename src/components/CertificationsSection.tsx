import { motion } from "framer-motion";
import { Award, BadgeCheck, ShieldCheck, GraduationCap, Code, FileCode, Laptop, Database } from "lucide-react";

const certifications = [
  {
    icon: ShieldCheck,
    title: "Deloitte Virtual Internship",
    issuer: "Deloitte",
    desc: "Completed a technology consulting virtual internship program by Deloitte.",
  },
  {
    icon: GraduationCap,
    title: "EduSkills AI/ML Certification",
    issuer: "EduSkills",
    desc: "Successfully completed a 3-month industry internship program focused on AI and Machine Learning.",
  },
  {
    icon: BadgeCheck,
    title: "APSSDC AI & ML Training",
    issuer: "AP State Skill Development Corporation",
    desc: "Completed a 6-week training program on Artificial Intelligence and Machine Learning fundamentals.",
  },
  {
    icon: Award,
    title: "Foundation of Modern Machine Learning",
    issuer: "FMML Program",
    desc: "Participated in a structured learning program focused on modern machine learning concepts and applications.",
  },
  {
    icon: Code,
    title: "HTML & CSS Certification",
    issuer: "Udemy",
    desc: "Completed a course on HTML and CSS covering the fundamentals of web development including webpage structure, styling, responsive layouts, and modern UI design.",
  },
  {
    icon: FileCode,
    title: "Python Programming Certification",
    issuer: "Edyst",
    desc: "Learned Python programming fundamentals including data types, control structures, functions, and problem solving using Python.",
  },
  {
    icon: Laptop,
    title: "Python Programming Certification",
    issuer: "Infosys Springboard",
    desc: "Completed training on Python programming covering basic syntax, programming concepts, and real-world problem solving.",
  },
  {
    icon: Database,
    title: "SQL Certification",
    issuer: "Simplilearn",
    desc: "Completed a certification course on SQL covering database fundamentals, queries, joins, subqueries, and data manipulation techniques.",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <c.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-xs text-primary font-medium mb-2">{c.issuer}</p>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
