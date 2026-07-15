export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-6 bg-w-border" />
      <span className="text-[11px] font-inter uppercase tracking-[0.2em] text-w-muted">{children}</span>
    </div>
  );
}
