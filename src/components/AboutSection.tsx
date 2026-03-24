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
                I'm Alejandro Navas González, a Bioinformatician and Data Scientist based in Madrid, Spain. 
                With a background in Biotechnology from Universidad Politécnica de Madrid, a Master's in 
                Bioinformatics & Biostatistics, and a Master's in Big Data & Business Analytics, I bridge 
                the gap between life sciences and advanced data analysis.
              </p>
              <p>
                My bioinformatics experience at HelixBioS focused on microbiome analysis — developing 
                network models and regression analyses using rhizosphere 16S rRNA samples to understand 
                ecological interactions within microbial communities. I leverage tools like phyloseq, 
                igraph, and vegan for comprehensive systems biology research.
              </p>
              <p>
                As a Data Scientist, I've applied machine learning, statistical modeling, and big data 
                technologies (PySpark, Apache Hive) across industries. My passion lies in translating 
                complex biological and environmental data into actionable insights for agriculture 
                and sustainability.
              </p>
            </div>
          </div>

          {/* Stats / Highlights */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "MSc ×2", label: "Bioinformatics & Big Data" },
              { value: "16S rRNA", label: "Microbiome Analysis" },
              { value: "R & Python", label: "Full Stack Data Science" },
              { value: "3.5+ yrs", label: "Professional Experience" },
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
