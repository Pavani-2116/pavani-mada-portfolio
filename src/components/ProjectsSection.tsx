import { motion } from "framer-motion";
import { Github, Gamepad2, Languages, FileText, Brain, Recycle, BarChart3 } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Sales Dashboard Analysis",
    desc: "Built an interactive dashboard to analyze sales performance and trends using Power BI and Excel. Visualized KPIs, regional performance, and temporal trends for data-driven decision making.",
    tech: ["Power BI", "Excel", "Data Analysis"],
    github: "#",
  },
  {
    icon: Gamepad2,
    title: "Tic Tac Toe Game",
    desc: "Developed an interactive Tic Tac Toe game with a user-friendly interface where players can play against each other. The project demonstrates basic game logic, UI design, and event handling.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/pavani-mada/tic-tac-toe",
  },
  {
    icon: Languages,
    title: "Multilingual Sentiment Analyzer",
    desc: "Built a machine learning based sentiment analysis system capable of analyzing text in multiple languages and determining whether the sentiment is positive, negative, or neutral.",
    tech: ["Python", "Machine Learning", "NLP"],
    github: "#",
  },
  {
    icon: FileText,
    title: "Resume Builder and Score Checker",
    desc: "Developed a web application that helps users create professional resumes and analyze resume quality using scoring logic to improve job readiness.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "#",
  },
  {
    icon: Brain,
    title: "SkillPath AI",
    desc: "Designed an AI-powered platform that helps users identify skills they need to learn based on their career goals and provides personalized learning recommendations.",
    tech: ["Python", "Machine Learning", "Web Development"],
    github: "#",
  },
  {
    icon: Recycle,
    title: "Smart Recycling Waste Classifier",
    desc: "Built an AI model that classifies waste materials such as plastic, paper, and metal to help improve recycling efficiency and promote environmental sustainability.",
    tech: ["Python", "Machine Learning", "Computer Vision"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="glass-card p-6 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <p.icon size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-xs font-mono rounded bg-accent text-accent-foreground border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1 w-fit"
              >
                <Github size={14} /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
