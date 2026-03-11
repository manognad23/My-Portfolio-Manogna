import { Award } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { StaggerContainer, staggerItem } from "@/lib/motion";

const certs = [
  { title: "Google Generative AI Study Jam", org: "Google" },
  { title: "IIT Madras AI/ML Research Conference", org: "IIT Madras" },
  { title: "Accenture SQL Certification", org: "Accenture" },
  { title: "Deloitte Technology Virtual Experience", org: "Deloitte" },
];

const leadership = [
  { title: "Project Lead", desc: "Led cross-functional teams in building production-ready applications." },
  { title: "Open Source Contributor", desc: "Active contributor to open-source projects and developer communities." },
  { title: "Technical Event Coordinator", desc: "Organized and coordinated technical events and workshops." },
];

export default function Certifications() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certifications & Leadership"
          subtitle="Professional certifications and leadership roles that reflect continuous growth."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-6 flex items-center gap-2">
              <Award size={20} className="text-primary" /> Certifications
            </h3>
            <StaggerContainer className="space-y-3">
              {certs.map((c) => (
                <motion.div
                  key={c.title}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  className="glass-card p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{c.title}</div>
                    <div className="text-xs text-muted-foreground">{c.org}</div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-6">
              🏆 Leadership & Activities
            </h3>
            <StaggerContainer className="space-y-3">
              {leadership.map((l) => (
                <motion.div
                  key={l.title}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                  className="glass-card p-4"
                >
                  <div className="font-medium text-sm text-foreground mb-1">{l.title}</div>
                  <div className="text-xs text-muted-foreground">{l.desc}</div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
