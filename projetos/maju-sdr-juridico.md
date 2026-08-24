# Maju — SDR jurídico automatizado

**Categoria:** Automação e atendimento  
**Status:** Produção

## Visão geral

Maju é uma SDR automatizada, online e funcional, para o primeiro atendimento de leads pelo WhatsApp. A primeira aplicação foi jurídica, mas a estrutura é adaptável a outros serviços. Ela organiza o contato inicial, entende a demanda, registra informações, qualifica o lead e encaminha a conversa quando é necessária a participação humana.

## Problema

Leads jurídicos chegam com níveis distintos de informação e intenção. O atendimento inicial pode consumir tempo, repetir respostas, perder dados importantes ou demorar para encaminhar casos relevantes.

## Solução e funcionamento

Foi desenvolvido um fluxo automatizado com controle de estado, regras de negócio e uso controlado de inteligência artificial quando necessário. O fluxo trata eventos e tipos de mensagem, identifica leads existentes, previne repetições e mantém o histórico necessário para o encaminhamento.

## Funcionalidades confirmadas

- Recebimento e normalização de leads no WhatsApp;
- Descarte de eventos de status e tratamento de tipos de mensagem;
- Identificação de leads existentes, controle de estado e prevenção de respostas repetitivas;
- Atendimento inicial, coleta de informações, esclarecimento de dúvidas e avaliação preliminar do potencial caso;
- Qualificação, encaminhamento humano, registro de informações e controle de spam;
- Redução de chamadas desnecessárias à IA.

## Status utilizados no fluxo

`novo`, `spam`, `desqualificado`, `dúvida_esclarecida`, `qualificado`, `proposta_feita` e `processo_aberto`.

## Minha participação

- Desenho da jornada, arquitetura do fluxo, status e regras de negócio;
- Desenvolvimento das automações, integração de ferramentas e otimização de prompts;
- Testes com situações diversas, correção de loops e implementação online.

## Impacto

Automatiza parte importante do primeiro atendimento, organiza informações e permite que o atendimento humano seja acionado com mais contexto. Não substitui advogados nem realiza análise jurídica definitiva.

## Informação pendente

A estrutura mencionada para o projeto — n8n, WhatsApp Cloud API, Chatwoot, Google Sheets e PostgreSQL — precisa ser confirmada antes de ser apresentada como stack definitiva.
