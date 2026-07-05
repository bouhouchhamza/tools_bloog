export default function Loading() {
  return (
    <div className="container py-16">
      <div className="h-8 w-64 animate-pulse rounded bg-[#dce5e0]" />
      <div className="mt-6 h-4 w-full max-w-2xl animate-pulse rounded bg-[#dce5e0]" />
      <div className="mt-3 h-4 w-full max-w-xl animate-pulse rounded bg-[#dce5e0]" />
    </div>
  );
}
