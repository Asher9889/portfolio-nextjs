import ArchitectureFlow from "../architecture-flow";
import { SectionLabel } from "../section-label";
import { ScaleIn } from "../animations";

export default function ArchitectureSection() {
  return (
    <section className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>How I Think Before I Code</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text mb-4">
            I plan the whole system
            <br />
            <span className="text-w-blue">before writing a single line</span>.
          </h2>
          <p className="text-sm text-w-muted leading-relaxed max-w-xl">
            Every project starts with a whiteboard. Data flows, service boundaries, failure modes, scaling strategy.
            The code is just the last step.
          </p>
        </div>
        <ScaleIn delay={0.2}>
          <ArchitectureFlow />
        </ScaleIn>
      </div>
    </section>
  );
}
