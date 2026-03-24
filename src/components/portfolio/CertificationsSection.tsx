import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Deep Learning",
    issuer: "IIT Ropar",
    date: "Oct 2025",
    description:
      "Comprehensive course covering neural networks, CNNs, RNNs, and modern deep learning architectures with hands-on implementation in Python.",
    link: "https://drive.google.com/file/d/1JyFn-SgQocmbx4se2_1B2IxkVEwq10zq/view?usp=drive_link",
  },
  {
    title: "Web Development with AI",
    issuer: "Internshala",
    date: "Jul 2025",
    description:
      "Industry-oriented training on building modern web applications leveraging AI tools, covering front-end, back-end, and deployment workflows.",
    link: "https://drive.google.com/file/d/1WR7SSW-jezZJreWiIO-I002Q_h7ncOQQ/view?usp=drive_link",
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">{"// Certifications"}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-8 hover:glow-border transition-all flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mt-1">
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {cert.description}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline w-fit"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
