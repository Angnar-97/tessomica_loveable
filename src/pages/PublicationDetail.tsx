import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getPublicationBySlug } from "@/lib/publications";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PublicationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const pub = slug ? getPublicationBySlug(slug) : undefined;

  if (!pub) return <Navigate to="/publicaciones" replace />;

  // Simple markdown-like renderer for ## headings, **bold**, lists, paragraphs
  const renderContent = (text: string) => {
    return text.split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
            {trimmed.replace("## ", "")}
          </h2>
        );
      }

      // List block
      if (trimmed.startsWith("- ")) {
        const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="space-y-1.5 mb-4">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                <span dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^- /, "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }} />
              </li>
            ))}
          </ul>
        );
      }

      // Numbered list
      if (/^\d+\.\s/.test(trimmed)) {
        const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
        return (
          <ol key={i} className="space-y-2 mb-4 list-none">
            {items.map((item, j) => (
              <li key={j} className="text-sm text-foreground/80 flex gap-2">
                <span className="text-primary font-mono shrink-0">{j + 1}.</span>
                <span dangerouslySetInnerHTML={{
                  __html: item
                    .replace(/^\d+\.\s*/, "")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }} />
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={i} className="text-sm text-foreground/80 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: trimmed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      );
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-16 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/publicaciones"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            ← Volver a Publicaciones
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {pub.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-sm text-muted-foreground font-mono">
                {new Date(pub.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <a
                href={pub.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline font-mono"
              >
                Ver en GitHub →
              </a>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-card/40 border border-border/50 rounded-lg p-6 md:p-8">
              <p className="text-foreground/90 leading-relaxed mb-6">{pub.summary}</p>
              <hr className="border-border/50 mb-6" />
              {renderContent(pub.content)}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PublicationDetail;
