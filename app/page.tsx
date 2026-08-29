export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          86 Drift
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed">
          A studio in Portland.
        </p>
      </section>

      <section className="py-16 border-t border-neutral-200">
        <div className="space-y-12">
          <div>
            <p className="text-neutral-600 mb-3">
              Latch — One-page offers. $29, once.
            </p>
            <a 
              href="https://latch-bice.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              latch-bice.vercel.app
            </a>
          </div>

          <div>
            <p className="text-neutral-600 mb-3">
              Morning Download — A daily briefing.
            </p>
            <a 
              href="https://morning-download.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              morning-download.com
            </a>
          </div>

          <div>
            <p className="text-neutral-600 mb-3">
              Decisionmakerr — Dice for when you can't pick.
            </p>
            <a 
              href="https://decisionmakerr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              decisionmakerr.com
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-neutral-200">
        <div className="text-neutral-600">
          <p className="mb-4">
            Portland, Oregon
          </p>
          <p>
            <a 
              href="mailto:86drift@gmail.com"
              className="hover:text-neutral-900 transition-colors"
            >
              86drift@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
