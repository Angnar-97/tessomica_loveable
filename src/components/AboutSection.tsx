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
              Alejandro Navas
              <br />
              <span className="gradient-text">González</span>
            </h2>
            <p className="font-mono text-sm text-primary mb-6">
              Data Scientist & Bioinformatician
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Bioinformatician & Data Scientist combining advanced analytical techniques with 
                deep life sciences and agriculture domain knowledge. With over three years of 
                experience, I bridge the gap between computational approaches and biological 
                understanding.
              </p>
              <p>
                My bioinformatics background at HelixBioS focused on microbiome analysis — developing 
                regression models and network analyses from Rhizosphere rRNA 16S samples using tools 
                like phyloseq, igraph, and vegan. I specialize in RNA-seq, metagenomic profiling, 
                whole genome sequencing, and phylogenetic reconstruction.
              </p>
              <p>
                With a Biotechnology degree from Universidad Politécnica de Madrid, a Master's in 
                Bioinformatics & Biostatistics (UOC), and a Master's in Big Data & Business Analytics 
                (UCM), I translate raw sequencing data into actionable ecological insights for 
                mining remediation and crop improvement.
              </p>
            </div>
          </div>

          {/* Education & Highlights */}
          <div className="space-y-4">
            {[
              { value: "Biotechnology", label: "UPM · Degree · 8.03 avg" },
              { value: "Bioinformatics", label: "UOC · Master's · 8.32 avg" },
              { value: "Big Data", label: "UCM · Master's · 9.15 avg" },
              { value: "HelixBioS", label: "Microbiome Research · 16S rRNA" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-5 rounded-sm border-glow border border-border flex items-center gap-4"
              >
                <p className="font-mono text-lg font-bold text-primary min-w-[130px]">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
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
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="bg-card p-5 rounded-sm border-glow border border-border text-center"
                >
                  <p className="font-mono text-lg font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
