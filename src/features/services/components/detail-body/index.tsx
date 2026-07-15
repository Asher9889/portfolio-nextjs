import { CheckCircle2 } from "lucide-react";
import type { Service, OutcomeItem } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn } from "../animations";

export default function DetailBody({ service }: { service: Service }) {
  return (
    <section className="py-20 md:py-24 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <SectionLabel>What This Includes</SectionLabel>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.items.map((item: OutcomeItem) => (
              <div
                key={item.label}
                className="p-5 border border-w-border hover:border-w-blue/30 transition-colors bg-w-bg"
                style={{ borderRadius: "6px" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={12} className="text-w-blue/60 shrink-0" />
                  <h3 className="text-sm font-inter font-bold text-w-text">{item.label}</h3>
                </div>
                <p className="text-xs text-w-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
