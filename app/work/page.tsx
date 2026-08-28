export default function Work() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-4xl font-bold mb-16">Work</h1>
        
        <div className="space-y-16">
          <article className="border-b border-neutral-200 pb-16">
            <h2 className="text-2xl font-semibold mb-4">
              <a 
                href="https://latch-acoomes-projects.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-600 transition-colors"
              >
                Latch
              </a>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Client-ready one-page offers for independents. Clean proposal pages with 
              Stripe payment links. No monthly fees, no templates. $29 one-time.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://latch-acoomes-projects.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Visit site →
              </a>
            </div>
          </article>

          <article className="border-b border-neutral-200 pb-16">
            <h2 className="text-2xl font-semibold mb-4">
              <a 
                href="https://morning-download.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-600 transition-colors"
              >
                Morning Download
              </a>
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Daily world, markets, and AI briefing. Curated signal from the noise.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://morning-download.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Visit site →
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
