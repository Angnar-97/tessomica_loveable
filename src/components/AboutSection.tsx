import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 uppercase">About Me</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Where Biology Meets
              <br />
              <span className="gradient-text">Computation</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a bioinformatics researcher specializing in the intersection of genomics and 
                environmental science. My work focuses on understanding complex biological systems 
                through the lens of high-throughput sequencing data — from soil microbiome communities 
                to plant transcriptomes.
              </p>
              <p>
                By applying computational approaches like RNA-seq differential expression analysis, 
                metagenomic profiling, and phylogenetic reconstruction, I develop data-driven solutions 
                for mining site remediation and crop improvement programs.
              </p>
              <p>
                My passion lies in translating raw sequencing data into actionable ecological 
                insights that bridge the gap between molecular biology and real-world environmental 
                challenges.
              </p>
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "16S/ITS", label: "Amplicon Sequencing" },
              { value: "RNA-seq", label: "Transcriptomics" },
              { value: "WGS", label: "Whole Genome Sequencing" },
              { value: "Meta", label: "Metagenomics" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-6 rounded-sm border-glow border border-border"
              >
                <p className="font-mono text-2xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
