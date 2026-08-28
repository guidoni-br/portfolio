import type { Metadata } from 'next';
import SiteNav from '../site-nav';

export const metadata: Metadata = {
  title: 'Competências | Roberto Guidoni',
  description: 'Competências e ferramentas de marketing, mídia, dados, automação, produto e liderança.',
};

type Rated = [string, number];

const groups: { title: string; tone: string; items: Rated[] }[] = [
  { title: 'Estratégia e marketing', tone: 'oxide', items: [['Visão integrada de marketing',5],['Estratégia de aquisição',5],['Marketing para negócios de serviço',5],['Marketing Operations',5],['Identificação de problemas operacionais',5],['Planejamento de marketing',4],['Estratégia de conteúdo',4],['Posicionamento e oferta',4],['Leitura de público e jornada',5],['Copywriting',4],['Branding',3],['Design visual',2]] },
  { title: 'Mídia paga', tone: 'sage', items: [['Google Ads',5],['Meta Ads',5],['TikTok Ads',4],['Estratégia multicanal',4],['Otimização de campanhas',5],['Análise de métricas',5],['Pesquisa e gestão de palavras-chave',5],['Limpeza de termos de pesquisa',5],['Tracking e UTMs',4],['Conversões offline',5],['Estratégia de criativos',4],['Gestão técnica de e-commerce',2]] },
  { title: 'Produto, automação e IA', tone: 'ink', items: [['Automação de processos',5],['Desenho de fluxos',5],['Regras de negócio',5],['Aplicação prática de IA',5],['Vibe coding',5],['Visão de produto',5],['Criação de ferramentas internas',5],['Integração entre sistemas',4],['Engenharia de prompts',4],['Agentes de IA',4],['n8n',4],['APIs',3],['Banco de dados',3],['Arquitetura de software',3],['Programação tradicional',2],['Segurança de software',2]] },
  { title: 'Dados e inteligência', tone: 'paper', items: [['Análise de dados de marketing',5],['Construção de dashboards',5],['Transformação de dados em decisão',5],['Criação de relatórios',5],['Definição de indicadores',4],['Qualidade e organização de dados',4],['Estatística avançada',2],['Business Intelligence',3]] },
  { title: 'Liderança e colaboração', tone: 'wash', items: [['Liderança prática',4],['Coordenação de projetos',4],['Comunicação',5],['Comunicação entre áreas',5],['Pensamento crítico',5],['Autodidatismo',5],['Resolução de problemas',5],['Organização de processos',5],['Gestão formal de pessoas',3],['Delegação',3],['Apresentação e ensino',3],['Negociação comercial',3]] },
];

const tools: Rated[] = [['Google Ads',5],['Meta Ads',5],['TikTok Ads',4],['Google Analytics 4',4],['Google Tag Manager',4],['Google Search Console',4],['Looker Studio',4],['Google Sheets',5],['Microsoft Excel',4],['n8n',4],['WhatsApp Cloud API',4],['Chatwoot',4],['PostgreSQL',3],['APIs REST e webhooks',3],['Postman',3],['Docker',3],['Railway',3],['VPS e Hostinger',3],['Git',3],['GitHub',3],['Codex',5],['ChatGPT',5],['OpenCode',4],['DeepSeek API',3],['Python',3],['Streamlit',3],['HTML',3],['CSS',3],['JavaScript',2],['VS Code',4],['WordPress',4],['SEO',4],['GEO e otimização para LLMs',3],['mLabs',4],['Canva',4],['Ferramentas de IA generativa',5],['Agentes de IA',4],['Automação de relatórios',5],['Integração de conversões offline',5],['Criação assistida por vibe coding',5]];

function Rating({ value }: { value: number }) {
  return <span className="rating" aria-label={`${value} de 5`}>{[1,2,3,4,5].map((dot) => <i className={dot <= value ? 'filled' : ''} key={dot} />)}</span>;
}

function RatingList({ items }: { items: Rated[] }) {
  return <div className="rating-list">{items.map(([name, rating]) => <div key={name}><span>{name}</span><Rating value={rating} /></div>)}</div>;
}

export default function CompetenciasPage() {
  const featured: Rated[] = [['Visão integrada de marketing',5],['Google Ads',5],['Marketing Operations',5],['Automação de processos',5],['Construção de dashboards',5],['Comunicação',5]];
  return (
    <main className="inner-page skills-page">
      <SiteNav active="competencias" />
      <header className="inner-hero skills-hero">
        <p className="section-index">Competências e ferramentas</p>
        <h1><span>Repertório</span><em>conectado.</em></h1>
        <p className="skills-intro">Notas de 1 a 5 baseadas em autonomia prática, profundidade de uso e frequência de aplicação no trabalho.</p>
      </header>

      <section className="featured-skills">
        <p className="section-index">Resumo</p>
        <RatingList items={featured} />
      </section>

      <section className="full-competencies">
        <div className="full-heading"><p className="section-index">Avaliação completa</p><h2>Competências por<br /><em>categoria.</em></h2></div>
        <div className="competency-groups">{groups.map((group, index) => <article className={`competency-group ${group.tone}`} key={group.title}><div className="group-title"><span>0{index + 1}</span><h3>{group.title}</h3></div><RatingList items={group.items} /></article>)}</div>
      </section>

      <section className="tools-section">
        <div className="full-heading"><p className="section-index">Ferramentas</p><h2>Plataformas que fazem<br />parte da <em>rotina.</em></h2></div>
        <RatingList items={tools} />
      </section>

      <footer className="skills-footer"><a href="/curriculo">← Voltar ao currículo</a><a href="/projetos">Ver projetos ↗</a></footer>
    </main>
  );
}
