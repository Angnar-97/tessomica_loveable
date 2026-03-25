export interface Publication {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  repoUrl: string;
  content: string; // markdown-style content rendered as JSX
}

export const publications: Publication[] = [
  {
    slug: "metagenomic-diversity-pipeline",
    title: "Pipeline de Análisis de Diversidad Metagenómica con 16S rRNA",
    summary:
      "Pipeline automatizado en R y Python para el análisis de diversidad alfa y beta de comunidades microbianas a partir de datos de amplicones 16S, integrando Phyloseq y QIIME2.",
    date: "2025-03-10",
    tags: ["Metagenómica", "R", "Python", "Phyloseq", "QIIME2", "NGS"],
    repoUrl: "https://github.com/Angnar-97",
    content: `## Descripción

Este proyecto implementa un pipeline completo para el análisis de diversidad microbiana a partir de datos de secuenciación de amplicones 16S rRNA. El objetivo es facilitar el procesamiento reproducible de datos metagenómicos desde los archivos FASTQ crudos hasta la visualización de resultados.

## Metodología

1. **Preprocesamiento**: Filtrado de calidad y eliminación de quimeras con DADA2.
2. **Asignación taxonómica**: Clasificación contra la base de datos SILVA v138.
3. **Análisis de diversidad alfa**: Índices de Shannon, Simpson y Chao1 por grupo experimental.
4. **Análisis de diversidad beta**: PCoA basado en distancias UniFrac ponderadas y no ponderadas.
5. **Visualización**: Gráficos de abundancia relativa, heatmaps y diagramas de ordenación.

## Resultados destacados

- Identificación de diferencias significativas en la composición microbiana entre grupos tratados y control (PERMANOVA, p < 0.01).
- Reducción del tiempo de análisis en un 60% gracias a la automatización del pipeline.
- Generación de reportes reproducibles en formato HTML con RMarkdown.

## Stack tecnológico

- **R**: Phyloseq, vegan, ggplot2, dplyr
- **Python**: QIIME2 CLI, pandas, matplotlib
- **Infraestructura**: Snakemake para orquestación de tareas`,
  },
];

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}
