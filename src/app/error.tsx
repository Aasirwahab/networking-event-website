'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white/5 leading-none select-none mb-4">
          Error
        </h1>
        <p className="text-xl md:text-2xl font-light text-white/60 mb-2">
          Something went wrong
        </p>
        <p className="text-sm text-white/30 max-w-md mx-auto mb-10 font-light">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block px-8 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
