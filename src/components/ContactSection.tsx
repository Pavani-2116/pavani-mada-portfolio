import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "pavanimada@email.com", href: "mailto:pavanimada@email.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/pavanimada", href: "https://linkedin.com/in/pavanimada" },
  { icon: Github, label: "GitHub", value: "github.com/pavanimada", href: "https://github.com/pavanimada" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-16 h-1 gradient-bg rounded mb-4" />
          <p className="text-muted-foreground text-sm mb-10 max-w-lg">
            I'm always open to new opportunities, collaborations, and conversations about technology. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <c.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground">{c.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
