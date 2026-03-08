import { motion } from "framer-motion";
import { Award, BookOpen, Trophy } from "lucide-react";

const achievements = [
  { icon: Award, title: "Deloitte Virtual Internship", desc: "Completed a technology consulting virtual internship program by Deloitte" },
  { icon: BookOpen, title: "EduSkills Certification", desc: "Successfully completed a 3-month industry internship program with EduSkills" },
  { icon: Trophy, title: "Continuous Technical Learning", desc: "Actively learning machine learning, data analytics, and full-stack development through projects and certifications" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              className="glass-card p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <a.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
