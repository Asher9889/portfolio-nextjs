import { Check } from "lucide-react";
import { techStack, enterprisePractices } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn } from "../animations";

export default function TechSection() {
  return (
    <section className="py-20 md:py-28 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <FadeIn>
            <SectionLabel>Built With</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-inter font-bold tracking-tight text-w-text mb-6">
              Modern tools for real-world systems.
            </h2>
            <div className="space-y-5">
              {techStack.map((cat) => (
                <div key={cat.category}>
                  <span className="text-[10px] font-inter font-medium text-w-muted/60 uppercase tracking-wider block mb-2">{cat.category}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map((t) => (
                      <span key={t} className="text-[11px] font-inter text-w-muted bg-w-bg px-2.5 py-1 border border-w-border" style={{ borderRadius: "4px" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <SectionLabel>Enterprise Practices</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-inter font-bold tracking-tight text-w-text mb-6">
              Production-grade from day one.
            </h2>
            <ul className="space-y-3">
              {enterprisePractices.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-w-muted">
                  <span className="w-5 h-5 flex items-center justify-center border border-w-blue/30 bg-w-blue/3" style={{ borderRadius: "4px" }}>
                    <Check size={10} className="text-w-blue/60" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
