'use client';

import { useState } from 'react';

type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  problem: string;
  solution: string;
  contribution: string;
  features: string[];
};

const projects: Project[] = [
  { id: 'ads', name: 'Dashboard de marketing', category: 'Marketing Operations', status: 'Funcional e em evolução', problem: 'A operação dependia de plataformas, planilhas e processos manuais diferentes.', solution: 'Centraliza contas, campanhas, metas, alertas, relatórios e histórico em uma operação única.', contribution: 'Identificação da necessidade, produto, fluxos, regras, desenvolvimento assistido por IA, testes e evolução.', features: ['Google Ads e Meta Ads', 'Campanhas e palavras-chave', 'Relatórios por período', 'Histórico por usuário'] },
  { id: 'crm', name: 'CRM + conversões offline', category: 'Marketing e vendas', status: 'Produção', problem: 'O clique era medido, mas o avanço comercial do lead não voltava para a mídia.', solution: 'Organiza o funil comercial e envia conversões offline ao Google Ads sem transformar a rotina em burocracia.', contribution: 'Estrutura do CRM, etapas, regras de negócio, integração, testes e melhoria de usabilidade.', features: ['Kanban comercial', 'Histórico do lead', 'Conversões offline', 'Interface simplificada'] },
  { id: 'maju', name: 'Maju', category: 'Automação e atendimento', status: 'Produção', problem: 'O atendimento inicial consumia tempo, repetia respostas e podia perder informações importantes.', solution: 'SDR controlada por regras que atende no WhatsApp, qualifica, registra e encaminha o lead com contexto.', contribution: 'Jornada, arquitetura, estados, automações, integrações, prompts, testes e implementação online.', features: ['n8n + WhatsApp API', 'Chatwoot', 'Google Sheets + SQL', 'Hospedagem em VPS'] },
  { id: 'tracker', name: 'Clique → WhatsApp', category: 'Tracking', status: 'Funcional e em evolução', problem: 'Anúncio e conversa podiam se perder como eventos desconectados.', solution: 'Preserva origem e UTMs, confirma a conversa e prepara sinais de qualificação e venda.', contribution: 'Problema, fluxo de atribuição, regras, testes e evolução; API auxiliar com apoio da pessoa desenvolvedora.', features: ['Google e Meta Ads', 'Webhook validado', 'Fila persistente', 'Eventos idempotentes'] },
  { id: 'nina', name: 'Nina', category: 'IA e conteúdo', status: 'Funcional', problem: 'Tendências precisam de curadoria, evidência, timing e ângulo antes de virar conteúdo.', solution: 'Agente editorial com personalidade própria que avalia pautas e produz artigos em português ou inglês.', contribution: 'Persona, critérios editoriais, fluxo, prompts e implementação assistida por IA.', features: ['Briefing antes do texto', 'Critérios de evidência', 'SEO e revisão', 'Conteúdo bilíngue'] },
  { id: 'acrux', name: 'Acrux', category: 'Inteligência editorial', status: 'Coautoria', problem: 'A equipe precisava transformar sinais dispersos em matéria-prima editorial organizada.', solution: 'Pipeline que coleta, agrupa eventos, acompanha tendências e prepara pacotes para a Nina.', contribution: 'Projeto em quatro mãos: concepção, fluxos, critérios, implementação e evolução.', features: ['Coleta e eventos', 'Curadoria', 'Pacotes editoriais', 'Console de execução'] },
  { id: 'clipagem', name: 'Clipagem jurídica', category: 'Automação de conteúdo', status: 'Produção', problem: 'Buscar notícias jurídicas manualmente tomava tempo recorrente da equipe de Social Media.', solution: 'Acervo pesquisável com filtros de área, fonte, relevância e período.', contribution: 'Idealização, critérios, construção, testes, implementação e aprimoramento contínuo.', features: ['Busca textual', 'Filtros combinados', 'Classificação de relevância', 'Fontes jurídicas'] },
  { id: 'biblioteca', name: 'Biblioteca visual', category: 'IA e design systems', status: 'Funcional e em evolução', problem: 'Sites criados por IA repetiam estética de SaaS e estruturas previsíveis.', solution: 'Biblioteca viva de tipografias, cards, botões e referências consultada por agentes durante a criação.', contribution: 'Concepção, categorias, fluxo de referências, orientação do agente e otimização contínua.', features: ['Referências externas', 'Repertório evolutivo', 'Varredura semanal', 'Uso por agentes'] },
  { id: 'processual', name: 'Acompanhamento processual', category: 'Legal Operations', status: 'Em desenvolvimento', problem: 'Advogados consultam processos repetidamente para descobrir novas movimentações.', solution: 'Monitora processos cadastrados, identifica atualizações e notifica o responsável.', contribution: 'Problema, proposta, fluxo, regras de negócio, prototipação e testes.', features: ['Cadastro de processos', 'Monitoramento', 'Notificações', 'Dashboard de movimentações'] },
  { id: 'termos', name: 'Limpador de termos + IA', category: 'Mídia paga e IA', status: 'Funcional e em evolução', problem: 'A limpeza de termos é recorrente, minuciosa e arriscada quando feita com pouca contextualização.', solution: 'Duas passagens de IA sugerem negativas exatas usando o perfil comercial e o histórico de decisões.', contribution: 'Gargalo, regras, construção assistida por IA, testes e evolução dentro do dashboard.', features: ['Processamento em lotes', 'Perfil por cliente', 'Revisão humana', 'Aprendizado por histórico'] },
  { id: 'financeiro', name: 'Dashboard financeiro', category: 'Dados · projeto pessoal', status: 'Experimental', problem: 'Era preciso experimentar formas mais claras de organizar e visualizar gastos pessoais.', solution: 'Ferramenta local para receitas, despesas, saldo, categorias, filtros e exportação.', contribution: 'Projeto pessoal idealizado e construído como laboratório de desenvolvimento assistido por IA.', features: ['Filtros por período', 'Categorias', 'Gráficos e saldo', 'SQLite local'] },
];

const skillGroups = [
  ['Estratégia', 'Visão integrada de marketing', 'Aquisição', 'Marketing Operations', 'Jornada e público'],
  ['Mídia e dados', 'Google Ads', 'Meta Ads', 'Otimização', 'Tracking', 'Conversões offline'],
  ['Produto e automação', 'Fluxos', 'Regras de negócio', 'IA aplicada', 'Ferramentas internas', 'Integrações'],
  ['Liderança', 'Comunicação', 'Pensamento crítico', 'Resolução de problemas', 'Coordenação prática'],
];

export default function PortfolioExperience() {
  const [selectedId, setSelectedId] = useState('ads');
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0];
  const demoUrl = `https://guidoni-br.github.io/portfolio/demonstracoes.html#${selected.id}`;

  return (
    <>
      <section className="statement" aria-labelledby="statement-title">
        <p className="section-index">A tese</p>
        <h2 id="statement-title">O problema vem antes<br />da <em>tecnologia.</em></h2>
        <p>Eu identifico gargalos de marketing e operação, desenho a solução e uso desenvolvimento assistido por IA para colocá-la em funcionamento. Não como exercício visual, mas como ferramenta de trabalho.</p>
      </section>

      <section id="projetos" className="projects-section" aria-labelledby="projects-title">
        <div className="section-heading">
          <p className="section-index">01 / Projetos</p>
          <h2 id="projects-title">Onze soluções.<br /><em>Um mesmo método.</em></h2>
          <p>Selecione um projeto para entender o problema, a solução e minha participação. As demonstrações usam dados fictícios.</p>
        </div>

        <div className="project-browser">
          <div className="project-list" role="list" aria-label="Projetos">
            {projects.map((project, index) => (
              <button className={project.id === selected.id ? 'project-row active' : 'project-row'} onClick={() => setSelectedId(project.id)} key={project.id} aria-pressed={project.id === selected.id}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{project.name}</strong>
                <small>{project.category}</small>
                <i aria-hidden="true">→</i>
              </button>
            ))}
          </div>

          <article className="project-detail" aria-live="polite">
            <div className="detail-top"><span>{selected.category}</span><span className="status"><i />{selected.status}</span></div>
            <h3>{selected.name}</h3>
            <dl>
              <div><dt>Problema</dt><dd>{selected.problem}</dd></div>
              <div><dt>Solução</dt><dd>{selected.solution}</dd></div>
              <div><dt>Minha participação</dt><dd>{selected.contribution}</dd></div>
            </dl>
            <ul>{selected.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <a className="demo-link" href={demoUrl} target="_blank" rel="noopener">Abrir demonstração navegável <span>↗</span></a>
          </article>
        </div>
      </section>

      <section id="perfil" className="profile-section" aria-labelledby="profile-title">
        <div className="section-heading light-heading">
          <p className="section-index">02 / Perfil</p>
          <h2 id="profile-title">Mídia, operação<br />e <em>produto.</em></h2>
        </div>
        <div className="profile-grid">
          <article className="current-role">
            <div className="role-meta"><span>Atual</span><span>Desde dezembro de 2025</span></div>
            <h3>Head de Gestão de<br />Tráfego Pago · Smart</h3>
            <p>Cuido da operação completa de mídia paga e da frente de inovação da agência: estratégia, execução, tracking, copy, análise e construção dos sistemas usados pela equipe e pelos clientes.</p>
            <p>Coordeno diretamente um estagiário e uma pessoa desenvolvedora.</p>
          </article>
          <div className="career-list">
            <div><span>Original SP Tattoo</span><strong>Auxiliar de Marketing Digital</strong></div>
            <div><span>Loja Paiol</span><strong>Vendas consultivas</strong></div>
            <div><span>Unittá</span><strong>Redação publicitária</strong></div>
            <div><span>Formação</span><strong>Comunicação Social · Jornalismo</strong></div>
          </div>
        </div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-index">03 / Competências</p>
          <h2 id="skills-title">Repertório que<br /><em>se conecta.</em></h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map(([title, ...skills], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
        <a className="outline-link" href="https://guidoni-br.github.io/portfolio/competencias.html" target="_blank" rel="noopener">Ver competências e ferramentas completas ↗</a>
      </section>

      <footer id="contato" className="contact-section">
        <p className="section-index">04 / Contato</p>
        <div>
          <h2>Tem um desafio<br /><em>real?</em></h2>
          <p>Estou aberto a posições CLT ou PJ e a projetos em que mídia, operação e tecnologia precisem trabalhar juntas.</p>
          <div className="contact-links">
            <a className="whatsapp" href="https://wa.me/5511965188428" target="_blank" rel="noopener">Falar no WhatsApp <span>↗</span></a>
            <a href="mailto:rrodriguesguidoni@gmail.com">E-mail ↗</a>
            <a href="https://www.linkedin.com/in/roberto-guidoni-3a348646/" target="_blank" rel="noopener">LinkedIn ↗</a>
            <a href="https://github.com/guidoni-br" target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
        <div className="contact-footer"><span>Roberto Guidoni · 2026</span><span>São Caetano do Sul · atuação no Brasil todo</span></div>
      </footer>
    </>
  );
}
