export default function HeroDiagram() {
  return (
    <div className="relative w-full aspect-4/3 max-h-105 min-h-50 flex flex-col items-center justify-center gap-2 sm:gap-3 px-2 sm:px-4">
      <div className="flex items-start gap-1 sm:gap-2 w-full max-w-120 justify-center">
        <div className="flex flex-col gap-1.5 items-center flex-1 min-w-0">
          <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-w-muted/40 select-none mb-0.5">Your Problem</span>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-border/60 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <span className="text-[8px] sm:text-[9px] font-medium text-w-muted/80 block text-center leading-snug">Users expect a flawless experience</span>
          </div>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-border/60 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <span className="text-[8px] sm:text-[9px] font-medium text-w-muted/80 block text-center leading-snug">Your data is growing faster than your systems</span>
          </div>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-border/60 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <span className="text-[8px] sm:text-[9px] font-medium text-w-muted/80 block text-center leading-snug">Market demands faster delivery</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 gap-1">
          <span className="text-w-muted/20 text-xs select-none">→</span>
          <span className="text-w-muted/20 text-xs select-none">→</span>
          <span className="text-w-muted/20 text-xs select-none">→</span>
        </div>
        <div className="flex flex-col gap-1.5 items-center flex-1 min-w-0">
          <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-w-blue/50 select-none mb-0.5">Our Expertise</span>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-blue/25 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <div className="w-2.5 h-2.5 rounded bg-w-blue/20 flex items-center justify-center mx-auto mb-0.5">
              <div className="w-1 h-1 rounded-sm bg-w-blue" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-semibold text-w-text block text-center leading-snug">Full-stack apps built to scale</span>
          </div>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-blue/25 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <div className="w-2.5 h-2.5 rounded bg-w-blue/20 flex items-center justify-center mx-auto mb-0.5">
              <div className="w-1 h-1 rounded-sm bg-w-blue" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-semibold text-w-text block text-center leading-snug">Systems engineered for speed</span>
          </div>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-blue/25 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <div className="w-2.5 h-2.5 rounded bg-w-blue/20 flex items-center justify-center mx-auto mb-0.5">
              <div className="w-1 h-1 rounded-sm bg-w-blue" />
            </div>
            <span className="text-[8px] sm:text-[9px] font-semibold text-w-text block text-center leading-snug">Product-minded engineering end to end</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 gap-1">
          <span className="text-w-muted/20 text-xs select-none">→</span>
          <span className="text-w-muted/20 text-xs select-none">→</span>
          <span className="text-w-muted/20 text-xs select-none">→</span>
        </div>
        <div className="flex flex-col gap-1.5 items-center flex-1 min-w-0">
          <span className="text-[7px] sm:text-[8px] font-mono uppercase tracking-widest text-w-muted/40 select-none mb-0.5">Your Result</span>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-border/60 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <span className="text-[8px] sm:text-[9px] font-medium text-w-text block text-center leading-snug">A fast, scalable application</span>
          </div>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-border/60 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <span className="text-[8px] sm:text-[9px] font-medium text-w-text block text-center leading-snug">Users who love the experience</span>
          </div>
          <div className="w-full px-2 sm:px-2.5 py-1.5 rounded-lg bg-w-bg/80 backdrop-blur-sm border border-w-border/60 hover:border-w-blue transition-colors duration-300 cursor-default select-none">
            <span className="text-[8px] sm:text-[9px] font-medium text-w-text block text-center leading-snug">Sustainable business growth</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-[10px] text-w-muted/40 font-inter select-none" aria-hidden="true">
        <span className="w-3 h-px bg-w-border/50" />
        we find the problem, then we solve it
        <span className="w-3 h-px bg-w-border/50" />
      </div>
    </div>
  );
}
