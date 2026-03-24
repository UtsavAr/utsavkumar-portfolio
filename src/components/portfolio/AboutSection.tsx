import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Award } from "lucide-react";

const highlights = [
  { icon: Code2, title: "5+ Projects", desc: "Built with modern web technologies" },
  { icon: Award, title: "Deep Learning – IIT Ropar", desc: "Certified in Oct 2025" },
  { icon: Award, title: "Web Dev with AI – Internshala", desc: "Certified in Jul 2025" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// About Me"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Building the <span className="text-gradient">future</span>, one line at a time
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a pre-final year B.Tech student passionate about building efficient, 
              scalable web applications. With a strong foundation in data structures, 
              algorithms, and modern web technologies, I'm ready to contribute to 
              innovative teams.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring open-source projects, 
              participating in hackathons, or writing technical blog posts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid gap-4"
          >
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="glass-card p-6 flex items-center gap-5 hover:glow-border transition-all"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
