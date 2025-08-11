# 🚀 Guia de Deploy - Bot Discord CS2

Este guia mostra como fazer deploy do seu bot Discord CS2 em diferentes plataformas gratuitas para que ele funcione 24/7 sem precisar manter seu computador ligado.

## 📋 Plataformas Recomendadas

### 1. 🚂 Railway (Recomendado)
- **Prós**: Fácil de usar, deploy automático, boa documentação
- **Contras**: Plano gratuito limitado ($5 crédito/mês)
- **Guia**: Ver `DEPLOY-RAILWAY.md`

### 2. 🎨 Render
- **Prós**: Plano gratuito generoso, SSL automático
- **Contras**: Pode "dormir" após inatividade
- **Site**: [render.com](https://render.com)

### 3. 🟣 Heroku
- **Prós**: Muito popular, boa documentação
- **Contras**: Não tem mais plano gratuito
- **Site**: [heroku.com](https://heroku.com)

### 4. 🔄 Replit
- **Prós**: Fácil de usar, IDE online
- **Contras**: Pode ser instável para bots
- **Site**: [replit.com](https://replit.com)

## 🔧 Preparação Geral

### Arquivos Necessários
Todos esses arquivos já estão incluídos no projeto:

- `package.json` - Dependências e scripts
- `Procfile` - Para Heroku
- `railway.json` - Para Railway
- `keep-alive.js` - Servidor HTTP para manter ativo
- `.env.example` - Exemplo de variáveis de ambiente

### Variáveis de Ambiente
Todas as plataformas precisam dessas variáveis:

```env
DISCORD_TOKEN=seu_token_do_discord
GUILD_ID=id_do_seu_servidor
CLIENT_ID=id_do_cliente_do_bot
NODE_ENV=production
```

## 🚂 Railway (Recomendado)

### Passos Rápidos:
1. Faça push do código para GitHub
2. Conecte Railway ao repositório
3. Configure variáveis de ambiente
4. Deploy automático!

**Guia detalhado**: `DEPLOY-RAILWAY.md`

## 🎨 Render

### Configuração:
1. **Conecte** seu repositório GitHub
2. **Tipo**: Web Service
3. **Build Command**: `npm install`
4. **Start Command**: `npm start`
5. **Adicione** variáveis de ambiente

### Manter Ativo:
- Configure UptimeRobot para fazer ping em `/ping`
- URL: `https://seu-app.onrender.com/ping`

## 🟣 Heroku

### Configuração:
```bash
# Instalar Heroku CLI
npm install -g heroku

# Login
heroku login

# Criar app
heroku create seu-bot-cs2

# Configurar variáveis
heroku config:set DISCORD_TOKEN=seu_token
heroku config:set GUILD_ID=seu_guild_id
heroku config:set CLIENT_ID=seu_client_id
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

## 🔄 Replit

### Configuração:
1. **Importe** repositório do GitHub
2. **Configure** variáveis no painel "Secrets"
3. **Execute** com `npm start`
4. **Mantenha** ativo com UptimeRobot

## 🔍 Verificação de Funcionamento

### Logs para Procurar:
```
✅ Bot online como [Nome do Bot]!
🔄 Registrando comandos slash...
✅ Comandos slash registrados com sucesso!
🌐 Keep-alive server rodando na porta 3000
```

### Teste os Comandos:
- `/time` - Deve mostrar horário atual
- `/ranking` - Deve mostrar ranking de times
- `/jogador s1mple` - Deve mostrar stats do jogador

## 🛠️ Solução de Problemas

### Bot não inicia:
1. **Verifique** se todas as variáveis estão configuradas
2. **Confirme** que o token está correto
3. **Veja** os logs de erro da plataforma

### Comandos não aparecem:
1. **Aguarde** até 1 hora (comandos globais)
2. **Verifique** se GUILD_ID está correto
3. **Reinicie** o bot

### Erro de permissões:
1. **Verifique** intents no Discord Developer Portal
2. **Confirme** permissões do bot no servidor

## 💡 Dicas de Segurança

- ❌ **NUNCA** commite o arquivo `.env` com tokens reais
- ✅ **SEMPRE** use variáveis de ambiente na plataforma
- 🔄 **REGENERE** tokens se expostos acidentalmente
- 📝 **DOCUMENTE** apenas com valores de exemplo

## 📊 Monitoramento

### UptimeRobot (Gratuito):
1. **Cadastre-se** em [uptimerobot.com](https://uptimerobot.com)
2. **Adicione** monitor HTTP(S)
3. **URL**: `https://seu-app.com/ping`
4. **Intervalo**: 5 minutos

### Status Endpoints:
- `/` - Status geral do bot
- `/health` - Health check detalhado
- `/ping` - Ping simples

---

🎉 **Parabéns!** Seu bot agora roda 24/7 na nuvem!

Para deploy rápido no Railway, veja: `DEPLOY-RAILWAY.md`