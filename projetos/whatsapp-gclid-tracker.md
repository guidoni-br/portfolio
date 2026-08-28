# Rastreador Google/Meta → WhatsApp

**Categoria:** Tracking e conversões offline  
**Status:** Funcional e em evolução

## Visão geral

Serviço para rastrear leads de campanhas de clique direto para WhatsApp, preservando a origem e informações como UTMs. Conecta cliques de Google Ads e Meta Ads a conversas confirmadas, enriquece o lead para planilha ou CRM e prepara sinais de qualificação e venda.

## Problema

O clique no anúncio e a conversa iniciada no WhatsApp podem se perder como eventos desconectados. Isso reduz a capacidade de relacionar mídia, atendimento e resultado comercial com precisão.

## Fluxo documentado

Google Ads ou Meta Ads → landing page ou conversa → webhook → banco de dados → processamento → Google Sheets ou CRM → conversão offline.

## Garantias documentadas

- O lead não é atribuído por telefone ou estimativa de horário;
- O identificador de clique só é disponibilizado após mensagem válida;
- O webhook é validado e os identificadores evitam duplicidade;
- Há fila persistente para falhas temporárias de planilha;
- Eventos de conversão são idempotentes.

## Demonstração

O repositório de origem inclui um modo de demonstração local sem credenciais e sem chamadas a APIs externas.

## Minha participação

Roberto Guidoni identificou o problema, definiu o fluxo e as regras de atribuição e conduziu a implementação, os testes e a evolução com desenvolvimento assistido por IA. Configurações específicas de servidor e uma API auxiliar tiveram apoio da pessoa desenvolvedora da equipe.
