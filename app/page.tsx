export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          86 Drift builds software.
        </h1>
        <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed">
          A Portland studio shipping tools for independents and small teams.
        </p>
      </section>

      <section className="py-16 border-t border-neutral-200">
        <h2 className="text-2xl font-bold mb-12">Current Work</h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href="https://latch-acoomes-projects.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-600 transition-colors"
              >
                Latch
              </a>
            </h3>
            <p className="text-neutral-600 mb-3">
              Client-ready one-page offers for independents. $29 one-time.
            </p>
            <a 
              href="https://latch-acoomes-projects.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              latch-acoomes-projects.vercel.app →
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              <a 
                href="https://morning-download.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-600 transition-colors"
              >
                Morning Download
              </a>
            </h3>
            <p className="text-neutral-600 mb-3">
              Daily world, markets, and AI briefing.
            </p>
            <a 
              href="https://morning-download.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              morning-download.com →
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-neutral-200">
        <div className="text-neutral-600">
          <p className="mb-4">
            Based in Portland / Hillsboro, Oregon.
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
