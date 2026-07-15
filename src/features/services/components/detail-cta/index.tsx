import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { SectionLabel } from "../section-label";
import { FadeIn } from "../animations";

export default function DetailCTA() {
  return (
    <section className="py-20 md:py-24 bg-w-smoke border-t border-w-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="max-w-2xl">
            <SectionLabel>Interested?</SectionLabel>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-inter font-bold tracking-tight leading-[1.1] text-w-text mb-6">
              Need help with this?
              <br />
              <span className="text-w-blue">Let&apos;s build it together.</span>
            </h2>
            <p className="text-sm md:text-base text-w-muted leading-relaxed mb-8">
              Every project starts with a conversation. Tell me about your problem, and I&apos;ll tell you how I can help solve it. No obligation, no sales pitch.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-w-bg bg-w-text transition-all duration-200 hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50"
              style={{ borderRadius: "4px" }}
            >
              Start the Conversation
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
