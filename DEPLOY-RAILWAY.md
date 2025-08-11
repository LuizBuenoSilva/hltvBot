# 🚀 Deploy Rápido no Railway

## Pré-requisitos
- Conta no [GitHub](https://github.com)
- Conta no [Railway](https://railway.app)
- Bot Discord configurado no [Discord Developer Portal](https://discord.com/developers/applications)

## 📋 Passo a Passo

### 1. Preparar o Código
```bash
# Adicionar arquivos ao Git (exceto .env)
git add .
git commit -m "Preparar para deploy no Railway"
git push origin main
```

### 2. Deploy no Railway

1. **Acesse** [railway.app](https://railway.app) e faça login
2. **Clique** em "New Project"
3. **Selecione** "Deploy from GitHub repo"
4. **Escolha** seu repositório do bot
5. **Aguarde** o build automático

### 3. Configurar Variáveis de Ambiente

No painel do Railway:
1. **Vá** para a aba "Variables"
2. **Adicione** as seguintes variáveis:

```env
DISCORD_TOKEN = SEU_TOKEN_AQUI
GUILD_ID = SEU_GUILD_ID_AQUI
CLIENT_ID = SEU_CLIENT_ID_AQUI
NODE_ENV = production
```

⚠️ **IMPORTANTE**: Substitua pelos seus valores reais!

### 4. Verificar Funcionamento

1. **Verifique** os logs na aba "Deployments"
2. **Procure** por: `✅ Bot online como [Nome do Bot]!`
3. **Teste** os comandos no Discord

## 🎯 Comandos Disponíveis

- `/time` - Horário atual
- `/partida` - Próximas partidas
- `/resultado` - Resultados recentes
- `/jogador` - Estatísticas de jogador
- `/ranking` - Ranking mundial

## 💡 Dicas Extras

### Manter Bot Ativo 24/7
- O Railway mantém automaticamente
- Para garantia extra, use [UptimeRobot](https://uptimerobot.com)
- Configure ping para: `https://seu-projeto.railway.app/ping`

### Monitoramento
- **Logs**: Aba "Deployments" > "View Logs"
- **Métricas**: Aba "Metrics"
- **Status**: `https://seu-projeto.railway.app/health`

### Custos
- **Plano Hobby**: $5/mês com $5 de crédito grátis
- **Uso típico**: ~$1-3/mês para um bot simples
- **Monitoramento**: Aba "Usage"

## 🔧 Solução de Problemas

### Bot não inicia
1. **Verifique** variáveis de ambiente
2. **Confira** logs de erro
3. **Teste** token no Discord Developer Portal

### Comandos não aparecem
1. **Aguarde** até 1 hora (comandos globais)
2. **Verifique** GUILD_ID (comandos do servidor)
3. **Reinicie** o bot no Railway

### Erro de permissões
1. **Verifique** intents no Discord Developer Portal
2. **Confirme** permissões do bot no servidor
3. **Reinstale** o bot se necessário

---

✅ **Pronto!** Seu bot está rodando 24/7 na nuvem! 🎉