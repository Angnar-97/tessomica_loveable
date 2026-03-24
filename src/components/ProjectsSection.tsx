import { motion } from "framer-motion";
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
    image: projectMicrobiome,
  },
  {
    title: "Differential Gene Expression in Stress-Tolerant Crops",
    description:
      "Conducted RNA-seq analysis on crop varieties grown in heavy-metal contaminated soils. Identified differentially expressed genes involved in metal chelation and stress response pathways, contributing to marker-assisted breeding programs.",
    tags: ["RNA-seq", "DESeq2", "GO Enrichment", "KEGG Pathways", "R/Bioconductor"],
    image: projectRnaseq,
  },
  {
    title: "Metagenomic Assembly & Functional Annotation",
    description:
      "Performed shotgun metagenomics on rhizosphere samples to reconstruct microbial genomes (MAGs). Annotated metabolic pathways for nutrient cycling, revealing synergistic plant-microbe interactions that enhance phosphorus solubilization in depleted soils.",
    tags: ["Shotgun Metagenomics", "MetaSPAdes", "PROKKA", "MAGs", "HUMAnN3"],
    image: projectAlignment,
  },
  {
    title: "Phylogenomic Analysis of Phytoremediation Species",
    description:
      "Built comprehensive phylogenetic trees from whole-genome sequences of hyperaccumulator plant species. Mapped evolutionary relationships and identified conserved genomic regions linked to heavy metal tolerance, guiding species selection for revegetation.",
    tags: ["WGS", "BLAST", "MAFFT", "RAxML", "Comparative Genomics"],
    image: projectMining,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-4 uppercase">Research Projects</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            From Sequences to <span className="gradient-text">Solutions</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, i) => (
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
                <div className="overflow-hidden rounded-sm border border-border border-glow">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-sm border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
