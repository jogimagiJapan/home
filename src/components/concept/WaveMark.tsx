type WaveKind = "linspace" | "spectral" | "peak";

const paths: Record<WaveKind, string> = {
  linspace:
    "M0 28 C24 28 28 12 48 12 S72 44 96 44 120 12 144 12 168 44 192 44 216 12 240 12 264 28 280 28",
  spectral:
    "M0 28 C10 28 12 18 20 10 28 2 32 22 40 28 48 34 52 8 60 16 68 24 72 40 80 28 88 16 96 6 108 20 120 34 128 44 140 22 152 4 160 30 172 28 184 26 188 8 200 14 212 20 220 42 232 28 244 14 256 18 280 28",
  peak:
    "M0 40 L48 40 L56 8 L64 40 L120 40 L128 18 L136 40 L200 40 L206 4 L214 40 L280 40",
};

export function WaveMark({ kind }: { kind: WaveKind }) {
  return (
    <svg
      viewBox="0 0 280 56"
      className="h-10 w-40 text-ink sm:h-12 sm:w-48"
      fill="none"
      aria-hidden
    >
      <path
        d={paths[kind]}
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
