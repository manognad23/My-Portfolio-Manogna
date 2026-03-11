import { Github, Linkedin, ExternalLink, Heart } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display font-bold text-lg gradient-text mb-1">
              Manogna Shree Dasari
            </h3>
            <p className="text-xs text-muted-foreground">
              Software Developer · AI/ML Engineer · Building the future, one line at a time.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/manogna-shree-dasari/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/ManognaShreeDasari" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://leetcode.com/u/ManognaShree/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
            © {new Date().getFullYear()} Manogna Shree Dasari. Crafted with <Heart size={12} className="text-primary" /> and code.
          </p>
        </div>
      </div>
    </footer>
  );
}
