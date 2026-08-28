# Limpador inteligente de termos

**Categoria:** Mídia paga e inteligência artificial  
**Status:** Funcional e em evolução

## Visão geral

Aplicação integrada ao dashboard da agência para analisar relatórios de termos de pesquisa do Google Ads com duas passagens de IA, apoiada por um perfil comercial de cliente. Gera sugestões de negativas exatas de alta confiança, preserva a revisão humana e aprimora suas decisões a partir do histórico de cada execução.

## Problema

A análise de termos de pesquisa é recorrente e exige conciliar relevância comercial, regras do cliente e risco de excluir buscas que ainda podem ser úteis.

## Funcionalidades confirmadas

- Importação e análise de relatórios de termos de pesquisa;
- Perfil comercial por cliente em planilha;
- Processamento em lotes e duas passagens de IA;
- Sugestões de negativas exatas de alta confiança;
- Processamento local com banco de dados e controle de acesso;
- Exportação para revisão e publicação manual.

## Limites importantes

Não escreve diretamente na API do Google Ads. Credenciais e prompts completos permanecem no ambiente privado.

## Minha participação

Roberto Guidoni identificou o gargalo operacional, definiu as regras, conduziu a implementação com desenvolvimento assistido por IA, testou o fluxo e acompanha sua evolução dentro do dashboard.
