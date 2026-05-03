"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

type MediaTile = {
  src: string;
  alt: string;
  label: string;
  className: string;
};

type Project = {
  id: string;
  index: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  url: string;
  highlights: string[];
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  media: MediaTile[];
  theme: {
    primary: string;
    secondary: string;
  };
};

type AccentStyle = Record<string, string>;

const projects: Project[] = [
  {
    id: "purecheckup",
    index: "01",
    name: "PureCheckup",
    category: "Healthcare platform",
    tagline: "Most healthcare websites confuse users when they need clarity the most.",
    summary:
      "Make booking a consultation feel as simple as ordering food. Reduced friction across the full flow, from selecting a service to confirming a slot.",
    url: "https://purecheckup.com/",
    highlights: ["Book in under 60 seconds", "Clear doctor availability", "50+ services simplified"],
    challenge: "Users were dropping before booking. Too many steps, unclear structure, no urgency.",
    approach:
      "Reduced decisions per screen, grouped services clearly, and sharpened the visual hierarchy for trust.",
    outcome:
      "Users move from confusion to action faster. The flow feels predictable, which builds trust.",
    stack: ["UX Architecture", "Trust-first Copy", "Booking Flow", "Responsive Design"],
    media: [
      {
        src: "/purecheckup-homepage.png",
        alt: "PureCheckup homepage",
        label: "Hero",
        className: "sm:col-span-2 h-60",
      },
      {
        src: "/purecheckup-nocostemi.png",
        alt: "PureCheckup trust section",
        label: "Trust",
        className: "h-48",
      },
      {
        src: "/purecheckup-whychoose.png",
        alt: "PureCheckup why choose section",
        label: "Why choose",
        className: "h-48",
      },
    ],
    theme: {
      primary: "#6a7f68",
      secondary: "#445a53",
    },
  },
  {
    id: "startechnoplast",
    index: "02",
    name: "Star Technoplast",
    category: "Manufacturing catalog",
    tagline:
      "Premium electrical and electronic accessories with a broad product catalog and bulk enquiry flow.",
    summary:
      "B2B catalogs usually feel like spreadsheets, hard to explore and harder to trust. For Star Technoplast, the goal was to help buyers understand products fast and move to enquiry without friction.",
    url: "https://www.startechnoplast.com/",
    highlights: [
      "Product families structured for quick scanning",
      "Direct bulk enquiry without unnecessary steps",
      "Clear OEM / ODM pathways for serious buyers",
    ],
    challenge:
      "Turn a wide product range into a clean buying story so visitors can scan categories, compare products, and enquire quickly.",
    approach:
      "Grouped products by use case, foregrounded quality signals, and kept the enquiry path visible without overwhelming the catalog.",
    outcome:
      "The experience feels like a confident manufacturing brand, not a crowded product wall.",
    stack: ["Catalog taxonomy", "Lead routing", "Product storytelling", "Responsive gallery system"],
    media: [
      {
        src: "https://www.startechnoplast.com/assets/startechnoPlastHeroImage-BNalmuO8.webp",
        alt: "Star Technoplast hero visual",
        label: "Catalog hero",
        className: "sm:col-span-2 h-56 sm:h-72",
      },
      {
        src: "https://www.startechnoplast.com/assets/power-bank-CP_xKxPp.webp",
        alt: "Star Technoplast power bank product visual",
        label: "Product family",
        className: "h-48 sm:h-56",
      },
      {
        src: "https://www.startechnoplast.com/assets/speakerBody-IkX7px_I.webp",
        alt: "Star Technoplast speaker product visual",
        label: "Category depth",
        className: "h-48 sm:h-56",
      },
      {
        src: "https://www.startechnoplast.com/assets/plugBody-CnZkEUBX.webp",
        alt: "Star Technoplast plug body product visual",
        label: "Manufacturing quality",
        className: "sm:col-span-2 h-52 sm:h-60",
      },
    ],
    theme: {
      primary: "#b68d5d",
      secondary: "#4a2a3d",
    },
  },
];

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "").trim();
  const expanded = normalized.length === 3
    ? normalized
        .split("")
        .map((char) => char + char)
        .join("")
    : normalized;

  const parsed = Number.parseInt(expanded, 16);

  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  };
}

function tint(color: string, alpha: number) {
  const { r, g, b } = hexToRgb(color);
  return `rgb(${r} ${g} ${b} / ${alpha})`;
}

function accentStyle(project: Project): AccentStyle {
  const primary = hexToRgb(project.theme.primary);
  const secondary = hexToRgb(project.theme.secondary);

  return {
    "--project-primary": `${primary.r} ${primary.g} ${primary.b}`,
    "--project-secondary": `${secondary.r} ${secondary.g} ${secondary.b}`,
  };
}

function CaseCard({
  title,
  body,
  color,
}: {
  title: string;
  body: string;
  color: string;
}) {
  return (
    <div
      className="rounded-3xl border border-border bg-card p-5 shadow-sm"
      style={{
        background: `linear-gradient(180deg, ${tint(color, 0.08)}, color-mix(in oklab, var(--card) 92%, ${tint(color, 0.04)}))`,
        borderColor: `color-mix(in oklab, ${color} 18%, var(--border))`,
      }}
    >
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{title}</div>
      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-foreground/78">{body}</p>
    </div>
  );
}

function MediaGrid({ project }: { project: Project }) {
  const styles = accentStyle(project);

  return (
    <div
      className="overflow-hidden rounded-4xl border border-border bg-card p-4 shadow-sm"
      style={{
        ...styles,
        background:
          `linear-gradient(135deg, color-mix(in oklab, ${project.theme.primary} 12%, var(--background)), color-mix(in oklab, ${project.theme.secondary} 10%, var(--background)))`,
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {project.media.map((tile, index) => (
          <figure
            key={`${project.id}-${tile.label}`}
            className={`group relative overflow-hidden rounded-[1.15rem] border border-border/60 bg-background/60 ${tile.className}`}
          >
            <img
              src={tile.src}
              alt={tile.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(16,16,16,0.42),rgba(16,16,16,0.02)_60%)]"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-50/90">
              <span>{tile.label}</span>
              <span className="text-zinc-50/55">0{index + 1}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase() {
  const [active, setActive] = useState(projects[0].id);

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Selected Work
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Real products. Real problems. Thoughtful solutions.
          </h2>

          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Each project is treated as a case study, with a clear narrative, visible proof, and a restrained accent system that still respects the current theme.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const isOpen = active === project.id;
            const styles = accentStyle(project);

            return (
              <article
                key={project.id}
                className="overflow-hidden rounded-4xl border border-border bg-card/90 shadow-[0_18px_50px_rgba(0,0,0,0.06)] dark:shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
                style={{
                  ...styles,
                  background:
                    `linear-gradient(135deg, color-mix(in oklab, ${project.theme.primary} 9%, var(--background)), var(--background))`,
                }}
              >
                <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="space-y-6 p-6 sm:p-8 lg:border-r lg:border-border">
                    <div className="space-y-5">
                      <div
                        className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                        style={{
                          borderColor: `color-mix(in oklab, ${project.theme.primary} 24%, var(--border))`,
                          background: `color-mix(in oklab, ${project.theme.primary} 12%, var(--card))`,
                          color: `color-mix(in oklab, ${project.theme.primary} 72%, var(--foreground))`,
                        }}
                      >
                        {project.category}
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                          {project.name}
                        </h3>
                        <p className="max-w-xl text-base leading-7 text-foreground/76 sm:text-lg">
                          {project.tagline}
                        </p>
                        <div
                          className="h-1.5 w-20 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${project.theme.primary}, ${project.theme.secondary})`,
                          }}
                        />
                      </div>
                    </div>

                    <p className="max-w-xl whitespace-pre-line text-sm leading-6 text-muted-foreground">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border px-3 py-1 text-xs font-medium"
                          style={{
                            background: tint(project.theme.primary, 0.08),
                            borderColor: tint(project.theme.primary, 0.18),
                            color: `color-mix(in oklab, ${project.theme.primary} 70%, var(--foreground))`,
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setActive(project.id)}
                        className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-background transition-transform duration-200 hover:-translate-y-0.5"
                        style={{
                          background: `linear-gradient(135deg, ${project.theme.secondary}, ${project.theme.primary})`,
                        }}
                      >
                        {isOpen ? "Case study open" : "Open case study"}
                        <ChevronDown
                          size={16}
                          className={isOpen ? "rotate-180 transition-transform" : "transition-transform"}
                        />
                      </button>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        Live
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <MediaGrid project={project} />
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-border p-6 sm:p-8">
                    <div className="grid gap-4 md:grid-cols-2">
                      <CaseCard title="Challenge" body={project.challenge} color={project.theme.primary} />
                      <CaseCard title="Approach" body={project.approach} color={project.theme.primary} />
                    </div>

                    <div
                      className="mt-4 rounded-3xl border p-6"
                      style={{
                        borderColor: `color-mix(in oklab, ${project.theme.secondary} 18%, var(--border))`,
                        background:
                          `linear-gradient(135deg, color-mix(in oklab, ${project.theme.primary} 16%, var(--background)), color-mix(in oklab, ${project.theme.secondary} 18%, var(--background)))`,
                      }}
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-foreground/65">
                        Outcome
                      </div>
                      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-foreground/80">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
