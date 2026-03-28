import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Sequencing & Analysis",
    skills: ["16S/ITS Amplicon", "RNA-seq", "Whole Genome Sequencing", "Shotgun Metagenomics", "ChIP-seq", "Variant Calling"],
  },
  {
    title: "Bioinformatics Tools",
    skills: ["QIIME2", "MetaSPAdes", "HISAT2/STAR", "DESeq2/edgeR", "PROKKA", "HUMAnN3", "Trimmomatic", "FastQC"],
  },
  {
    title: "Programming & Data",
    skills: ["R / Bioconductor", "Python / Biopython", "Bash Scripting", "Snakemake / Nextflow", "ggplot2", "Pandas / NumPy"],
  },
  {
    title: "Ecology & Applications",
    skills: ["Microbiome Ecology", "Phytoremediation", "Soil Science", "Crop Genomics", "Phylogenetics", "Statistical Modeling"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 uppercase">Toolkit</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-6 rounded-sm border border-border border-glow"
            >
              <h3 className="font-mono text-sm font-medium text-primary mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
