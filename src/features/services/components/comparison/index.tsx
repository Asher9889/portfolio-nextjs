import { Check } from "lucide-react";
import { comparisons } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn } from "../animations";

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-28 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-12 max-w-2xl">
          <SectionLabel>Why Choose Me</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            Not all development is the same.
            <br />
            <span className="text-w-blue">Here is what you actually get.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-0 border border-w-border overflow-hidden" style={{ borderRadius: "8px" }}>
          <div className="p-5 bg-w-bg border-r border-b border-w-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-rose-300" />
              <span className="text-xs font-inter font-bold text-w-muted uppercase tracking-wider">Typical Agency</span>
            </div>
          </div>
          <div className="p-5 bg-w-bg border-b border-w-border">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-w-blue" />
              <span className="text-xs font-inter font-bold text-w-text uppercase tracking-wider">This Is What I Do</span>
            </div>
          </div>

          {comparisons.map((item, i) => (
            <FadeIn key={item.label} delay={0.04 * i} className="contents">
              <div className={`p-4 border-r border-b border-w-border ${i % 2 === 0 ? "bg-w-bg" : "bg-w-smoke/50"}`}>
                <p className="text-xs font-inter text-w-muted line-through">{item.typical}</p>
              </div>
              <div className={`p-4 border-b border-w-border ${i % 2 === 0 ? "bg-w-bg" : "bg-w-smoke/50"}`}>
                <div className="flex items-start gap-2">
                  <Check size={12} className="text-w-blue/70 mt-0.5 shrink-0" />
                  <p className="text-xs font-inter text-w-text">{item.our}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
