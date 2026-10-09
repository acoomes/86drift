import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://86drift.com'),
  title: '86 Drift',
  description: 'A small studio that builds and runs focused software products.',
  openGraph: {
    title: '86 Drift',
    description: 'A small studio that builds and runs focused software products.',
    url: 'https://86drift.com',
    siteName: '86 Drift',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: '86 Drift',
    description: 'A small studio that builds and runs focused software products.',
  },
  alternates: {
    canonical: 'https://86drift.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen flex flex-col">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-3xl mx-auto px-6 py-5">
            <a 
              href="/" 
              className="font-medium inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
            >
              86 Drift
            </a>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-24">
          <div className="max-w-3xl mx-auto px-6 py-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
              <div>
                <a 
                  href="mailto:86drift@gmail.com"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
                >
                  86drift@gmail.com
                </a>
              </div>
              <div>
                Run by{' '}
                <a 
                  href="https://andrewcoomes.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
                >
                  Andrew Coomes
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
