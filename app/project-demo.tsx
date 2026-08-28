'use client';

import { useMemo, useState } from 'react';

type DemoProps = { projectId: string };

const Metric = ({ label, value }: { label: string; value: string }) => <div className="demo-metric"><small>{label}</small><strong>{value}</strong></div>;

const dashboardData: Record<string, string[]> = {
  '7 dias': ['R$ 5.480', '43', 'R$ 127'],
  '30 dias': ['R$ 24.380', '184', 'R$ 132'],
  'Trimestre': ['R$ 71.940', '568', 'R$ 126'],
};

export default function ProjectDemo({ projectId }: DemoProps) {
  const [period, setPeriod] = useState('30 dias');
  const [active, setActive] = useState(true);
  const [stage, setStage] = useState(0);
  const [message, setMessage] = useState('Olá! Gostaria de entender como funciona o atendimento.');
  const [chat, setChat] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [progress, setProgress] = useState(0);

  const dashboard = useMemo(() => dashboardData[period] ?? dashboardData['30 dias'], [period]);

  if (projectId === 'ads') return <div className="inline-demo"><DemoHead title="Painel de mídia" /><div className="demo-controls">{['7 dias','30 dias','Trimestre'].map(item => <button className={period === item ? 'active' : ''} onClick={() => setPeriod(item)} key={item}>{item}</button>)}</div><div className="demo-metrics"><Metric label="Investido" value={dashboard[0]} /><Metric label="Conversões" value={dashboard[1]} /><Metric label="CPL" value={dashboard[2]} /></div><div className="demo-table"><div><span>Pesquisa · serviço prioritário</span><strong>{active ? 'Ativa' : 'Pausada'}</strong><button onClick={() => setActive(!active)}>{active ? 'Pausar' : 'Ativar'}</button></div><div><span>Remarketing · retorno</span><strong>Ativa</strong><button onClick={() => setResult('Campanha aberta para edição')}>Editar</button></div></div>{result && <p className="demo-result">{result}</p>}</div>;

  if (projectId === 'crm') {
    const stages = ['Contato','Em conversa','Proposta','Fechado'];
    return <div className="inline-demo"><DemoHead title="Funil comercial" /><div className="mini-kanban">{stages.map((item, index) => <div className={stage === index ? 'current' : ''} key={item}><small>{item}</small>{stage === index && <article><strong>Marina Alves</strong><span>Origem · Google Ads</span><button onClick={() => setStage(Math.min(stage + 1, 3))}>{stage === 3 ? 'Resolvido ✓' : 'Avançar →'}</button></article>}</div>)}</div><button className="demo-secondary" onClick={() => setStage(0)}>Restaurar demonstração</button></div>;
  }

  if (projectId === 'maju') return <div className="inline-demo"><DemoHead title="Atendimento da Maju" /><div className="demo-chat"><p className="bot">Olá! Sou a Maju. Vou fazer algumas perguntas para encaminhar seu atendimento.</p>{chat.map((item, index) => <p className={index % 2 ? 'bot' : 'user'} key={`${item}-${index}`}>{item}</p>)}</div><form className="demo-form" onSubmit={(event) => { event.preventDefault(); if (!message.trim()) return; setChat([...chat, message, 'Entendi. Qual é a cidade e quando isso aconteceu?']); setMessage(''); }}><input value={message} onChange={(event) => setMessage(event.target.value)} aria-label="Mensagem para Maju" /><button>Enviar</button></form></div>;

  if (projectId === 'tracker') return <ActionDemo title="Simulador de atribuição" placeholder="utm_campaign=pesquisa_servico" button="Rastrear conversa" input={input} setInput={setInput} result={result} onRun={() => setResult(input ? `✓ Origem preservada · ${input}` : 'Informe uma UTM para simular.')} />;

  if (projectId === 'nina') return <div className="inline-demo"><DemoHead title="Mesa editorial" /><div className="demo-controls">{['Mudança regulatória','Decisão relevante','Tendência de mercado'].map(topic => <button onClick={() => { setInput(topic); setResult(''); }} className={input === topic ? 'active' : ''} key={topic}>{topic}</button>)}</div><div className="draft"><small>Rascunho editorial</small><h4>{result ? input : 'Selecione uma pauta'}</h4><p>{result || 'A Nina montará contexto, efeito prático, fontes necessárias e ponto de atenção.'}</p></div><button className="demo-primary" disabled={!input} onClick={() => setResult('O tema foi avaliado por relevância, timing e evidências. Estrutura pronta para revisão humana.')}>Gerar estrutura</button></div>;

  if (projectId === 'acrux') return <div className="inline-demo"><DemoHead title="Pipeline editorial" /><div className="pipeline">{['Coleta','Eventos','Curadoria','Pacote'].map((item,index) => <span className={progress > index ? 'done' : progress === index ? 'current' : ''} key={item}>{item}</span>)}</div><button className="demo-primary" onClick={() => setProgress(progress >= 4 ? 0 : progress + 1)}>{progress >= 4 ? 'Reiniciar pipeline' : 'Executar próxima etapa'}</button><p className="demo-result">{progress === 0 ? 'Pipeline aguardando execução.' : progress >= 4 ? '✓ Pacote editorial pronto para a Nina.' : `Etapa ${progress} concluída.`}</p></div>;

  if (projectId === 'clipagem') {
    const news = ['STJ define novo entendimento processual','CNJ publica atualização para escritórios','TST consolida decisão trabalhista'];
    const filtered = news.filter(item => item.toLowerCase().includes(input.toLowerCase()));
    return <div className="inline-demo"><DemoHead title="Acervo jurídico" /><div className="demo-form"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Buscar título ou fonte" /><button onClick={() => setResult(`${filtered.length} resultado(s)`)}>Buscar</button></div><div className="demo-list">{filtered.map((item,index) => <button key={item} onClick={() => setResult(`Matéria ${index + 1} selecionada para pauta`)}><span>{item}</span><small>{['STJ','CNJ','TST'][index] ?? 'Fonte'} · relevância alta</small></button>)}</div>{result && <p className="demo-result">{result}</p>}</div>;
  }

  if (projectId === 'biblioteca') return <ActionDemo title="Biblioteca viva" placeholder="https://site-de-referencia.com" button="Adicionar referência" input={input} setInput={setInput} result={result} onRun={() => setResult(input ? '✓ Referência analisada: tipografia, botões e composição adicionados.' : 'Cole um endereço para analisar.')} />;

  if (projectId === 'processual') return <div className="inline-demo"><DemoHead title="Monitor processual" /><div className="demo-table"><div><span>Processo 0001234-56.2026</span><strong>{result || 'Sem atualização'}</strong><button onClick={() => setResult('Nova movimentação · conclusão ao relator')}>Verificar</button></div><div><span>Processo 0009876-12.2026</span><strong>Atualizado ontem</strong><button onClick={() => setResult('Prazo registrado e responsável notificado')}>Abrir</button></div></div>{result && <p className="demo-result">{result}</p>}</div>;

  if (projectId === 'termos') return <div className="inline-demo"><DemoHead title="Análise de termos" /><textarea className="demo-textarea" value={input} onChange={(event) => setInput(event.target.value)} placeholder={'consulta grátis\nmodelo de contrato\nadvogado empresarial'} /><button className="demo-primary" onClick={() => setResult(input ? '2 termos relevantes · 1 sugestão de negativa para revisão humana.' : 'Adicione termos de pesquisa.')}>Analisar com duas passagens</button>{result && <p className="demo-result">{result}</p>}</div>;

  return <div className="inline-demo"><DemoHead title="Visão financeira" /><div className="demo-controls">{['Agosto','Julho','Junho'].map(item => <button className={period === item ? 'active' : ''} onClick={() => setPeriod(item)} key={item}>{item}</button>)}</div><div className="demo-metrics"><Metric label="Receitas" value={period === 'Julho' ? 'R$ 8.900' : 'R$ 9.600'} /><Metric label="Despesas" value={period === 'Junho' ? 'R$ 6.140' : 'R$ 5.780'} /><Metric label="Saldo" value="R$ 3.820" /></div><div className="finance-bars"><span style={{width:'72%'}}>Moradia</span><span style={{width:'48%'}}>Alimentação</span><span style={{width:'31%'}}>Transporte</span></div></div>;
}

function DemoHead({ title }: { title: string }) { return <div className="demo-head"><span>Demonstração interativa</span><strong>{title}</strong></div>; }

function ActionDemo({ title, placeholder, button, input, setInput, result, onRun }: { title: string; placeholder: string; button: string; input: string; setInput: (value: string) => void; result: string; onRun: () => void }) {
  return <div className="inline-demo"><DemoHead title={title} /><div className="demo-form"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder={placeholder} /><button onClick={onRun}>{button}</button></div>{result && <p className="demo-result">{result}</p>}</div>;
}
