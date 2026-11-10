import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          © 2024 Pavani Mada. Built with ❤️
        </p>
        <div className="flex items-center gap-4">
          <a href="mailto:pavanimada@email.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
          <a href="https://linkedin.com/in/pavanimada" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/pavanimada" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
