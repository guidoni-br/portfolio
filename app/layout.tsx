import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Roberto Guidoni | Marketing, Operações e Tecnologia',
  description: 'Portfólio profissional de Roberto Guidoni: mídia de performance, Marketing Operations, automação e produtos internos.',
  openGraph: {
    title: 'Roberto Guidoni | Marketing, Operações e Tecnologia',
    description: 'Projetos e experiência na interseção entre mídia, operações, dados e tecnologia.',
    images: ['https://guidoni-br.github.io/portfolio/assets/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
