export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6">
      <section className="pt-20 pb-16">
        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
          86 Drift
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
          A small studio that builds and runs focused software products.
        </p>
      </section>

      <section className="py-12 border-t border-neutral-200 dark:border-neutral-800">
        <div className="space-y-8">
          <div>
            <div className="flex items-baseline gap-3 mb-2">
              <h2 className="font-medium">Chock</h2>
              <span className="text-xs text-neutral-500 dark:text-neutral-500 uppercase tracking-wider">Beta</span>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
              Carrier vetting and monitoring for small US freight brokers.
            </p>
            <a 
              href="https://chock-acoomes-projects.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              chock-acoomes-projects.vercel.app
            </a>
          </div>

          <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8">
            <h2 className="font-medium mb-2">Morning Download</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
              A morning brief on world news, markets, and AI.
            </p>
            <a 
              href="https://morning-download.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              morning-download.com
            </a>
          </div>

          <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8">
            <h2 className="font-medium mb-2">Decisionmakerr</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
              A dice roller for when you can't decide.
            </p>
            <a 
              href="https://decisionmakerr.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              decisionmakerr.com
            </a>
          </div>

          <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8">
            <h2 className="font-medium mb-2">Paper 86</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-2 leading-relaxed">
              A 60-second paper drift game.
            </p>
            <a 
              href="https://paper-86.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              paper-86.vercel.app
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
