import Link from "next/link";
import type { Service } from "@/constants/services.constant";
import { SectionLabel } from "../section-label";
import { FadeIn } from "../animations";

export default function DetailHero({ service }: { service: Service }) {
  return (
    <section className="bg-w-bg pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs text-w-muted hover:text-w-text transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-w-blue/50 rounded-sm"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
          <SectionLabel>Outcome</SectionLabel>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text mb-6 max-w-3xl">
            {service.title}
          </h1>
          <p className="text-sm md:text-base text-w-muted leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
