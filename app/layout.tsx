import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Iria Gastrobar - Rediseño Digital',
  description: 'Gastrobar minimalista con cocina de mercado y producto local.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
