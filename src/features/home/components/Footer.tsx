"use client";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex items-center gap-3">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold italic"
            style={{
              backgroundColor: "#E8B84B",
              color: "#000",
              fontFamily: "var(--font-playfair), serif",
            }}
          >
            SK
          </div>
          <span className="text-sm font-medium text-foreground/50">
            &copy; 2026 Saurabh. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-sm text-foreground/40 transition-colors duration-300"
              onMouseEnter={(e) => { e.currentTarget.style.color = "#E8B84B"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = ""; }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
