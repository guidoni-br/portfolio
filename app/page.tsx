import PortfolioExperience from './portfolio-experience';

const paths = [
  {
    number: '01',
    label: 'Recrutadores',
    title: 'Conheça minha trajetória',
    copy: 'Experiência, competências e uma visão direta sobre como trabalho.',
    href: '#perfil',
  },
  {
    number: '02',
    label: 'Clientes e parceiros',
    title: 'Explore os projetos',
    copy: 'Produtos navegáveis criados para resolver gargalos reais de marketing e operação.',
    href: '#projetos',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <nav className="masthead" aria-label="Navegação principal">
          <span>Roberto Guidoni</span>
          <span className="masthead-center">Marketing · Operações · Tecnologia</span>
          <a href="#contato">Contato ↘</a>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">Portfólio profissional · 2026</p>
          <h1 id="hero-title">Escolha seu<br /><em>caminho.</em></h1>
          <p className="intro">Eu conecto <strong>mídia, dados e produto</strong> para melhorar campanhas e transformar rotinas operacionais em sistemas funcionais.</p>
        </div>

        <div className="path-grid" aria-label="Escolha uma forma de conhecer o portfólio">
          {paths.map((path) => (
            <a className="path" href={path.href} key={path.number}>
              <span className="path-number">{path.number}</span>
              <span className="path-label">{path.label}</span>
              <span className="path-title">{path.title}</span>
              <span className="path-copy">{path.copy}</span>
              <span className="path-arrow" aria-hidden="true">↘</span>
            </a>
          ))}
        </div>

        <div className="hero-footer">
          <span>Head de Gestão de Tráfego Pago · Smart</span>
          <span>São Caetano do Sul · Brasil</span>
        </div>
      </section>

      <PortfolioExperience />
    </main>
  );
}
