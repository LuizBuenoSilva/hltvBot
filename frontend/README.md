# 🎮 CS2 Bot Discord - Frontend

Frontend moderno e responsivo para o Bot Discord Counter-Strike 2, desenvolvido com Next.js 15, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface atrativa com gradientes e efeitos visuais
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Performance**: Otimizado com Next.js 15 e Turbopack
- **SEO Otimizado**: Meta tags e Open Graph configurados
- **Acessibilidade**: Seguindo as melhores práticas de UX/UI

## 🛠️ Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **React 18** - Biblioteca de interface

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Netlify

1. Conecte seu repositório
2. Configure build command: `npm run build`
3. Configure publish directory: `out` (se usando export estático)

### Outras Plataformas

- **Railway**: Suporte nativo ao Next.js
- **Render**: Deploy automático via GitHub
- **AWS Amplify**: Integração com AWS

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globais
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Página inicial
│   └── components/          # Componentes reutilizáveis (futuro)
├── public/                  # Arquivos estáticos
├── package.json
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── next.config.js          # Configuração Next.js
```

## 🎨 Personalização

### Cores e Tema

As cores principais estão definidas no Tailwind CSS:
- **Laranja**: `from-orange-500 to-red-600` (botão principal)
- **Azul**: `from-gray-900 via-blue-900 to-purple-900` (gradiente de fundo)
- **Roxo**: Acentos e efeitos visuais

### Modificar URL do Bot

Para alterar a URL de convite do bot, edite a constante `botInviteUrl` em `src/app/page.tsx`:

```typescript
const botInviteUrl = "https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&integration_type=0&scope=applications.commands";
```

## 📱 Recursos da Landing Page

- **Hero Section**: Título impactante com call-to-action
- **Features Grid**: Três principais funcionalidades do bot
- **Commands Section**: Lista de comandos disponíveis
- **Footer**: Links e informações adicionais
- **Efeitos Visuais**: Animações e gradientes

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Linting
npm run lint
```

## 📈 Performance

- **Core Web Vitals**: Otimizado para pontuação máxima
- **Image Optimization**: Imagens otimizadas automaticamente
- **Code Splitting**: Carregamento sob demanda
- **Static Generation**: Páginas pré-renderizadas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a [documentação do Next.js](https://nextjs.org/docs)
2. Consulte a [documentação do Tailwind CSS](https://tailwindcss.com/docs)
3. Abra uma issue no repositório

---

**Desenvolvido com ❤️ para a comunidade Counter-Strike**
