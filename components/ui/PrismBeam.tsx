export function PrismBeam({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`page-x ${className}`}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative h-8">
          {/* Soft glow */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.08),rgba(6,182,212,0.06),rgba(124,58,237,0.06),transparent)] blur-xl opacity-80" />
          {/* Hairline */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.22),rgba(6,182,212,0.18),rgba(124,58,237,0.18),transparent)] opacity-70" />
        </div>
      </div>
    </div>
  );
}
