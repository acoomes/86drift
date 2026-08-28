export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto px-6">
      <section className="py-24">
        <h1 className="text-4xl font-bold mb-16">Contact</h1>
        
        <div className="max-w-2xl">
          <div className="space-y-4">
            <p className="text-lg">
              <a 
                href="mailto:86drift@gmail.com"
                className="text-neutral-900 hover:text-neutral-600 transition-colors font-medium"
              >
                86drift@gmail.com
              </a>
            </p>
            
            <p className="text-lg">
              <a 
                href="https://www.linkedin.com/in/andrewcoomes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-neutral-600 transition-colors font-medium"
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
