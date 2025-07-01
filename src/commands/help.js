const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('List available commands'),
  async execute(interaction) {
    const commands = interaction.client.commands.map(c => c.data.name).join(', ');
    await interaction.reply(`Available commands: ${commands}`);
  }
};

