import { Code2, Database, Brain, Layers } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Reveal, StaggerContainer, staggerItem } from "@/lib/motion";

const stats = [
  { label: "Projects Built", value: "15+", icon: Layers },
  { label: "Technologies", value: "20+", icon: Code2 },
  { label: "GitHub Repos", value: "14+", icon: Database },
  { label: "Problem Solving", value: "DSA", icon: Brain },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="A passionate Computer Science undergraduate driven by curiosity and a desire to build impactful technology."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-medium">Manogna Shree Dasari</span>, an AI-focused
                Computer Science undergraduate at the{" "}
                <span className="text-foreground font-medium">Indian Institute of Information Technology, Sri City</span>,
                graduating in 2026.
              </p>
              <p>
                My expertise spans full-stack development, backend systems, REST APIs, and databases,
                complemented by deep interests in machine learning, deep learning, graph neural networks,
                and computer vision. I thrive on solving complex problems and translating them into clean,
                production-ready software.
              </p>
              <p>
                With proficiency in Python, JavaScript, Java, TypeScript, React, Node.js, and multiple
                database systems, I bring a well-rounded technical toolkit to every project.
                I'm passionate about building intelligent, scalable applications that make a real-world impact.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-6 text-center group cursor-default"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
