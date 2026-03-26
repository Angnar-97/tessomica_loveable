export interface Publication {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  repoUrl: string;
  content: string;
}

export const publications: Publication[] = [
  {
    slug: "metagenomic-diversity-pipeline",
    title: "Metagenomic Diversity Analysis Pipeline with 16S rRNA",
    summary:
      "Automated pipeline in R and Python for alpha and beta diversity analysis of microbial communities from 16S amplicon data, integrating Phyloseq and QIIME2.",
    date: "2025-03-10",
    tags: ["Metagenomics", "R", "Python", "Phyloseq", "QIIME2", "NGS"],
    repoUrl: "https://github.com/Angnar-97",
    content: `## Description

This project implements a complete pipeline for microbial diversity analysis from 16S rRNA amplicon sequencing data. The goal is to enable reproducible processing of metagenomic data from raw FASTQ files through to result visualization.

## Methodology

1. **Preprocessing**: Quality filtering and chimera removal with DADA2.
2. **Taxonomic assignment**: Classification against the SILVA v138 database.
3. **Alpha diversity analysis**: Shannon, Simpson, and Chao1 indices by experimental group.
4. **Beta diversity analysis**: PCoA based on weighted and unweighted UniFrac distances.
5. **Visualization**: Relative abundance plots, heatmaps, and ordination diagrams.

## Key Results

- Identified significant differences in microbial composition between treated and control groups (PERMANOVA, p < 0.01).
- Reduced analysis time by 60% through pipeline automation.
- Generated reproducible reports in HTML format with RMarkdown.

## Tech Stack

- **R**: Phyloseq, vegan, ggplot2, dplyr
- **Python**: QIIME2 CLI, pandas, matplotlib
- **Infrastructure**: Snakemake for task orchestration`,
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}
