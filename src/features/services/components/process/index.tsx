import ProcessTimeline from "../process-timeline";
import { SectionLabel } from "../section-label";
import { ScaleIn } from "../animations";

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-w-bg border-t border-w-border">
      <div className="mx-auto max-w-300 px-6">
        <div className="mb-12 max-w-2xl">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-[1.05] text-w-text mb-4">
            A process that turns your idea
            <br />
            <span className="text-w-blue">into working software, step by step</span>.
          </h2>
          <p className="text-sm text-w-muted leading-relaxed max-w-lg">
            Every project follows the same backbone. The timeline flexes. The quality bar does not.
          </p>
        </div>
        <ScaleIn>
          <ProcessTimeline />
        </ScaleIn>
      </div>
    </section>
  );
}
