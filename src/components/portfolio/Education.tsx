import { motion } from "framer-motion";
import { GraduationCap, School } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Reveal } from "@/lib/motion";

const education = [
  {
    school: "Indian Institute of Information Technology, Sri City",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2022 – 2026",
    icon: GraduationCap,
    coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering"],
    highlight: true,
  },
  {
    school: "Sri Chaitanya PU College",
    degree: "Secondary / Intermediate Education",
    period: "2020 – 2022",
    icon: School,
  },
  {
    school: "New Cambridge English School",
    degree: "Schooling",
    period: "2013 – 2020",
    icon: School,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My academic journey shaping a strong foundation in Computer Science and Engineering."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <Reveal key={edu.school} delay={i * 0.15}>
                <div className="relative pl-16 md:pl-20">
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`absolute left-3.5 md:left-5.5 w-5 h-5 rounded-full border-2 ${
                      edu.highlight
                        ? "border-primary bg-primary/20 shadow-lg shadow-primary/30"
                        : "border-muted-foreground/30 bg-card"
                    }`}
                  />

                  <div className={`glass-card p-6 ${edu.highlight ? "ring-1 ring-primary/20" : ""}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <edu.icon size={18} className="text-primary" />
                      <span className="text-xs font-mono-code text-muted-foreground">{edu.period}</span>
                    </div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">{edu.school}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{edu.degree}</p>
                    {edu.coursework && (
                      <div className="flex flex-wrap gap-1.5">
                        {edu.coursework.map((c) => (
                          <span key={c} className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-primary/10 text-primary">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
