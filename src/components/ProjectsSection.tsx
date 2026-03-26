import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectMicrobiome from "@/assets/project-microbiome.jpg";
import projectRnaseq from "@/assets/project-rnaseq.jpg";
import projectAlignment from "@/assets/project-alignment.jpg";
import projectMining from "@/assets/project-mining.jpg";

const projects = [
  {
    title: "Soil Microbiome Profiling for Mine Remediation",
    description:
      "Characterized microbial diversity across degraded mining sites using 16S rRNA and ITS amplicon sequencing. Identified key bacterial and fungal taxa associated with natural revegetation, informing bioremediation strategies with tailored microbial inoculants.",
    tags: ["16S rRNA", "ITS", "QIIME2", "Diversity Analysis", "Bioremediation"],
    category: "Metagenomics",
    image: projectMicrobiome,
  },
  {
    title: "Differential Gene Expression in Stress-Tolerant Crops",
    description:
      "Conducted RNA-seq analysis on crop varieties grown in heavy-metal contaminated soils. Identified differentially expressed genes involved in metal chelation and stress response pathways, contributing to marker-assisted breeding programs.",
    tags: ["RNA-seq", "DESeq2", "GO Enrichment", "KEGG Pathways", "R/Bioconductor"],
    category: "Transcriptomics",
    image: projectRnaseq,
  },
  {
    title: "Metagenomic Assembly & Functional Annotation",
    description:
      "Performed shotgun metagenomics on rhizosphere samples to reconstruct microbial genomes (MAGs). Annotated metabolic pathways for nutrient cycling, revealing synergistic plant-microbe interactions that enhance phosphorus solubilization in depleted soils.",
    tags: ["Shotgun Metagenomics", "MetaSPAdes", "PROKKA", "MAGs", "HUMAnN3"],
    category: "Metagenomics",
    image: projectAlignment,
  },
  {
    title: "Phylogenomic Analysis of Phytoremediation Species",
    description:
      "Built comprehensive phylogenetic trees from whole-genome sequences of hyperaccumulator plant species. Mapped evolutionary relationships and identified conserved genomic regions linked to heavy metal tolerance, guiding species selection for revegetation.",
    tags: ["WGS", "BLAST", "MAFFT", "RAxML", "Comparative Genomics"],
    category: "Genomics",
    image: projectMining,
  },
];

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 uppercase">Research Projects</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
            From Sequences to <span className="gradient-text">Solutions</span>
          </h2>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 text-xs font-mono rounded-sm border transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-20"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="overflow-hidden rounded-sm border border-border border-glow group cursor-pointer">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-mono text-accent bg-accent/10 rounded-sm mb-3 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-sm border border-border hover:border-primary/40 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
