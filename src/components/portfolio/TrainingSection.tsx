import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink, CheckCircle } from "lucide-react";

const concepts = [
  "Arrays, Strings & Hashing",
  "Linked Lists & Stacks/Queues",
  "Trees, Graphs & BFS/DFS",
  "Dynamic Programming",
  "Sorting & Searching Algorithms",
  "Recursion & Backtracking",
];

const TrainingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Training & Learning"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Training & <span className="text-gradient">Learning</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="glass-card p-10 hover:glow-border transition-all max-w-4xl"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary mt-1">
              <BookOpen size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-xl">
                Data Structures & Algorithms (DSA)
              </h3>
              <p className="text-sm text-muted-foreground">
                Lovely Professional University, Jalandhar (Punjab)
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Completed an in-depth training on Data Structures and Algorithms covering core
            computer science concepts. Applied the learnings to build real-world projects,
            including an Online Leaderboard Tracker that demonstrates sorting, searching,
            and dynamic data management.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {concepts.map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle size={14} className="text-primary shrink-0" />
                {c}
              </div>
            ))}
          </div>

          <a
            href="https://drive.google.com/file/d/1Oc9qTde4x91mT2hlldR8O8b5Sw1aYI5K/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            View Certificate <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
