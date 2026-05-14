export default function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-white font-serif text-sm font-bold italic">
            Sk
          </div>
          <span className="text-sm font-medium text-neutral-500">
            © 2026 Saurabh. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6">
          {["Home", "About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-900"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}