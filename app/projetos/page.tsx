import type { Metadata } from 'next';
import PortfolioExperience from '../portfolio-experience';
import SiteNav from '../site-nav';

export const metadata: Metadata = {
  title: 'Projetos | Roberto Guidoni',
  description: 'Onze projetos de marketing, mídia, dados, atendimento e automação com demonstrações navegáveis.',
};

export default function ProjetosPage() {
  return <main className="inner-page projects-page"><SiteNav active="projetos" /><PortfolioExperience /></main>;
}
