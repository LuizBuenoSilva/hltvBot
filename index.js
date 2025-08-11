const { Client, GatewayIntentBits, Collection, SlashCommandBuilder, EmbedBuilder } = require('discord.js');
require('dotenv').config();

// Keep-alive para plataformas de deploy
if (process.env.NODE_ENV === 'production') {
    try {
        require('./keep-alive');
    } catch (error) {
        console.log('Keep-alive não encontrado, continuando sem ele...');
    }
}

// Criar cliente Discord
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// Coleção de comandos
client.commands = new Collection();

// Dados de exemplo (simulando API HLTV)
const exemploJogadores = {
    's1mple': {
        nome: 's1mple',
        time: 'NAVI',
        rating: '1.28',
        kd: '1.31',
        adr: '85.2',
        kast: '72.1%',
        impacto: '1.35'
    },
    'zywoo': {
        nome: 'ZywOo',
        time: 'Vitality',
        rating: '1.27',
        kd: '1.29',
        adr: '84.8',
        kast: '71.8%',
        impacto: '1.33'
    },
    'sh1ro': {
        nome: 'sh1ro',
        time: 'Cloud9',
        rating: '1.19',
        kd: '1.21',
        adr: '78.5',
        kast: '74.2%',
        impacto: '1.25'
    }
};

const exemploRanking = [
    { posicao: 1, time: 'NAVI', pontos: 1000 },
    { posicao: 2, time: 'Vitality', pontos: 856 },
    { posicao: 3, time: 'FaZe', pontos: 798 },
    { posicao: 4, time: 'Cloud9', pontos: 654 },
    { posicao: 5, time: 'ENCE', pontos: 612 }
];

const exemploPartidas = [
    {
        time1: 'NAVI',
        time2: 'Vitality',
        data: '2024-01-15',
        hora: '15:00',
        evento: 'IEM Katowice 2024',
        status: 'Agendada'
    },
    {
        time1: 'FaZe',
        time2: 'Cloud9',
        data: '2024-01-15',
        hora: '18:30',
        evento: 'BLAST Premier',
        status: 'Agendada'
    }
];

const exemploResultados = [
    {
        time1: 'NAVI',
        time2: 'Astralis',
        placar: '16-12',
        mapa: 'Mirage',
        evento: 'IEM Cologne 2024',
        data: '2024-01-10'
    },
    {
        time1: 'Vitality',
        time2: 'G2',
        placar: '16-8',
        mapa: 'Inferno',
        evento: 'BLAST Premier',
        data: '2024-01-09'
    }
];

// Comandos
const commands = [
    {
        data: new SlashCommandBuilder()
            .setName('time')
            .setDescription('Mostra o horário atual'),
        async execute(interaction) {
            const agora = new Date();
            const horario = agora.toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('🕐 Horário Atual')
                .setDescription(`**${horario}** (Horário de Brasília)`)
                .setTimestamp();
            
            await interaction.reply({ embeds: [embed] });
        }
    },
    {
        data: new SlashCommandBuilder()
            .setName('partida')
            .setDescription('Mostra próximas partidas de CS2'),
        async execute(interaction) {
            const embed = new EmbedBuilder()
                .setColor('#ff6b35')
                .setTitle('🎮 Próximas Partidas CS2')
                .setDescription('Confira as próximas partidas:')
                .setTimestamp();
            
            exemploPartidas.forEach((partida, index) => {
                embed.addFields({
                    name: `${partida.time1} vs ${partida.time2}`,
                    value: `📅 **Data:** ${partida.data}\n🕐 **Hora:** ${partida.hora}\n🏆 **Evento:** ${partida.evento}\n📊 **Status:** ${partida.status}`,
                    inline: true
                });
            });
            
            await interaction.reply({ embeds: [embed] });
        }
    },
    {
        data: new SlashCommandBuilder()
            .setName('resultado')
            .setDescription('Mostra resultados recentes de partidas'),
        async execute(interaction) {
            const embed = new EmbedBuilder()
                .setColor('#28a745')
                .setTitle('📊 Resultados Recentes')
                .setDescription('Últimos resultados de partidas:')
                .setTimestamp();
            
            exemploResultados.forEach((resultado, index) => {
                embed.addFields({
                    name: `${resultado.time1} vs ${resultado.time2}`,
                    value: `🎯 **Placar:** ${resultado.placar}\n🗺️ **Mapa:** ${resultado.mapa}\n🏆 **Evento:** ${resultado.evento}\n📅 **Data:** ${resultado.data}`,
                    inline: true
                });
            });
            
            await interaction.reply({ embeds: [embed] });
        }
    },
    {
        data: new SlashCommandBuilder()
            .setName('jogador')
            .setDescription('Mostra estatísticas de um jogador')
            .addStringOption(option =>
                option.setName('nome')
                    .setDescription('Nome do jogador')
                    .setRequired(true)
                    .addChoices(
                        { name: 's1mple', value: 's1mple' },
                        { name: 'ZywOo', value: 'zywoo' },
                        { name: 'sh1ro', value: 'sh1ro' }
                    )
            ),
        async execute(interaction) {
            const nomeJogador = interaction.options.getString('nome');
            const jogador = exemploJogadores[nomeJogador];
            
            if (!jogador) {
                await interaction.reply('❌ Jogador não encontrado!');
                return;
            }
            
            const embed = new EmbedBuilder()
                .setColor('#ffd700')
                .setTitle(`👤 Estatísticas - ${jogador.nome}`)
                .setDescription(`Jogador do time **${jogador.time}**`)
                .addFields(
                    { name: '⭐ Rating 2.0', value: jogador.rating, inline: true },
                    { name: '💀 K/D Ratio', value: jogador.kd, inline: true },
                    { name: '🎯 ADR', value: jogador.adr, inline: true },
                    { name: '📊 KAST', value: jogador.kast, inline: true },
                    { name: '💥 Impact Rating', value: jogador.impacto, inline: true }
                )
                .setTimestamp();
            
            await interaction.reply({ embeds: [embed] });
        }
    },
    {
        data: new SlashCommandBuilder()
            .setName('ranking')
            .setDescription('Mostra o ranking mundial de times'),
        async execute(interaction) {
            const embed = new EmbedBuilder()
                .setColor('#dc3545')
                .setTitle('🏆 Ranking Mundial HLTV')
                .setDescription('Top 5 times do mundo:')
                .setTimestamp();
            
            exemploRanking.forEach(time => {
                const emoji = time.posicao === 1 ? '🥇' : time.posicao === 2 ? '🥈' : time.posicao === 3 ? '🥉' : '🏅';
                embed.addFields({
                    name: `${emoji} #${time.posicao} - ${time.time}`,
                    value: `📊 **Pontos:** ${time.pontos}`,
                    inline: true
                });
            });
            
            await interaction.reply({ embeds: [embed] });
        }
    }
];

// Registrar comandos
commands.forEach(command => {
    client.commands.set(command.data.name, command);
});

// Evento quando o bot fica online
client.once('ready', async () => {
    console.log(`✅ Bot online como ${client.user.tag}!`);
    
    try {
        console.log('🔄 Registrando comandos slash...');
        
        const guild = client.guilds.cache.get(process.env.GUILD_ID);
        if (guild) {
            await guild.commands.set(commands.map(cmd => cmd.data));
            console.log('✅ Comandos slash registrados com sucesso!');
        } else {
            console.log('⚠️ Guild não encontrada, registrando comandos globalmente...');
            await client.application.commands.set(commands.map(cmd => cmd.data));
            console.log('✅ Comandos globais registrados!');
        }
    } catch (error) {
        console.error('❌ Erro ao registrar comandos:', error);
    }
});

// Evento para interações (comandos slash)
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = client.commands.get(interaction.commandName);
    
    if (!command) {
        console.error(`❌ Comando ${interaction.commandName} não encontrado.`);
        return;
    }
    
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error('❌ Erro ao executar comando:', error);
        
        const errorMessage = {
            content: '❌ Houve um erro ao executar este comando!',
            ephemeral: true
        };
        
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp(errorMessage);
        } else {
            await interaction.reply(errorMessage);
        }
    }
});

// Login do bot
client.login(process.env.DISCORD_TOKEN);