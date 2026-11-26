export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-6 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 5h13a2 2 0 0 1 2 2v9" />
        <rect x="2.5" y="8.5" width="15.5" height="11" rx="2" />
        <path d="m9 12 3.5 2-3.5 2z" fill="currentColor" strokeWidth="1.2" />
      </svg>
      Frames
    </span>
  );
}
