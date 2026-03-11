import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { StaggerContainer, staggerItem } from "@/lib/motion";

const categories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "TypeScript", "C", "SQL"],
  },
  {
    title: "Full Stack Development",
    skills: ["React", "Node.js", "Express.js", "HTML/CSS", "Tailwind CSS", "REST APIs"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "FastAPI", "Flask", "Spring Boot"],
  },
  {
    title: "AI / ML / Deep Learning",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-Learn", "GNNs", "NLP"],
  },
  {
    title: "Computer Vision / OpenCV",
    skills: ["OpenCV", "YOLOv8", "Image Processing", "Object Detection"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Linux"],
  },
  {
    title: "Core CS Fundamentals",
    skills: ["DSA", "DBMS", "OS", "Computer Networks", "Software Engineering"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="A versatile toolkit spanning full-stack development, AI/ML, and core computer science."
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="glass-card p-6 group"
            >
              <h3 className="font-display font-semibold text-sm text-primary mb-4 uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
