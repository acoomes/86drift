export default function Work() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-4xl font-bold mb-16">Work</h1>
        
        <div className="space-y-16">
          <article className="border-b border-neutral-200 pb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Latch
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              A shareable one-page offer. Draft free, publish for $29.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://latch-bice.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Visit → latch-bice.vercel.app
              </a>
            </div>
          </article>

          <article className="border-b border-neutral-200 pb-16">
            <h2 className="text-2xl font-semibold mb-4">
              Morning Download
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              A morning brief. World, markets, AI.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a 
                href="https://morning-download.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                Visit → morning-download.com
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
