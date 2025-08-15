import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'FiveAtech - Empowering Businesses with Technology',
    template: '%s | FiveAtech'
  },
  description: 'Leading software house specializing in WordPress, E-commerce, Shopify, and custom software development solutions.',
  keywords: ['software development', 'web development', 'mobile apps', 'wordpress', 'shopify', 'e-commerce'],
  authors: [{ name: 'FiveAtech' }],
  creator: 'FiveAtech',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fiveatech.com',
    title: 'FiveAtech - Empowering Businesses with Technology',
    description: 'Leading software house specializing in WordPress, E-commerce, Shopify, and custom software development solutions.',
    siteName: 'FiveAtech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FiveAtech - Empowering Businesses with Technology',
    description: 'Leading software house specializing in WordPress, E-commerce, Shopify, and custom software development solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
 
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" suppressHydrationWarning>
  <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  </body>
</html>

  );
}