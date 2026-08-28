export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-4xl font-bold mb-16">About</h1>
        
        <div className="prose prose-lg max-w-2xl">
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            86 Drift is Andrew Coomes's studio.
          </p>
          
          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            The name is leftover from racing. The work is software.
          </p>

          <p className="text-lg text-neutral-600 leading-relaxed mb-6">
            Portland, Oregon.
          </p>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-neutral-600">
              <a 
                href="https://andrewcoomes.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors"
              >
                andrewcoomes.com
              </a>
              {' · '}
              <a 
                href="https://www.linkedin.com/in/andrewcoomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-neutral-900 transition-colors"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
