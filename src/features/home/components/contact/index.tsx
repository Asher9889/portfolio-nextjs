import ContactAnimation from "./contact-animation.client";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-background py-32 overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,184,75,0.06), transparent 60%)",
        }}
      />
      <div className="relative z-10">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
          <ContactAnimation>
            <span className="mb-6 inline-flex items-center gap-3">
              <span className="h-px w-8" style={{ backgroundColor: "#E8B84B" }} />
              <span
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "#E8B84B" }}
              >
                Let&apos;s Connect
              </span>
              <span className="h-px w-8" style={{ backgroundColor: "#E8B84B" }} />
            </span>

            <h2 className="mb-8 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Have a project{" "}
              <span className="relative inline-block" style={{ color: "#E8B84B" }}>
                in mind
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 100 6"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M1 4C20 1 50 1 99 4"
                    stroke="#E8B84B"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ?
            </h2>

            <p className="mb-12 text-lg text-foreground/55 max-w-xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>

            <a
              href="mailto:hello@saurabh.dev"
              className="group inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "#E8B84B",
                boxShadow: "0 4px 24px rgba(232,184,75,0.25)",
              }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Say Hello
              <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </ContactAnimation>
        </div>
      </div>
    </section>
  );
}
