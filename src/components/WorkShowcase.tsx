import { ArrowUpRight, Layers3, LayoutGrid, Sparkles, Zap } from "lucide-react";

const showcaseMetrics = [
  { label: "Clarity", value: "One glance" },
  { label: "Trust", value: "Proof up front" },
  { label: "Action", value: "Demo or call" },
];

const featureSteps = [
  {
    title: "Frame the product",
    body:
      "Put the product inside a strong browser-like canvas so visitors understand what they are looking at immediately.",
  },
  {
    title: "Show the payoff",
    body:
      "Place the result, the value, or the before-and-after next to the preview. That gives the section a reason to exist.",
  },
  {
    title: "Lead to action",
    body:
      "End the section with a clear path forward, such as a demo booking, live preview, or launch page.",
  },
];

function ProductPreview() {
  return (
    <div className="relative overflow-hidden rounded-[2.25rem] border border-black/10 bg-foreground text-background shadow-[0_30px_80px_rgba(0,0,0,0.18)] dark:border-white/10 dark:bg-card dark:text-foreground dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 dark:border-black/10">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-background/65 dark:text-foreground/60">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Product showcase
        </div>
        <div className="flex items-center gap-1.5 text-background/45 dark:text-foreground/45">
          <span className="h-2.5 w-2.5 rounded-full bg-current/45" />
          <span className="h-2.5 w-2.5 rounded-full bg-current/45" />
          <span className="h-2.5 w-2.5 rounded-full bg-current/45" />
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[1.14fr_0.86fr]">
        <div className="relative min-h-96 overflow-hidden border-b border-white/10 p-6 sm:p-8 xl:border-b-0 xl:border-r xl:border-white/10 dark:border-black/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,255,194,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.14),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(150,208,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,203,112,0.08),transparent_34%)]" />

          <div className="relative flex h-full flex-col justify-between gap-10">
            <div className="max-w-lg space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-background/70 backdrop-blur-md dark:border-black/10 dark:bg-black/5 dark:text-foreground/60">
                <Sparkles size={12} />
                Featured product
              </div>
              <h3 className="max-w-[12ch] text-4xl font-semibold leading-[0.92] tracking-tight sm:text-5xl">
                Show the product like a launch, not a gallery.
              </h3>
              <p className="max-w-xl text-sm leading-6 text-background/68 dark:text-foreground/66 sm:text-base">
                This is the main visual anchor for your own product. Swap the name, screenshot, and metrics, and the layout still feels intentional.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {showcaseMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-md dark:border-black/10 dark:bg-black/5"
                >
                  <div className="text-xs uppercase tracking-[0.18em] text-background/50 dark:text-foreground/50">
                    {metric.label}
                  </div>
                  <div className="mt-2 text-sm font-medium text-background dark:text-foreground">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-0">
          <div className="border-b border-white/10 p-6 sm:p-7 dark:border-black/10">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-background/50 dark:text-foreground/50">
              What this section should say
            </div>
            <div className="mt-4 space-y-4">
              <p className="max-w-md text-sm leading-6 text-background/70 dark:text-foreground/68 sm:text-base">
                Visitors should understand what the product does, why it matters, and what to do next. Keep that story in one view.
              </p>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-4 backdrop-blur-md dark:border-black/10 dark:bg-black/5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-background/50 dark:text-foreground/50">
                      Product action
                    </div>
                    <div className="mt-2 text-lg font-semibold tracking-tight text-background dark:text-foreground">
                      Demo, call, or live preview
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground transition hover:opacity-90 dark:bg-foreground dark:text-background">
                    View flow
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-0 border-b border-white/10 dark:border-black/10 sm:grid-cols-2">
            <div className="border-b border-white/10 p-6 dark:border-black/10 sm:border-b-0 sm:border-r sm:border-white/10">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-background/50 dark:text-foreground/50">
                Preview modules
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[1.25rem] bg-white/10 p-3 dark:bg-foreground/10">
                  <div className="h-3 w-16 rounded-full bg-white/70 dark:bg-foreground/70" />
                  <div className="mt-3 h-10 rounded-xl bg-white/18 dark:bg-foreground/18" />
                </div>
                <div className="rounded-[1.25rem] bg-white/10 p-3 dark:bg-foreground/10">
                  <div className="h-3 w-20 rounded-full bg-white/70 dark:bg-foreground/70" />
                  <div className="mt-3 h-10 rounded-xl bg-white/18 dark:bg-foreground/18" />
                </div>
              </div>
            </div>

            <div className="p-6 dark:border-black/10 sm:p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-background/50 dark:text-foreground/50">
                Proof
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-[1.25rem] bg-white/10 p-4 dark:bg-foreground/10">
                  <div className="text-sm text-background/60 dark:text-foreground/60">Better clarity</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">1 view</div>
                </div>
                <div className="rounded-[1.25rem] bg-white/10 p-4 dark:bg-foreground/10">
                  <div className="text-sm text-background/60 dark:text-foreground/60">Clearer next step</div>
                  <div className="mt-2 text-3xl font-semibold tracking-tight">2 CTAs</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-0 sm:grid-cols-2">
            <div className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:border-white/10 dark:border-black/10">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-background/50 dark:text-foreground/50">
                Motion cue
              </div>
              <div className="mt-4 flex items-end gap-2">
                <div className="h-10 w-3 rounded-full bg-emerald-400/80" />
                <div className="h-16 w-3 rounded-full bg-sky-400/80" />
                <div className="h-24 w-3 rounded-full bg-amber-300/80" />
                <div className="h-18 w-3 rounded-full bg-white/70 dark:bg-foreground/70" />
                <div className="h-28 w-3 rounded-full bg-white/90 dark:bg-foreground" />
              </div>
            </div>

            <div className="p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-background/50 dark:text-foreground/50">
                Action path
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-background/70 dark:border-black/10 dark:bg-black/5 dark:text-foreground/70">
                  Book a demo
                </span>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-background/70 dark:border-black/10 dark:bg-black/5 dark:text-foreground/70">
                  See the flow
                </span>
                <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs font-medium text-background/70 dark:border-black/10 dark:bg-black/5 dark:text-foreground/70">
                  Contact me
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-24 px-4 pb-24 pt-10 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-350">
        <div className="mb-8 flex flex-col gap-4 border-t border-black/10 pt-6 dark:border-white/10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.28em] text-black/45 dark:text-white/50">
              Selected product
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              A product section that feels like the product itself.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-black/55 dark:text-white/60 sm:text-base">
            Use this area to showcase your own product with one dominant visual, a short proof rail, and a clear call to action. It should read like a launch, not a portfolio grid.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-28">
            <div className="rounded-[2rem] border border-black/10 bg-background p-6 dark:border-white/10 dark:bg-card sm:p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/50">
                <Sparkles size={14} className="text-emerald-400" />
                Why it works
              </div>
              <p className="mt-4 max-w-md text-sm leading-6 text-black/65 dark:text-white/68 sm:text-base">
                A good showcase section gives the visitor one clear thing to study, one clear reason to care, and one clear next action.
              </p>
            </div>

            <div className="space-y-4">
              {featureSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`rounded-[1.75rem] border border-black/10 bg-background p-5 dark:border-white/10 dark:bg-card ${index === 0 ? "shadow-[0_14px_30px_rgba(0,0,0,0.04)]" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-black/10 bg-black/5 text-sm font-semibold text-foreground dark:border-white/10 dark:bg-white/5">
                      0{index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-black/65 dark:text-white/65">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <ProductPreview />

            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-[1.75rem] border border-black/10 bg-background p-5 dark:border-white/10 dark:bg-card md:col-span-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/50">
                  <LayoutGrid size={14} className="text-sky-400" />
                  Product story
                </div>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-black/65 dark:text-white/68 sm:text-base">
                  Place your own product title here and use this wide panel for the narrative, screenshots, or short video stills. The width gives the section a launch-page feel.
                </p>
              </article>

              <article className="rounded-[1.75rem] border border-black/10 bg-background p-5 dark:border-white/10 dark:bg-card">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/50">
                  <Zap size={14} className="text-amber-400" />
                  CTA
                </div>
                <div className="mt-4 space-y-3">
                  <button className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background transition hover:opacity-90 dark:bg-background dark:text-foreground">
                    Book a demo
                    <ArrowUpRight size={16} />
                  </button>
                  <button className="flex w-full items-center justify-center gap-2 rounded-full border border-black/10 px-4 py-3 text-sm font-medium text-foreground transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10">
                    See product details
                  </button>
                </div>
              </article>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-background p-6 dark:border-white/10 dark:bg-card sm:p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/45 dark:text-white/50">
                <Layers3 size={14} className="text-emerald-400" />
                What to swap in
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                <div className="space-y-2 rounded-[1.5rem] bg-black/4 p-4 dark:bg-white/5">
                  <div className="text-sm font-medium text-foreground">1. Product name</div>
                  <p className="text-sm leading-6 text-black/60 dark:text-white/64">
                    Replace the placeholder copy with the actual product and one-line promise.
                  </p>
                </div>
                <div className="space-y-2 rounded-[1.5rem] bg-black/4 p-4 dark:bg-white/5">
                  <div className="text-sm font-medium text-foreground">2. Visual proof</div>
                  <p className="text-sm leading-6 text-black/60 dark:text-white/64">
                    Swap the preview canvas with screenshots or a short screen recording frame.
                  </p>
                </div>
                <div className="space-y-2 rounded-[1.5rem] bg-black/4 p-4 dark:bg-white/5">
                  <div className="text-sm font-medium text-foreground">3. Outcome</div>
                  <p className="text-sm leading-6 text-black/60 dark:text-white/64">
                    Add the strongest metric, user result, or business effect near the CTA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}