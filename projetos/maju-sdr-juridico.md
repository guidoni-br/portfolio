# Maju — SDR jurídico automatizado

**Categoria:** Automação e atendimento  
**Status:** Produção

## Visão geral

Maju é uma SDR automatizada, online e funcional, para o primeiro atendimento de leads pelo WhatsApp. A primeira aplicação foi jurídica, mas a estrutura é adaptável a outros serviços. Ela organiza o contato inicial, entende a demanda, registra informações, qualifica o lead e encaminha a conversa quando é necessária a participação humana.

## Problema

Leads jurídicos chegam com níveis distintos de informação e intenção. O atendimento inicial pode consumir tempo, repetir respostas, perder dados importantes ou demorar para encaminhar casos relevantes.

## Solução e funcionamento

Foi desenvolvido um fluxo automatizado em n8n, hospedado em servidor VPS e conectado à API oficial do WhatsApp da Meta. A operação utiliza Chatwoot para o atendimento, Google Sheets como apoio operacional e banco de dados SQL para persistência. O fluxo mantém controle de estado, regras de negócio e uso restrito de inteligência artificial, reduzindo respostas fora do escopo e preservando o histórico necessário para o encaminhamento.

## Arquitetura confirmada

- n8n como orquestrador dos fluxos;
- API oficial do WhatsApp da Meta;
- Chatwoot na operação de atendimento;
- Google Sheets como apoio à rotina;
- Banco de dados SQL;
- Hospedagem em servidor VPS.

## Funcionalidades confirmadas

- Recebimento e normalização de leads no WhatsApp;
- Descarte de eventos de status e tratamento de tipos de mensagem;
- Identificação de leads existentes, controle de estado e prevenção de respostas repetitivas;
- Atendimento inicial, coleta de informações, esclarecimento de dúvidas e avaliação preliminar do potencial caso;
- Qualificação, encaminhamento humano, registro de informações e controle de spam;
- Redução de chamadas desnecessárias à IA;
- Regras, estados e limites de resposta para manter o atendimento controlado e aderente ao fluxo.

## Status utilizados no fluxo

`novo`, `spam`, `desqualificado`, `dúvida_esclarecida`, `qualificado`, `proposta_feita` e `processo_aberto`.

## Minha participação

- Desenho da jornada, arquitetura do fluxo, status e regras de negócio;
- Desenvolvimento das automações, integração de ferramentas e otimização de prompts;
- Testes com situações diversas, correção de loops e implementação online.

## Impacto

Realiza o atendimento inicial de ponta a ponta, organiza informações e permite que o atendimento humano seja acionado com mais contexto quando necessário. A combinação de regras de negócio, controle de estado e uso restrito de IA reduz desvios e respostas improvisadas. Não substitui advogados nem realiza análise jurídica definitiva.
