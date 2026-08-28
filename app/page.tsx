const paths = [
  {
    number: '01',
    label: 'Para recrutadores',
    title: 'Trajetória e competências',
    copy: 'Experiência, formação, repertório e o contexto por trás dos projetos.',
    href: '/curriculo',
    tone: 'oxide',
  },
  {
    number: '02',
    label: 'Para clientes e parceiros',
    title: 'Projetos e demonstrações',
    copy: 'Soluções navegáveis para mídia, dados, atendimento e operação.',
    href: '/projetos',
    tone: 'sage',
  },
];

export default function Home() {
  return (
    <main className="gate">
      <div className="gate-orbit orbit-one" aria-hidden="true" />
      <div className="gate-orbit orbit-two" aria-hidden="true" />

      <nav className="gate-nav" aria-label="Apresentação">
        <span>Roberto Guidoni</span>
        <span>Marketing · Operações · Tecnologia</span>
        <span>Portfólio · 2026</span>
      </nav>

      <header className="gate-title">
        <p>Uma introdução antes do conteúdo</p>
        <h1><span>Escolha seu</span><em>caminho.</em></h1>
      </header>

      <section className="gate-paths" aria-label="Escolha um caminho">
        {paths.map((path) => (
          <a className={`gate-path ${path.tone}`} href={path.href} key={path.number}>
            <span className="gate-path-number">{path.number}</span>
            <span className="gate-path-label">{path.label}</span>
            <h2>{path.title}</h2>
            <p>{path.copy}</p>
            <span className="gate-path-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </section>

      <div className="gate-foot">
        <span>Head de Gestão de Tráfego Pago · Smart</span>
        <span>São Caetano do Sul · atuação no Brasil todo</span>
      </div>
    </main>
  );
}
