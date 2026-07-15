import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "../animations";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-w-text border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-bg mb-6">
              Have a Product Idea?
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
              Let&apos;s spend 30 minutes discussing whether it&apos;s technically and commercially viable.
              <br />
              <span style={{ color: "rgba(255,255,255,0.7)" }}>No sales pitch. Just honest engineering advice.</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-w-text bg-w-bg transition-all duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                style={{ borderRadius: "4px" }}
              >
                Book a Free 30-Min Call
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-w-bg border border-white/20 transition-all duration-200 hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                style={{ borderRadius: "4px" }}
              >
                See Pricing
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
