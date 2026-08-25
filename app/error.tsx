"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-forest-950">Something went wrong</h1>
      <p className="mt-4 text-forest-800">Reload this page or call (813) 595-7373 for dispatch.</p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-orange-500 px-5 py-3 font-bold text-white"
      >
        Try again
      </button>
    </section>
  );
}
