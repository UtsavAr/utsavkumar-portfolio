import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "Java", "C++", "C"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "React"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Linux", "Maven", "GitHub"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Skills"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            My <span className="text-gradient">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.15, duration: 0.5 }}
              className="glass-card p-8 hover:glow-border transition-all group min-h-[180px]"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
