import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "B.Tech in Computer Science & Engineering",
    institution: "Lovely Professional University, Jalandhar (Punjab)",
    period: "2023 – 2027",
    detail: "CGPA: 6.36 / 10",
  },
  {
    title: "Higher Secondary (XII) — CBSE",
    institution: "Bijendra Public School, Purnia (Bihar)",
    period: "2021 – 2022",
    detail: "Percentage: 67.2%",
  },
  {
    title: "Secondary (X) — CBSE",
    institution: "Bijendra Public School, Purnia (Bihar)",
    period: "2019 – 2020",
    detail: "Percentage: 73.8%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Education"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-8 hover:glow-border transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{edu.title}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                  <p className="text-sm text-primary font-medium mt-2">{edu.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
