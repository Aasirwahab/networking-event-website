import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl md:text-[200px] font-black tracking-tighter text-white/5 leading-none select-none">
          404
        </h1>
        <div className="-mt-12 md:-mt-20">
          <p className="text-xl md:text-2xl font-light text-white/60 mb-2">
            Page not found
          </p>
          <p className="text-sm text-white/30 max-w-md mx-auto mb-10 font-light">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
