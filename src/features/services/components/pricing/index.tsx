import { Check, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { pricingTiers } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn } from "../animations";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn className="mb-12 max-w-2xl">
          <SectionLabel>Investment</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text">
            Transparent pricing.
            <br />
            <span className="text-w-blue">No hidden costs, no surprises.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {pricingTiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={0.1 * i}>
              <div
                className={`relative flex flex-col border transition-all duration-300 ${tier.highlighted ? "border-w-text shadow-sm" : "border-w-border hover:border-w-text/30"} bg-w-bg`}
                style={{ borderRadius: "8px" }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-w-text" style={{ borderRadius: "4px" }}>
                    <span className="text-[10px] font-inter font-bold text-w-bg uppercase tracking-wider">Most Popular</span>
                  </div>
                )}
                <div className="p-6 md:p-7 flex flex-col h-full">
                  <h3 className="text-sm font-inter font-bold text-w-text mb-1">{tier.name}</h3>
                  <p className="text-2xl md:text-3xl font-inter font-bold text-w-text mb-3 tracking-tight">{tier.price}</p>
                  <p className="text-xs text-w-muted leading-relaxed mb-6 flex-1">{tier.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-w-muted">
                        <Check size={10} className="text-w-blue/60 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-inter font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50 ${tier.highlighted ? "text-w-bg bg-w-text hover:opacity-85" : "text-w-text border border-w-border hover:border-w-text"} text-center`}
                    style={{ borderRadius: "4px" }}
                  >
                    {tier.price === "Custom Quote" ? "Let's Talk" : "Get Started"}
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
