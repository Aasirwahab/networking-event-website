export function SectionSkeleton() {
  return (
    <div className="w-full py-24 flex items-center justify-center" aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-pulse">
        <div className="h-3 w-32 bg-white/5 rounded mb-6" />
        <div className="h-12 w-80 bg-white/5 rounded mb-4" />
        <div className="h-8 w-48 bg-white/[0.03] rounded mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="h-64 bg-white/[0.02] rounded-3xl border border-white/5" />
          <div className="h-64 bg-white/[0.02] rounded-3xl border border-white/5" />
          <div className="h-64 bg-white/[0.02] rounded-3xl border border-white/5" />
        </div>
      </div>
    </div>
  );
}
