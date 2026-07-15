import { Check } from "lucide-react";
import { outcomeGroups } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn, ScaleIn } from "../animations";

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-16 max-w-2xl">
          <SectionLabel>What I Solve</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            You have a business problem.
            <br />
            <span className="text-w-blue">I build the technical solution.</span>
          </h2>
        </FadeIn>

        <div className="space-y-10 md:space-y-14">
          {outcomeGroups.map((group, gi) => (
            <ScaleIn key={group.id} delay={0.1 * gi}>
              <div className="border border-w-border p-6 md:p-8" style={{ borderRadius: "8px" }}>
                <h3 className="text-xl md:text-2xl font-inter font-bold text-w-text mb-3">
                  {group.headline}
                </h3>
                <p className="text-sm text-w-muted leading-relaxed mb-6 max-w-2xl">
                  {group.question}
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 border border-w-border hover:border-w-blue/30 transition-colors"
                      style={{ borderRadius: "4px" }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Check size={10} className="text-w-blue/60 shrink-0" />
                        <span className="text-xs font-inter font-semibold text-w-text">{item.label}</span>
                      </div>
                      <p className="text-[11px] text-w-muted leading-relaxed pl-4.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
