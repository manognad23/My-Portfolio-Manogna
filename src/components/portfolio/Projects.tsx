import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { StaggerContainer, staggerItem } from "@/lib/motion";

type Category = "All" | "Full Stack" | "AI/ML" | "OpenCV" | "Other";

interface Project {
  title: string;
  description: string;
  category: Category;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Social Media Platform",
    description: "Full-stack social media application with user authentication, posts, comments, real-time interactions, and a modern responsive UI.",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Express", "REST API"],
    github: "https://github.com/ManognaShreeDasari/Social-Media-Platform-FullStack",
    featured: true,
  },
  {
    title: "Real Estate Web App",
    description: "Complete real estate platform with property listings, search filters, user dashboards, and seamless full-stack architecture.",
    category: "Full Stack",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ManognaShreeDasari/Real-Estate-Full-Stack-Web-App",
    featured: true,
  },
  {
    title: "Book Marketplace",
    description: "Full-stack marketplace for buying and selling books with user authentication, CRUD operations, and a clean responsive interface.",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ManognaShreeDasari/Full-Stack-Book-Marketplace-React-Node.js",
    featured: true,
  },
  {
    title: "Employee Management System",
    description: "Comprehensive CRUD-based employee management system with admin panel, search, filtering, and role-based access.",
    category: "Full Stack",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/ManognaShreeDasari/Employee-Management-System---Full-Stack-Project",
    featured: true,
  },
  {
    title: "AI Video Interview Bot MVP",
    description: "AI-powered video interview platform with real-time question generation, response analysis, and candidate assessment features.",
    category: "Full Stack",
    tech: ["React", "Node.js", "AI/ML", "REST API"],
    github: "https://github.com/ManognaShreeDasari/AI-Powered-Video-Interview-Bot-MVP",
    featured: true,
  },
  {
    title: "Semantic Chat Organizer",
    description: "Intelligent chat organization tool using semantic analysis to categorize and structure conversations automatically.",
    category: "Full Stack",
    tech: ["React", "Node.js", "NLP", "REST API"],
    github: "https://github.com/ManognaShreeDasari/semantic-chat-organizer",
    featured: true,
  },
  {
    title: "Binding Affinity Prediction (GNNs)",
    description: "Research project predicting molecular binding affinity using Graph Neural Networks by converting molecules and proteins into graph representations.",
    category: "AI/ML",
    tech: ["Python", "PyTorch", "GNNs", "RDKit"],
    github: "https://github.com/ManognaShreeDasari/Binding-Affinity-Prediction-using-GNNs-Convert-Molecule-Protein-into-the-graph",
  },
  {
    title: "Emotion Detection (Deep Learning)",
    description: "Deep learning pipeline for real-time emotion detection from facial expressions using CNNs and transfer learning techniques.",
    category: "AI/ML",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV"],
    github: "https://github.com/ManognaShreeDasari/Emotion-Detection-using-deep-learning-models",
  },
  {
    title: "Fraud Detection ML Analysis",
    description: "Machine learning solution for detecting fraudulent transactions using ensemble methods and feature engineering techniques.",
    category: "AI/ML",
    tech: ["Python", "Scikit-Learn", "Pandas", "XGBoost"],
    github: "https://github.com/ManognaShreeDasari/fraud-detection-ml-analysis",
  },
  {
    title: "Car Parking Detection",
    description: "Computer vision system for detecting available parking spaces in real-time using image processing and OpenCV.",
    category: "OpenCV",
    tech: ["Python", "OpenCV", "NumPy"],
    github: "https://github.com/ManognaShreeDasari/Car-Parking-Detection-OpenCV",
  },
  {
    title: "License Plate Detection (YOLOv8)",
    description: "Automated license plate recognition using YOLOv8 object detection with high accuracy and real-time processing capability.",
    category: "OpenCV",
    tech: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    github: "https://github.com/ManognaShreeDasari/License-Plate-Detection-YOLOv8",
  },
  {
    title: "Face Recognition (Raspberry Pi)",
    description: "Embedded face recognition system built on Raspberry Pi using OpenCV for real-time identification and access control applications.",
    category: "OpenCV",
    tech: ["Python", "OpenCV", "Raspberry Pi", "Deep Learning"],
    github: "https://github.com/ManognaShreeDasari/Face-Recognition-System-using-raspberrypi",
  },
  {
    title: "Asana Workspace Seed Generator",
    description: "Developer tool for generating seed data in Asana workspaces to streamline project setup and testing workflows.",
    category: "Other",
    tech: ["JavaScript", "Asana API", "Node.js"],
    github: "https://github.com/ManognaShreeDasari/asana-workspace-seed-data-generator",
  },
];

const filters: Category[] = ["All", "Full Stack", "AI/ML", "OpenCV", "Other"];

export default function Projects() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A curated collection of full-stack applications, AI/ML research, and computer vision systems."
        />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <AnimatePresence mode="popLayout">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -6 }}
                className={`glass-card p-6 flex flex-col group ${p.featured ? "ring-1 ring-primary/20" : ""}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-primary/10 text-primary">
                    {p.category}
                  </span>
                  <div className="flex gap-2">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={16} />
                    </a>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-secondary text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </AnimatePresence>
      </div>
    </section>
  );
}
