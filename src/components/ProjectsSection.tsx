import { motion } from "framer-motion";
import { ExternalLink, Github, BarChart3, GraduationCap, Database } from "lucide-react";

const projects = [
  {
    icon: BarChart3,
    title: "Sales Dashboard Analysis",
    desc: "Built an interactive dashboard to analyze sales performance and trends using Power BI and Excel. Visualized KPIs, regional performance, and temporal trends for data-driven decision making.",
    tech: ["Power BI", "Excel", "Data Analysis"],
  },
  {
    icon: GraduationCap,
    title: "Student Performance Analysis",
    desc: "Analyzed student data using Python to identify patterns between study habits and academic results. Applied data visualization and statistical techniques to derive actionable insights.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    icon: Database,
    title: "SQL Sales Data Analysis",
    desc: "Performed comprehensive sales data analysis using SQL queries to generate business insights, including revenue trends, top-performing products, and customer segmentation.",
    tech: ["SQL", "MySQL", "Data Analysis"],
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
              <div className="flex gap-3">
                <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                  <Github size={14} /> Code
                </a>
                <a href="#" className="text-sm text-primary hover:underline flex items-center gap-1">
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
