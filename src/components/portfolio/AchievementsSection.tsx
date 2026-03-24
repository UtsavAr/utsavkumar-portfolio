import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";

const achievements = [
  "5+ Projects Completed",
  "DSA Training — Lovely Professional University",
  "Deep Learning Certification — IIT Ropar",
  "Web Development with AI — Internshala",
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Achievements"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="glass-card p-10 hover:glow-border transition-all max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <Award size={22} className="text-primary" />
            <h3 className="font-semibold text-foreground text-lg">Key Achievements</h3>
          </div>
          <ul className="space-y-4">
            {achievements.map((a) => (
              <li key={a} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
