export function PrismBeam({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`page-x ${className}`}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative h-14">
          {/* Big soft glow */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-10 bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.22),rgba(6,182,212,0.18),rgba(124,58,237,0.18),transparent)] blur-2xl opacity-80" />

          {/* The beam (visible, not hairline) */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(245,158,11,0.82),rgba(6,182,212,0.74),rgba(124,58,237,0.78),transparent)] shadow-[0_0_0_1px_rgba(17,17,17,0.05),0_14px_34px_-22px_rgba(124,58,237,0.55)] opacity-95" />

          {/* Inner highlight */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.85),rgba(255,255,255,0.35),transparent)] opacity-55" />
        </div>
      </div>
    </div>
  );
}
