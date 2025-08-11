# 🤖 Bot Discord CS2

Bot para Discord que busca e exibe informações de Counter-Strike 2 (CS2) usando a API do HLTV.

## 🚀 Funcionalidades

- **Times**: Informações sobre times (nome, elenco, estatísticas e ranking)
- **Partidas**: Partidas futuras e em andamento (horário, times, formato)
- **Resultados**: Resultados recentes (placar, mapas jogados)
- **Jogadores**: Detalhes de jogadores (time atual, estatísticas, nacionalidade)
- **Ranking**: Ranking mundial dos times de CS2

## 📋 Comandos Disponíveis

- `/time <nome>` - Busca informações sobre um time específico
- `/partida` - Mostra próximas partidas e partidas em andamento
- `/resultado` - Exibe resultados recentes de partidas
- `/jogador <nome>` - Busca informações sobre um jogador específico
- `/ranking` - Mostra o ranking mundial dos times

## 🛠️ Instalação

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Uma aplicação Discord criada no [Discord Developer Portal](https://discord.com/developers/applications)

### Passo a passo

1. **Clone ou baixe este projeto**

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as informações necessárias:
   ```env
   DISCORD_TOKEN=seu_token_do_bot_aqui
   CLIENT_ID=seu_client_id_aqui
   GUILD_ID=seu_guild_id_aqui
   ```

4. **Execute o bot**
   ```bash
   npm start
   ```
   
   Para desenvolvimento (com auto-reload):
   ```bash
   npm run dev
   ```

## 🔧 Configuração do Discord Bot

### 1. Criar uma aplicação Discord

1. Acesse o [Discord Developer Portal](https://discord.com/developers/applications)
2. Clique em "New Application"
3. Dê um nome para sua aplicação
4. Vá para a aba "Bot"
5. Clique em "Add Bot"
6. Copie o token do bot (será usado no `.env`)

### 2. Configurar permissões

Na aba "Bot", certifique-se de que as seguintes permissões estão habilitadas:
- Send Messages
- Use Slash Commands
- Embed Links
- Read Message History

### 3. Convidar o bot para seu servidor

1. Vá para a aba "OAuth2" > "URL Generator"
2. Selecione os scopes:
   - `bot`
   - `applications.commands`
3. Selecione as permissões necessárias:
   - Send Messages
   - Use Slash Commands
   - Embed Links
   - Read Message History
4. Copie a URL gerada e acesse-a para convidar o bot

### 4. Obter IDs necessários

- **CLIENT_ID**: Na aba "General Information" da sua aplicação
- **GUILD_ID**: Clique com botão direito no seu servidor Discord e "Copiar ID" (ative o modo desenvolvedor nas configurações do Discord)

## 📦 Dependências

- **discord.js**: Biblioteca para interagir com a API do Discord
- **hltv**: Biblioteca para acessar dados do HLTV.org
- **dotenv**: Para gerenciar variáveis de ambiente

## 🐛 Solução de Problemas

### Bot não responde aos comandos
- Verifique se o token está correto no arquivo `.env`
- Certifique-se de que o bot tem as permissões necessárias
- Verifique se os comandos foram registrados corretamente (veja o console)

### Erro "Missing Access"
- Verifique se o bot foi convidado para o servidor com as permissões corretas
- Certifique-se de que o bot tem permissão para enviar mensagens no canal

### Dados do HLTV não carregam
- A API do HLTV pode estar temporariamente indisponível devido ao Cloudflare
- O bot atualmente usa dados de exemplo para demonstração
- Para dados reais, você pode implementar um proxy ou usar outras APIs de CS2
- Verifique sua conexão com a internet

### ⚠️ Importante: Dados de Demonstração
Este bot atualmente utiliza **dados de exemplo** para demonstração, pois o HLTV.org implementou proteções Cloudflare que bloqueiam requisições automatizadas. Os dados incluem:
- Times populares como NAVI, FaZe, Astralis
- Jogadores famosos como s1mple, ZywOo, device
- Partidas e resultados fictícios mas realistas

Para usar dados reais:
1. Implemente um servidor proxy
2. Use APIs alternativas de CS2
3. Configure headers de user-agent apropriados
4. Considere usar web scraping com bibliotecas como Puppeteer

## 📝 Notas

- **Dados de Exemplo**: O bot atualmente usa dados fictícios para demonstração devido às limitações do HLTV
- **Estrutura Modular**: O código está organizado com configurações separadas em `config.js`
- **Comandos Slash**: O bot registra comandos slash automaticamente ao iniciar
- **Embeds Visuais**: As mensagens são formatadas com embeds coloridos e emojis
- **Tratamento de Erros**: Inclui tratamento robusto de erros e mensagens informativas
- **Fácil Personalização**: Cores, emojis e limites podem ser facilmente modificados no `config.js`

## 🔄 Implementando Dados Reais

Para implementar dados reais do HLTV, você pode:

1. **Usar um Proxy Server**:
   ```javascript
   const HLTV = require('hltv').configure({
       hltvUrl: 'https://seu-proxy-server.com'
   });
   ```

2. **Implementar Rate Limiting**:
   ```javascript
   const rateLimit = require('express-rate-limit');
   ```

3. **Usar APIs Alternativas**:
   - Steam Web API
   - Faceit API
   - ESL API

4. **Web Scraping com Puppeteer**:
   ```javascript
   const puppeteer = require('puppeteer');
   ```

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades!

## 📄 Licença

Este projeto está sob a licença MIT.