import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '86 Drift',
  description: 'A studio in Portland.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-neutral-900">
        <nav className="border-b border-neutral-200">
          <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg">
              86 Drift
            </a>
            <div className="flex gap-8 text-sm">
              <a href="/work" className="hover:text-neutral-600 transition-colors">
                Work
              </a>
              <a href="/about" className="hover:text-neutral-600 transition-colors">
                About
              </a>
              <a href="/contact" className="hover:text-neutral-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </nav>
        {children}
        <footer className="border-t border-neutral-200 mt-24">
          <div className="max-w-4xl mx-auto px-6 py-8 text-sm text-neutral-600">
            © 2026 86 Drift
          </div>
        </footer>
      </body>
    </html>
  );
}
