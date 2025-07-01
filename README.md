# Versation Discord Bot

This project provides a minimal Discord bot using **discord.js**. Commands and events are loaded dynamically from the `src/commands` and `src/events` folders.

## Setup

1. Ensure you have Node.js 18 or higher.
2. Create a `.env` file with `DISCORD_TOKEN=<your bot token>`.
3. Install dependencies with `npm install` (internet access required).
4. Start the bot using `npm start`.

## Features

- Slash command support (e.g. `/ping`, `/help`).
- Command and event handlers for easy organization.
- Simple logger utility for debugging and error messages.

## Development

Use `npm run debug` to launch the bot with Node's inspector for debugging.

## Adding Commands and Events

Add new command modules to `src/commands`. Each module should export a `SlashCommandBuilder` instance as `data` and an `execute` function. When the bot starts, all files in this directory are loaded automatically.

Add new event modules under `src/events` with `name`, `execute`, and optionally `once`. They are registered automatically at startup.

## Logging

The logger outputs messages in the format `[YYYY-MM-DDTHH:mm:ss.sssZ] [LEVEL] message`. Levels include `INFO`, `WARN`, `ERROR` and `DEBUG`.
