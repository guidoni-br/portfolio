import type { Metadata } from 'next';
import SiteNav from '../site-nav';

export const metadata: Metadata = {
  title: 'Currículo | Roberto Guidoni',
  description: 'Experiência profissional, formação e repertório de Roberto Guidoni.',
};

const scope = [
  ['Mídia e aquisição', 'Google Ads, Meta Ads, TikTok Ads, estratégia multicanal, criativos e otimização.'],
  ['Dados e tracking', 'GA4, GTM, UTMs, conversões offline, dashboards, indicadores e relatórios.'],
  ['Operações e produto', 'Marketing Operations, fluxos, regras de negócio, automações e ferramentas internas.'],
  ['Liderança', 'Coordenação prática, comunicação entre áreas, pensamento crítico e resolução de problemas.'],
];

export default function CurriculoPage() {
  return (
    <main className="inner-page resume-page">
      <SiteNav active="curriculo" />
      <header className="inner-hero resume-hero">
        <p className="section-index">Currículo profissional · 2026</p>
        <h1><span>Roberto</span><em>Guidoni</em></h1>
        <div className="inner-hero-copy">
          <strong>Head de Gestão de Tráfego Pago</strong>
          <p>Estratégia, execução e evolução da operação de mídia, além da construção de sistemas que conectam marketing, vendas e dados.</p>
          <div><a className="hero-whatsapp" href="https://wa.me/5511965188428" target="_blank" rel="noopener">Falar no WhatsApp ↗</a><a href="mailto:rrodriguesguidoni@gmail.com">E-mail ↗</a><a href="https://www.linkedin.com/in/roberto-guidoni-3a348646/" target="_blank" rel="noopener">LinkedIn ↗</a></div>
        </div>
      </header>

      <section className="resume-intro reveal-block">
        <p className="section-index">01 / Perfil</p>
        <div><h2>Estratégia de mídia<br />com visão de <em>operação.</em></h2><p>Uno aquisição, tracking, análise de dados e automação para melhorar tanto a performance das campanhas quanto a rotina de quem as opera. Minha atuação começa no diagnóstico e vai até a execução, o acompanhamento e a evolução da solução.</p></div>
      </section>

      <section className="resume-experience reveal-block">
        <p className="section-index">02 / Experiência</p>
        <div>
          <div className="resume-role-head"><span>Smart · atual</span><span>Desde dezembro de 2025</span></div>
          <h2>Head de Gestão de<br />Tráfego Pago</h2>
          <ul>
            <li>Estratégia, planejamento, execução e otimização em Google Ads e Meta Ads, com conhecimento de TikTok Ads.</li>
            <li>Tracking, UTMs, conversões offline, métricas, copy, criativos e relatórios para apoiar decisões.</li>
            <li>Dashboards, CRM, automações e integrações que conectam mídia, atendimento, clientes e dados.</li>
            <li>Fluxos, regras de negócio, prototipação com IA e evolução das ferramentas a partir do uso real.</li>
            <li>Coordenação direta de um estagiário e uma pessoa desenvolvedora.</li>
          </ul>
          <div className="past-roles">
            <article><span>Original SP Tattoo</span><h3>Auxiliar de Marketing Digital</h3><p>Campanhas, performance, conteúdo, identidade visual e planejamento editorial.</p></article>
            <article><span>Loja Paiol</span><h3>Vendedor</h3><p>Vendas consultivas, atendimento, estoque e experiência do cliente.</p></article>
            <article><span>Unittá</span><h3>Redator Publicitário</h3><p>Blogs, redes sociais, campanhas digitais e demandas de comunicação.</p></article>
          </div>
        </div>
      </section>

      <section className="resume-scope reveal-block">
        <p className="section-index">03 / Escopo</p>
        <div className="scope-list">{scope.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="resume-education reveal-block">
        <p className="section-index">04 / Formação</p>
        <div>
          <h2>Comunicação Social<br /><em>Jornalismo.</em></h2>
          <div className="education-lines">
            <p><span>Universidade São Judas Tadeu</span><strong>Concluída em 2019</strong></p>
            <p><span>Subido de Tráfego · Google Ads</span><strong>2025</strong></p>
            <p><span>Subido de Tráfego · Meta Ads</span><strong>2024</strong></p>
            <p><span>Idiomas</span><strong>Português nativo · Inglês e espanhol intermediários</strong></p>
          </div>
        </div>
      </section>

      <section className="resume-next">
        <p className="section-index">Continue</p>
        <div className="next-links"><a className="oxide" href="/competencias"><span>Competências completas</span><i>↗</i></a><a className="sage" href="/projetos"><span>Projetos navegáveis</span><i>↗</i></a></div>
        <a className="pdf-link" href="https://guidoni-br.github.io/portfolio/output/pdf/curriculo-roberto-guidoni.pdf" target="_blank" rel="noopener">Baixar currículo em PDF ↗</a>
      </section>
    </main>
  );
}
