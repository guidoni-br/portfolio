type SiteNavProps = { active?: 'curriculo' | 'projetos' | 'competencias' };

export default function SiteNav({ active }: SiteNavProps) {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <a className="site-brand" href="/">Roberto Guidoni</a>
      <div>
        <a aria-current={active === 'curriculo' ? 'page' : undefined} href="/curriculo">Currículo</a>
        <a aria-current={active === 'projetos' ? 'page' : undefined} href="/projetos">Projetos</a>
        <a aria-current={active === 'competencias' ? 'page' : undefined} href="/competencias">Competências</a>
      </div>
      <a className="nav-contact" href="https://wa.me/5511965188428" target="_blank" rel="noopener">Contato ↗</a>
    </nav>
  );
}
