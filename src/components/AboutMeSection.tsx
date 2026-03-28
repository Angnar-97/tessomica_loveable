import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 uppercase">About Me</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Alejandro Navas
            <br />
            <span className="gradient-text">González</span>
          </h2>
          <p className="font-mono text-sm text-primary mb-10">
            Data Scientist & Bioinformatician
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bioinformatician & Data Scientist combining advanced analytical techniques with 
                deep life sciences and agriculture domain knowledge. With over three years of 
                experience, I bridge the gap between computational approaches and biological 
                understanding.
              </p>
              <p>
                I specialize in microbiome analysis, RNA-seq, metagenomic profiling, whole genome 
                sequencing, and phylogenetic reconstruction — using tools like phyloseq, igraph, 
                and vegan to develop regression models and network analyses from Rhizosphere 
                rRNA 16S samples.
              </p>
              <p>
                My goal is to translate raw sequencing data into actionable ecological insights 
                for mining remediation and crop improvement.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { value: "Biotechnology", label: "Universidad Politécnica de Madrid" },
                { value: "Bioinformatics", label: "Open University of Catalonia" },
                { value: "Big Data", label: "Universidad Complutense de Madrid" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card p-4 sm:p-5 rounded-sm border-glow border border-border flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                >
                  <p className="font-mono text-base sm:text-lg font-bold text-primary sm:min-w-[130px]">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}

              <div className="grid grid-cols-2 gap-4 pt-2">
                {[
                  { value: "R & Python", label: "Core Languages" },
                  { value: "ES · EN · DE · JP", label: "Languages" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="bg-card p-5 rounded-sm border-glow border border-border text-center"
                  >
                    <p className="font-mono text-lg font-bold text-primary mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
